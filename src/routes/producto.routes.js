
import { Router } from 'express';
import { listar } from '../controllers/producto.controller.js';

const router = Router();


router.get('/productos',listar);


export default router;