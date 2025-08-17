const express = require('express');
const app = express();
const route = express.Router();

const path = require('path')
const helmet = require('helmet')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(helmet());
app.use(express.json())


const port = process.env.PORT || 3002


const hatsuneMikuRouter = require('./routes/songs');
const kaijuRouter = require('./routes/kaiju');


app.get('/', (req, res) => {
    res.send({name: "Minerva"})
})

app.get('/car', (req, res) => {
    res.send('This is a get')
})

app.post('/car', (req, res) => {
    res.send('This is a post')
})

app.delete('/car', (req, res) => {
    res.send('This is a delete')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/a/', (req, res) => {
    res.send('a/')
})

app.get('/cors/:cor/music/:music', (req, res) => {
    let cor = req.params.cor
    let music = req.params.music
    res.send(`${cor} and ${music}`)
})

app.get('/route', (req, res, next) => {
    console.log('I love route a')
    next();
}, (req, res, next) => {
    console.log('I love route b')
    next();
}, (req, res) => {
    console.log('Welcome to the true mans world')
    res.send('Storyline')
})


app.route('/chocolat')
    .get((req, res) => {
        res.send('Isabela te entregou algo')
    })
    .post((req, res) => {
        res.send('Você colocou algo nela')
    })
    .put((req, res) => {
        res.send('Você editou ela')
    })
    .delete((req, res) => {
        res.send('Você deletou ela.')
    })


app.use('/hatsune-miku', hatsuneMikuRouter)
app.use('/kaiju', kaijuRouter)

app.listen(port, () =>  {
    console.log(`App is running at port ${port}`)
})