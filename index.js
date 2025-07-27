const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  console.log('Datos recibidos del formulario:', req.body);
  res.status(200).json({ message: 'Mensaje recibido correctamente' });
});

app.get('/', (req, res) => {
  res.send('API corriendo. Usa POST para enviar datos.');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
