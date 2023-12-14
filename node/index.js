// const moduloA = require('./moduloA')

// function pegarValorIndex() {
//     const valorIndex = 20;
//     console.log(valorIndex);
// }

// moduloA.valorModuloA()

const express = require('express')

const app = express()

app.get("/", function(req, res){
    res.send("Hello World")
})

app.listen(3000)