const express = require('express');
const app = express();

const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/', (req, res) => {
    res.send('Got a POST  request')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE  request at /user')
})

app.get('/saudacao', (req, res) =>{
    res.send('Olá visitante!!')
})

app.post('/mensagem', (req, res) => {
    res.send('Mensagem recebida com sucesso!')
})

app.put('/atualizar-dados', (req, res) => {
    res.send('Dados atualizados')
})

app.delete('/remover-item', (req, res) => {
    res.send('Item removido do sistema!')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})