
const UsuarioService = require('../services/usuario.service');

class UsuarioController {
  static listar = async  (req,res) => {


    let filtros = req.body ?? {};
    const data = await UsuarioService.listar(filtros);
    res.status(200).json({
      error:false,
      message:'Se listaron usuarios correctamente',
      data:data,
    });
  }
}
module.exports = UsuarioController;