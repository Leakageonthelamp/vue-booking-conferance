const express = require('express');
const server = express();
const PORT = 3000;

server.get('*',(req,res)=> {
    res.end('<h1>Backend server running</h1>')
})

server.listen(PORT , () => console.log(`server is starting at port ${PORT}.`))