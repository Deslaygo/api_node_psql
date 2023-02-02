
class UsuarioRH {
    static getFiltrosWhereListar = (builder, filtros) => {

      if(filtros.usuario_id)
        builder.where('usuario_id',filtros.usuario_id);

      if(filtros.username)
        builder.where('username',filtros.username);

      return builder;
    }
}

module.exports = UsuarioRH;