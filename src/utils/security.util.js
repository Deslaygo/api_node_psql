const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');

class SecurityUtil{

  static getNanoId = (lng = 10) => nanoid(lng);

  static getPassword = (password) => bcrypt.hash(password,5);
}


module.exports = SecurityUtil;