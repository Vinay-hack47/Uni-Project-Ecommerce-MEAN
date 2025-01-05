const express = require('express')
const app = express()
const path = require('path')
const dbconfig = require('./dbconfig/dbconfig')
dbconfig()

require('dotenv').config()

const pagepath = path.join(__dirname,"pages/");

app.use(express.static('public'))
app.get('/', (req, res)=>{
    res.sendFile(pagepath+'index.html')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:3000`);
})