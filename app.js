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
    res.download(filePath, (err) => {
        if(err){
            console.error('Error: ', err)
            res.status(500).send('Erro ao baixar arquivo')
        } else {
            console.log('Bixado!')
        }
    })
})





app.listen(port, () => {
    console.log('The server is running at port 3001')
})