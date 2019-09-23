const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRouter = require('../routes/user-router.js');
const authRouter = require("../auth/auth-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users/', userRouter);
server.use('/api/auth/', authRouter);

//tesing server
server.get('/', (req, res) => {
    res.send(`api is running`)
})

module.exports = server;