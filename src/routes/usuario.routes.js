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

router.put('/usuarios/actualizar',
body('usuario_id').notEmpty().withMessage('Usuario id es requerido'),
body('username').notEmpty().withMessage('Username es requerido'),
body('name').notEmpty().withMessage('Name es requerido'),
UsuarioController.actualizar);


module.exports = router;