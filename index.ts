//Ejemplo brevisimo de implementación de express con typescript.

import express from 'express'

type Usuario = {
  id: string,
  name: string,
}

const app = express()
app.use(express.json()) // interpreta peticiones que llegan a través de POST.
app.get('/', (req, res) => {
  res.send('hola mundo')
})

app.post('/', (req, res) => {
  const {name} = req.body as Usuario
  console.log(name);
  
  res.send('ok');
})

app.listen(3000, () => console.log('Escuchando'))
