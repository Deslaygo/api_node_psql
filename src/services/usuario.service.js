const UsuarioRepo = require('../repositories/usuario.repo.js');


class UsuarioService {
  static async listar(filtros){
    return UsuarioRepo.listar(filtros);
  }
}

module.exports = UsuarioService;
