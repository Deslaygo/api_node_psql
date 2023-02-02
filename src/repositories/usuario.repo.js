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
      throw error;
    }
  }

  static async obtenerDetalle(filtros) {
    try {
      const knex = db.getQueryBuilder();
      const data =  await knex.first(
        'su.usuario_id',
        'su.username'
        )
        .where('su.usuario_id',filtros.usuario_id)
        .from('usuarios AS su');

        return data || {};
      
    } catch (error) {
      throw error;
    }
  }

  static async eliminar(datos) {
    try {
      const knex = db.getQueryBuilder();
      const result =  await knex('usuarios')
      .where('usuario_id',datos.usuario_id)
      .del();
      
      if(result === 0)
        throw new Error('El usuario no fue encontrado');

        return true;
      
    } catch (error) {
      throw error;
    }
  }

  static async actualizar(datos) {
    try {
      const knex = db.getQueryBuilder();
      const result =  await knex('usuarios')
      .where('usuario_id',datos.usuario_id)
      .update({
        username:datos.username,
        name:datos.name,
      });
      
      if(result === 0)
        throw new Error('El usuario no fue encontrado, no se pudo actualizar');

        return true;
      
    } catch (error) {
      throw error;
    }
  }

  static async validarUsuario(username,password) {
    try {
      const knex = db.getQueryBuilder();
      const data =  await knex.select(
        'su.usuario_id',
        'su.name',
        'su.username'
        ).where({
          username:username,
          password:password
        })
        .from('usuarios AS su');

        return data || {};
      
    } catch (error) {
      throw error;
    }
  }

  static async agregar(data) {
    try {

      const knex = db.getQueryBuilder();
      await knex.insert(data).into('usuarios');
      
    } catch (error) {
      throw error;
    }
  }

}

module.exports = UsuarioRepo;