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
  const [userData, emailNew] = await users.findOrCreate({
    where: { cpf },
    defaults: {
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
  });
  if (!emailNew) return { status: 409, message: 'Usuário já registrado' };
  return userData.dataValues.nome;
};