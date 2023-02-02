
const UsuarioService = require('../services/usuario.service');
const ResponseHelper = require('../helpers/response.helper');

class UsuarioController {
  static listar = async  (req,res) => {
    try {
      let filtros = req.body || {};
      const data = await UsuarioService.listar(filtros);

      return ResponseHelper.success(res,'Se listaron usuarios correctamente',data);
      
    } catch (error) {
      return ResponseHelper.error(res,error.message);
    }
    
  }

  static obtenerDetalle = async  (req,res) => {
    try {
      let id = req.params.id;
      
      

      let filtros = {
        usuario_id:id
      };
      const data = await UsuarioService.obtenerDetalle(filtros);

      return ResponseHelper.success(res,'Se obtuvo usuario correctamente',data);
      
    } catch (error) {
      return ResponseHelper.error(res,error.message);
    }
    
  }

  static eliminar = async  (req,res) => {
    try {
      let id = req.params.id;
      
      

      let filtros = {
        usuario_id:id
      };
      const data = await UsuarioService.eliminar(filtros);

      return ResponseHelper.success(res,'Se elimino usuario correctamente',data);
      
    } catch (error) {
      return ResponseHelper.error(res,error.message);
    }
    
  }

  static agregar = async  (req,res) => {
    try {

      ResponseHelper.errorValidator(req,res);

      let data = req.body || {};
      const result = await UsuarioService.agregar(data);

      return ResponseHelper.success(res,'Se agrego usuario correctamente',result);
      
    } catch (error) {
      return ResponseHelper.error(res,error.message);
    }
  }

  static actualizar = async  (req,res) => {
    try {

      ResponseHelper.errorValidator(req,res);

      let data = req.body || {};
      const result = await UsuarioService.actualizar(data);

      return ResponseHelper.success(res,'Se actualizo usuario correctamente',result);
      
    } catch (error) {
      return ResponseHelper.error(res,error.message);
    }
  }
}
module.exports = UsuarioController;