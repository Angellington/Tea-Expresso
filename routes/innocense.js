const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'Alice', role: 'admin', token: 'abc123' },
    { id: 2, name: 'Bob', role: 'user', token: 'xyz789' }
  ];

  router.all('/admin/', (req, res, next) => {
    const token = req.headers['authorization'];

    if(!token) return res.status(401).send('Not authorized!')

    const user = users.find(u => u.token === token);
    if(!user || user.role !== 'admin') return res.status(403).send('Denies Access');

    next()
})

module.exports = router