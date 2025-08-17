const express = require('express');
const app = express();

const router = express.Router();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
})

app.route('/book')
    .get((req, res) => {
        res.send('Get a random book');
    })
    .post((req, res) => {
        res.send('Add a book');
    })
    .put((req, res) => {
        res.send('Update the book')
    })



const calendarRouter = require('../routes/calendar')

app.use('/calendar', calendarRouter)

app.listen(port, () =>{
    console.log(`The server is listening at http://localhost:${port}`);
})