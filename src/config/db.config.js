const knex = require('knex');


class DBConecction{
  static getQueryBuilder = () =>{
    let connectionData = {
      host:process.env.DATABASE_HOST,
      port:process.env.DATABASE_PORT,
      database:process.env.DATABASE_NAME,
      user:process.env.DATABASE_USER,
      password:process.env.DATABASE_PASSWORD,
    };

    return knex({
    client: 'pg',
    // version: '7.2',
    connection: connectionData,
    });

  }
}



module.exports = DBConecction;
