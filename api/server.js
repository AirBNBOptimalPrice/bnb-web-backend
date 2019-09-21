const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRouter = require('../routes/user-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/user/', userRouter);

//tesing server
server.get('/', (req, res) => {
    res.send(`running`)
})

module.exports = server;