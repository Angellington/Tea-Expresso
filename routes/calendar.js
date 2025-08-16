const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Passou pelo calendar router')
    next();
});

router.get('/events', (req, res) => {
    res.send('Lista de eventos');
});

router.get('/day/:id', (req, res) => {
    res.send(`Eventos do dia ${req.params.id}`)
});

module.exports = router;