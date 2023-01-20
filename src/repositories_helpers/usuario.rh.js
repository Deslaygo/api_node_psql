
class UsuarioRH {
    static getFiltrosWhereListar = (builder, filtros) => {

      if(filtros.usuario_id)
        builder.where('usuario_id',filtros.usuario_id);

      return builder;
    }
}

module.exports = UsuarioRH;