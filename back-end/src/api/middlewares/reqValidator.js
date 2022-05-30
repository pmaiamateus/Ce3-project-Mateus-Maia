const Joi = require('joi');

const userSchema = Joi.object({
  prontuario: Joi.number().required(),
  nome: Joi.string().required(),
  sobrenome: Joi.string().required(),
  dataDeNascimento: Joi.date().required(),
  genero: Joi.string().required(),
  cpf: Joi.string().length(11).required(),
  rg: Joi.number().required(),
  rgUf: Joi.string().length(2).required(),
  email: Joi.string().email().required().required(),
  celular: Joi.string().length(11),
  telefoneFixo: Joi.string().length(11),
  convenio: Joi.string().required(),
  carteirinhaDoConvenio: Joi.number().required(),
  validadeDaCarteirinha: Joi.date().required(), 
});

const userReqValidator = (req, res, next) => {
  const { 
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
  } = req.body;
  const dateSchema = /^\d{2}[./-]\d{2}[./-]\d{4}$/
  const dateTest = dateSchema.test(dataDeNascimento)
  const validadeTest = dateSchema.test(validadeDaCarteirinha)
  if(celular || telefoneFixo) {
    const { error } = userSchema.validate({
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
    if (dateTest === false) {
      return res.status(400).json({ message: "Formato não válido de data de nascimento" })
    }
    if (validadeTest === false) {
      return res.status(400).json({ message: "Formato não válido de data de validade da carteirinha" })
    }
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  } if (!celular && !telefoneFixo) {
    return res.status(400).json({ message: "é necessário pelo menos um tipo de telefone no cadastro" });
  }

  next();
};

module.exports = { userReqValidator };