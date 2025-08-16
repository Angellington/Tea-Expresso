const express = require('express');
const app = express();

const path = require('path')

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




app.listen(port, () => {
    console.log('The server is running at port 3001')
})