const express = require("express");

const app = express();
const port = 4000;



app.get("/", (req, res) => {
    return res.send(`Olá, Servidor rodando na porta: ${port}!`);
})

app.post("/", (req, res) => {

    return res.send("Olá, primeiro servidor rodado!");
});

app.put("/", (req, res) => {

    return res.send("Olá, primeiro servidor rodado!") ;
});

app.delete("/", (req, res) => {
    return res.send("Olá, primeiro servidor rodado!");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}!`);
});