const express = require("express");
const cors= require("cors")
const app = express()
app.use(cors());
app.use(express.json());




app.listen(3336,() => console.log('server rodando'))