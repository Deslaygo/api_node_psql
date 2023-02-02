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

      await UsuarioRepo.agregar(usuario);

      return usuario;
      
    } catch (error) {
      throw error;
    }
  }

  static async obtenerDetalle(filtros){
    return UsuarioRepo.obtenerDetalle(filtros);
  }
}

module.exports = UsuarioService;
