// : Aplicación Express simple con array en memoria
const express = require('express');
const app = express();
app.use(express.json());

let elementos = [{ id: 1, nombre: 'Elemento inicial' }];

// GET: Retornar el array
app.get('/api/elementos', (req, res) => {
  res.json(elementos);
});

// POST: Agregar elementos
app.post('/api/elementos', (req, res) => {
  const nuevo = req.body;
  elementos.push(nuevo);
  res.status(201).json(nuevo);
});
