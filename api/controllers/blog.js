const blogEntry = require('../models/blog')

const index =  async (req, res) => {
    try {
        const blogs = await blogEntry.all
        res.json(blogs)
    } catch(err) {
        res.status(500).json({error: err})
    }
}

async function show  (req, res) {
    try {
        const blogs = await blogEntry.findById(parseInt(req.params.id));
        res.status(200).json(blogs)
    } catch(err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        const blogs = await blogEntry.create(req.body.title, req.body.name, req.body.text);
        res.status(201).json(blogs)
    } catch(err) {
        res.status(404).json({err})
    }
}

module.exports = {index, show, create}
