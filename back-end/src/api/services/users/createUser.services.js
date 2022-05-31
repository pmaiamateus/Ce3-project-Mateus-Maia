const { users } = require('../../../database/models');
const { userRegistered } = require('../../utils/dictionary/messageError')
const { conflict } = require('../../utils/dictionary/statusCode')
const errorHandlerUtils = require('../../utils/function/errorHandlerUtils')

module.exports = async (info) => {
  const { prontuario,
    nome,
    sobrenome,
    dataDeNascimento,
    genero,
    cpf,
    rg,
    rgUf,
    email,
    celular,
    telefoneFixo,
    convenio,
    carteirinhaDoConvenio,
    validadeDaCarteirinha } = info;
  if (cpf) {
    const userExists = await users.findOne({ where: { cpf } })
    if (userExists) throw errorHandlerUtils(conflict, userRegistered)
  }
  const userData = await users.create({
      prontuario,
      nome,
      sobrenome,
      dataDeNascimento,
      genero,
      cpf,
      rg,
      rgUf,
      email,
      celular,
      telefoneFixo,
      convenio,
      carteirinhaDoConvenio,
      validadeDaCarteirinha,
    });
  return userData;
};