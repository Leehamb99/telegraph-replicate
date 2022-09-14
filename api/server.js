const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const blogRoutes = require('./routes/blog')
server.get('/', (req, res) => res.send('Hello, world!'))

server.use('/blogs', blogRoutes )


module.exports = server
