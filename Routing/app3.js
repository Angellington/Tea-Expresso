const express = require('express');
const app = express();

const path = require('path')

const helmet = require('helmet')
app.use(helmet());
app.use(express.static('public'));


// Configura o EJS como template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


const filePath = path.join(__dirname, 'files', 'exemplo.pdf')


const port = process.env.PORT || 3001



app.get('/example', (req, res, next) => {
    console.log('Aguarde...')
    console.log(filePath)
    next();
}, (req, res, next) => {
    console.log('3')
    next();
}, (req, res, next) => {
    console.log('2')
    next();
}, (req, res, next) => {
    console.log('1')
    next();
}, (req, res) => {
    res.download(filePath, {
        headers: {
            'Content-Type': 'applicacation/zip',
            'Content-Disposition':  'inline',
            'Cache-Control': 'no-store#'
        },
        maxAge: 60 * 1000
    }, (err) => {
        if(err){
            console.error('Error: ', err)
            res.status(500).send('Erro ao baixar arquivo')
        } else {
            console.log('Bixado!')
        }
    })
})

const buffer = Buffer.from(
`Do you know, that love's a crime
Do you know, I love you 
Give me one word that has a meaning
Give me one word that has a life
Then I’ll tear open my heart and
Let you see what’s inside my reflection
'Cause your word, ”my” word and her word 
Has no meaning before a single comma,
So I’ll tear open my heart and 
Let you see what’s inside my perfection
Because we’ll never put an end to 
The three words given to those who have left us 
"I love you,"`)


app.get('/end', (req, res) => {
    res.end(buffer, 'utf-8', (callback) => {
        console.log(1 + 1)
    })
})

app.get('/json', (req, res) => {
    const names = [
        { id: 1, name: 'Tobi' },
        { id: 2, name: 'Obito' }
    ];

    const hasError = true; 

    if(hasError) {
        return res.status(500).json({ error: 'message' }); 
    }

    res.status(200).json(names); 
});

app.get('/user', (req, res) => {
    res.jsonp({ user: 'tobi' });
})

app.get('/redirect', (req, res) => {
    res.redirect('/foo/bar')
})

app.get('/new', (req, res) => {
    res.redirect('/admin')
})

app.get('/admin', (req, res) => {
    res.send('É os ADM da bagaça')
})


app.get('/montese/:param', (req, res) => {
    // vai para a home
    if(req.params.param === 'hom'){
        res.redirect('/home')
    }
    // vai para a home permanentemente
    if(req.params.param === 'home'){
        res.redirect(301, '/home')
    }
    // vai direto para o google
    if(req.params.param === 'google'){
        res.redirect('http://google.com.br')
    }
})

// Retorna para duas rotas atrás
app.get('/rio-grande-do-sul/esteio/parque-amador/rua-guararapes', (req, res) => {
    res.redirect('..')
})

app.get('/catholic', (req, res) => {
    res.render('index')
})


app.get('/mary', (req, res) => {
    res.render('main', (err, html) => {
        res.send(html)
    })
})

app.get('/miguel', (req, res) => {
    res.render('user', { name: 'Jesus' }, (err, html) => {
        if(err){
            console.error('Error: ', err)
        } else {
            console.log(html)
        }
    })
})

app.get('/evangelhos', (req, res) => {
    res.render('user', (err, html) => {
        res.send(html)
    })
})

app.get('/send/:type', (req, res) => {
    const param = req.params.type;
    if(param == 'buffer'){
        res.set('Content-Type', 'text/html')
        res.send(Buffer.from('whooop'))
    };
    if(param == 'json'){
        res.send({some: 'json'})
    };
    if(param == 'html'){
        res.send('<p>some html</p>')
    };
    if(param == 'err'){
        res.status(404).send('Sorry, we cannot find that')
    };
    if(param == 'blew'){
        res.status(500).send({ error: 'somenthing blew up'})
    };
})

app.get('/file/:name', (req, res, next) => {
    const options ={
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    const fileName = req.params.name;

    res.sendFile(fileName, options, (err) => {
        if(err) {
            next(err)
        } else {
            console.log('Sent', fileName)
        }
    })
})

app.get('/minister', (req, res) => {
    const userMinister = false;

    if(!userMinister){
        // return res.sendStatus(403);
        return res.status(403).render('denied')
    }
    res.send('Bem vindo, minister!!')
})

app.listen(port, () => {
    console.log('The server is running at port 3001')
})