const express = require('express');
const router = express.Router();

const blogEntry = require('../models/blog')

router.get('/', async (req, res) => {
    try {
        const blogs = await blogEntry.all
        res.json({blogs})
    } catch(err) {
        res.status(500).json({err})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const blogs = await blogEntry.findById(parseInt(req.params.id))
        res.json(blogs)
    } catch(err) {
        res.status(404).json({err})
    }
})

router.post('/', async (req, res) => {
    try {
        const blogs = await blogEntry.create(req.body.title, req.body.name, req.body.text)
        res.json(blogs)
    } catch(err) {
        res.status(404).json({err})
    }
})
