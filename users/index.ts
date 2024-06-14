// sustituimos app.get por router.get
import { Router } from 'express'

const router = Router()

type Usuario = {
  id: string,
  name: string,
}

router.get('/', (req, res) => {
  res.send('hola mundo')
})

router.post('/', (req, res) => {
  const {name} = req.body as Usuario
  console.log(name);
  
  res.send('ok');
})

export default router