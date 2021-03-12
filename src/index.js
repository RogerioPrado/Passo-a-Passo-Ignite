const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (request, response) =>{
  const query = request.query;
  console.log(query);
  return response.json(["Curso 01", "Curso 02", "Curso 03"]);
});

app.post("/courses", (request, response) =>{
  const body = request.body;
  console.log(body);
  return response.json(["Curso 01", "Curso 02", "Curso 03", "Curso 04"]);
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