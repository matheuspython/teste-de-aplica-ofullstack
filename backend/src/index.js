const express = require("express");
const cors = require("cors")
const { uuid } = require("uuidv4");
const port = process.env.PORT || 8877;
const app = express();



app.use(cors());
app.use(express.json());


const empregadas = [];

app.get('/', (req,res) => res.json(empregadas));

app.post('/', (req, res) => {
  const { nome, cep, disponibilidade } = req.body;
  const empregada = { id:uuid(), nome, cep, disponibilidade };

  empregadas.push(empregada);
  return res.json(empregada);
})

app.delete('/:id', (req, res) => {
  const { id } = req.params;

  const index = empregadas.findIndex(empregada => empregada.id === id);
  empregadas.splice(index,1);
  if(index > 0) {
    return res.send()
  }else{
    res.status(400).json({erro : "deu erro"})
  }
})



app.listen(port,() => console.log('server rodando'))