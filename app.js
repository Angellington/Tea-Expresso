// import Express
const express = require('express');
const app = express();
const router = express.Router();
const rfs = require('rotating-file-stream');


// libs
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

// app.set
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// app.use
app.use(helmet());
app.use(express.json())
app.use(morgan('dev'))

const accessLogStream = require('./middlewares/acessLogStream');app.use(morgan('combined', { stream: accessLogStream }));

// port
const port = process.env.PORT || 3002

// middlewares

const hatsuneMikuRouter = require('./routes/songs');
const kaijuRouter = require('./routes/kaiju');
const yashiro = require('./routes/yashiro')
const innocense = require('./routes/innocense')
const lasah = require('./routes/lasah');
const parameters = require('./routes/parameters');




// morgan('tiny')
// morgan(':method :url :status :res[content-length] - :response-time ms');



const customLogger = (tokens, req, res) => 
    [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ');
  
app.use(morgan(customLogger));

  
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

// use middleware
app.use('/hatsune-miku', hatsuneMikuRouter)
app.use('/kaiju', kaijuRouter)
app.use(yashiro)
app.use(innocense)
app.use(lasah)
app.use(parameters)


// Router Methods
app.get('/links', (req, res, next) => {
    res.links({
        next: "http://api.example.com/users?page=2",
        last: "http://api.example.com/users?page=5"
    })
})


  
// server
app.listen(port, () =>  {
    console.log(`App is running at port ${port}`)
})