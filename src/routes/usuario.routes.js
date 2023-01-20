const { Router } = require('express')
const UsuarioController = require('../controllers/usuario.controller');


const router = Router();


router.get('/usuarios',UsuarioController.listar); 


module.exports = router;