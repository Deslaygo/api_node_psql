
const { Router } = require('express');
const ProductoController = require('../controllers/producto.controller');

const router = Router();


router.get('/productos',ProductoController.listar);


module.exports = router;