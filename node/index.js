// const moduloA = require('./moduloA')

// function pegarValorIndex() {
//     const valorIndex = 20;
//     console.log(valorIndex);
// }

// moduloA.valorModuloA()

const express = require('express')
const app = express()

app.use(express.json())

let users = [
    { id: 1, name: "Caio" },
    { id: 2, name: "Daio" },
    { id: 3, name: "Eaio"},
]

app.get("/", function (req, res) {
    res.send(users)
})

app.get("/", function(req,res){
    res.send(users)
})

app.get("/:id", function(req,res){
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    if(user) {
        res.json(user)
    }
    else{
        res.status(400).json({message: "Usuário não encontrado"})
    }
})

app.post("/users", function (req, res) {
    console.log(req.body);
    const { name } = req.body
    const id = users.length + 1
    const newUser = { id, name }

    users.push(newUser)
    res.status(201).json(newUser)
})

app.delete("/users/:id", (req,res) => {
    const id = parseInt(req.params.id)
    users = users.filter(user => user.id !== id);
    res.sendStatus(204)
})

app.listen(3000)