//Ejemplo brevisimo de implementación de express con typescript.

import express from 'express'
import usersRoute from './users'

const app = express()
app.use(express.json()) // interpreta peticiones que llegan a través de POST.
app.use('/', usersRoute)

app.listen(3000, () => console.log('Escuchando'))
