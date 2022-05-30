const { users } = require('../../../database/models');

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
  const modelResponse = await users.update(
    {
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
    },
    {
      where: { cpf },
    },
  );
  return modelResponse.message;
};