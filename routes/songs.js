const express = require('express');
const app = express();


const router = express.Router();

let mikuData = []
let idCounter = 1

router.route("/")
    .post((req, res) => {
        const { name, song } = req.body
        const newData = { id: idCounter++, name, song }
        mikuData.push(newData)
        res.status(201).json(newData)
    })
    .get((req, res) => {
        res.json(mikuData)
    })

router.route("/:id")
    .get((req, res) => {
        const id = parseInt(req.params.id)
        const item = mikuData.find(m => m.id === id)
        if(!item) return res.status(404).json({ error: "Not found" })
        res.json(item)
    })
    .put((req, res) => {
        const id = parseInt(req.params.id)
        const index = mikuData.findIndex(m => m.id === id)
        if( index === -1 ) return res.status(404).json({ error: "Not found"})

        const { name, song } = req.body
        mikuData[index] = { ...mikuData[index], name, song }
        res.json(mikuData[index])
    })
    .delete((req, res) => {
        const id = parseInt(req.params.id)
        const index = mikuData.findIndex(m => m.id === id)
        if(index === -1) return res.status(404).json({ error: "Not found"})
        
        const deleted = mikuData.splice(index, 1)
        res.json(deleted[0])
    })

module.exports = router