const express = require('express');
const router = express.Router();

router.get('/lasah', (req, res) => {
    res.send('.I love you')
})

router.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, (req, res) => {
    const from = req.params[0]
    const to = req.params[1] || 'HEAD'
    res.send(`commit range ${from}..${to}`)
  })

  const fn = (req, res, next) => {
    console.log('Satisfaction')
    next('router');
  }



router.get('/foo', (req, res, next) => {
    console.log('I don\'t love you')
    next();
}, (req, res, next) => {
    console.log('1st callback')
    next();
}, (req, res, next) => {
    console.log('2nd callback')
    next('route');
}, (req, res, next) => {
    console.log('3rd callback')
    next('router')
}, (req, res, next) => {
    console.log('4th callback')
}, (req, res, next) => {
    console.log('5th callback')
    res.send('I love you');
})



  
module.exports = router