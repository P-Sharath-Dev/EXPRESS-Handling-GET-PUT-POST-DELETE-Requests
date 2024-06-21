const express = require('express');
const server = express();

//get request
server.get('/',(req,res)=>{
    res.send(`${req.method} request received successfully`);
});

//post request
server.post('/',(req,res)=>{
    res.send(`${req.method} request received successfully`);
});

//put request
server.put('/',(req,res)=>{
    res.send(`${req.method} request received successfully`);
});

//delete request
server.delete('/',(req,res)=>{
    res.send(`${req.method} request received successfully`);
});

module.exports = server;