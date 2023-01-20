const db = require('../config/db.config');
const UsuarioRH = require('../repositories_helpers/usuario.rh');

class UsuarioRepo {

  static async listar(filtros) {

    try {
      const knex = db.getQueryBuilder();
      const data =  await knex.select(
        'su.usuario_id',
        'su.username'
        ).where((builder) => UsuarioRH.getFiltrosWhereListar(builder,filtros))
        .from('usuarios AS su');
        
        return data || [];
      
    } catch (error) {
      console.log(error.message);
    }
  
  }

}

module.exports = UsuarioRepo;