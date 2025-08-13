const express = require('express');
const app = express();

const port = 3001

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.post('/', (req, res) => {
//     res.send('Got a POST  request')
// })

app.get('/', (req, res) => {
    res.send('Bem vindo ao sistema')
})
app.get('/sobre', (req, res) => {
    res.send('Sobre nós!')
})

app.get('/contato', (req, res) => {
    res.send('Página de contato')
})

app.post('/contato', (req, res) => {
    res.send('Mensagem enviada')
})

app.get('/saudacao/:nome', (req, res) => {
    res.send(`Olá!! ${req.params.nome}`)
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

app.get('/produto/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Você buscou pelo produto ${id}.`)
})

app.get('/buscar', (req, res) => {
    const nome = req.query.nome;
    
    if(!nome){
        return res.status(400).send('Query "nome" ausente; busque por: /buscar?nome=Notebook')
    }

    res.send(`Buscando por: ${nome}`)


    res.send(`Buscando por ${query}`)
})

app.get('/usuario', (req, res) => {
    res.send('Listando usuarios')
})

app.post('/usuario', (req, res) => {
    res.send('Usuário criado!')
})

app.put('/usuario', (req, res) => {
    res.send('Usuário atualizado')
})

app.delete('/usuario', (req, res) => {
    res.send('Usuário removido')
})

const verificarUsuario = (req, res, next) =>{
    console.log('Verificando usuario...')
    next();
}

const respostaFinal = (req, res) => {
    res.send('Usuário verificado com sucesso')
}

app.get('/verificacao', verificarUsuario, respostaFinal);

app.use((req, res, next) => {
    res.status(404).send("<h1>Faz o L (404)</h1>")
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})