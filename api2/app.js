const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const Routes = require('')

server.use('', )

const port = process.env.PORT || 3000;

server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server
