const express = require('express');
const router = express.Router();

router.param('user', (req, res, next, user) => {
    User.find(id, (err, user) =>{
        if(err) {
            return next(err);
        } else if (user){
            req.user = user;
            next();
        } else {
            next(new Error('User not found'));
        }
    })
})

router.param('id', (req, res, next, id) => {
    console.log('Interceptando param: ', id);
    req.user = { id, name: 'Minerva' };
    next();
})

router.get('/user/:id', (req, res, next) => {
    console.log('although this matches')
    next();
})

router.get('/user/:id', (req, res) => {
    console.log('and this matches too')
    res.send(`Usuário carregado: ${req.user.name} com id: ${req.user.id}`);
})

router.get('/posts/:postId', (req, res) => {
    res.send(`Post: ${req.params.postId}, título: ${req.post.title}`);
});

router.param('postId', (req, res, next, id) => {
    req.post = { id, title: "Meu post incrível" }; 
    next();
});
module.exports = router;