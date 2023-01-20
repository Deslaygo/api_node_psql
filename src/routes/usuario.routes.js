import { Router } from 'express'
import { listar } from '../controllers/usuario.controller.js';


const router = Router();


router.get('/usuarios',listar); 


export default router;