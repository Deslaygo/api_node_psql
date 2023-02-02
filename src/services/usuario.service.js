const UsuarioRepo = require('../repositories/usuario.repo.js');
const SecurityUtil = require('../utils/security.util');


class UsuarioService {
  static async listar(filtros){
    return UsuarioRepo.listar(filtros);
  }

  static async agregar(data){
    try {
      let password = await SecurityUtil.getPassword(data.password);
      let usuario = {
        usuario_id: SecurityUtil.getNanoId(),
        username: data.username,
        password: password,
        name: data.name || data.username,
      };

      let usuarios = await UsuarioService.listar({username:data.username});

      if(usuarios.length != 0)
        throw new Error('El username registrado ya existe, intenlo con uno nuevo');

      await UsuarioRepo.agregar(usuario);

      return usuario;
      
    } catch (error) {
      throw error;
    }
  }

  static async actualizar(data){
    try {
      let usuario = {
        usuario_id: data.usuario_id,
        username: data.username,
        name: data.name,
      };

      await UsuarioRepo.actualizar(usuario);

      return usuario;
      
    } catch (error) {
      throw error;
    }
  }

  static async obtenerDetalle(filtros){
    return UsuarioRepo.obtenerDetalle(filtros);
  }

  static async eliminar(datos){
    return UsuarioRepo.eliminar(datos);
  }
}

module.exports = UsuarioService;
