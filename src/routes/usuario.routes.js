const { Router, raw } = require('express')
const UsuarioController = require('../controllers/usuario.controller');
const { body } = require('express-validator');


const router = Router();


router.get('/usuarios',UsuarioController.listar); 

router.get('/usuarios/:id',UsuarioController.obtenerDetalle);

router.delete('/usuarios/:id',UsuarioController.eliminar);

router.post('/usuarios',
body('username').notEmpty().withMessage('Username es requerido'),
body('password').isLength({min:5}).withMessage('La contraseña debe contener al menos 5 caracteres').trim()
.not().isEmpty().withMessage('El password es requerido'),
UsuarioController.agregar); 


module.exports = router;