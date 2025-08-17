const express = require('express');
const { route } = require('./calendar');
const router = express.Router();

const path = require('path');

const filePath = path.join(__dirname, '..', 'assets', 'image.png' )

router.route('/')
    .get((req, res) => {
        res.download(filePath, {
            headers: {
                'Content-Type': 'application/png',
                'Content-Disposition': 'inline',
                'Cache-Control': 'no-store',
            }, 
        }, (err) => {
            if(err) return res.status(404).render('denied')
        })
    })

router.route('/calendar')
    .get((req, res) => {
        console.log('calendar')
        res.redirect('/hatsune-miku')
    })

module.exports = router