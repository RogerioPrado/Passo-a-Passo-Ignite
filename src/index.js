const express = require("express");
const {v4: uuidv4} = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

app.post("/account", (request, response) =>{
  const {cpf, name} = request.body;

  const customerAlreadyExists = customers.some( //Se tiver algum cfp igual ao cpf inserido a variavel receberá true
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists){
    return response.status(403).json({error:"Customer already exists!"})
  }
  
  const id = uuidv4();

  customers.push({
    cpf,
    name,
    id,
    statement:[]
  });


  return response.status(201).send();
});

app.get("/statement/:cpf", (request, response) =>{
  const {cpf} = request.params;
  
  const customer = customers.find(customer => customer.cpf === cpf);

  return response.json(customer.statement);
});

app.put("/courses/:id", (request, response) =>{
  const {id} = request.params;
  console.log(id); //http://localhost:3333/courses?page=1&order=desc
  return response.json(["Curso Inicial", "Curso 02", "Curso 03", "Curso 04"]);
});

app.patch("/courses/:id", (request, response) =>{
  return response.json(["Curso 01", "Curso 02", "Curso 03", "Curso Final"]);
});

app.delete("/courses", (request, response) =>{
  return response.json(["Curso 01", "Curso 02", "Curso 04"]);
});

app.listen(3333);