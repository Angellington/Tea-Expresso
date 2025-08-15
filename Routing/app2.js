const express = require('express');
const app = express();

const port = process.env.PORT || 3001

const path = require('path');

const filepath = path.join(__dirname, 'files', 'howl.txt')

app.get('/secret', (req, res, next) => {
    console.log('Primeira onda...')
    next();
})

app.get('/secret', (req, res) => {
    console.log('Reino Blanco.')
    res.send('Reino Blanco')
})

app.get('/', (req, res) => {
    res.send('root')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/random.text', (req, res) => {
    res.send('random.text')
})

// Essa rota vai corresponder a qualquer um com "a"
// app.get(/a/, (req, res) => {
//     res.send('/a/')
// })

// A rota vai corresponder a butterfly e dragonfly, mas não dragonflyman etc
app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  })
  


app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
});
/*	
userId	"34"
bookId	"8989"
 */

app.get('/plantae/:genus.:species', (req, res) => {
    res.send(req.params)
})

// Route handlers

app.get('/example/a', (req, res) => {
    res.send('Hello from A!')
})

app.get('/example/b', (req, res, next) => {
    console.log('The response will be sent by the next function...')
    next()
}, (req, res) => {
    res.send('Hello from B')
})

// Com array
const  cb0 = (req, res, next) => {
    console.log('CB0')
    next()
}

const  cb1 = (req, res, next) =>  {
    console.log('CB1')
    next()
}

const  cb2 = (req, res) => {
    res.send('Hello from C')
}

app.get('/example/c', [cb0, cb1, cb2])

app.get('/dandandan', (req, res) => {
    console.log('Dandadan é bom demais!!');

    res.download(filepath);
})


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:3001`)
})
