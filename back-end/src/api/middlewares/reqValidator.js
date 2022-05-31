const Joi = require('joi');

const userSchema = Joi.object({
  prontuario: Joi.string(),
  nome: Joi.string(),
  sobrenome: Joi.string(),
  dataDeNascimento: Joi.date(),
  genero: Joi.string(),
  cpf: Joi.string().length(11),
  rg: Joi.number(),
  rgUf: Joi.string().length(2),
  email: Joi.string().email(),
  celular: Joi.string().length(11),
  telefoneFixo: Joi.string().length(11),
  convenio: Joi.string(),
  carteirinhaDoConvenio: Joi.string(),
  validadeDaCarteirinha: Joi.string(), 
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
  if (celular || telefoneFixo) {
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
    if (error) {
      console.log(error)
      return res.status(400).json({ message: error.details[0].message });
    }
  } if (!celular && !telefoneFixo) {
    return res.status(400).json({
      message: 'é necessário pelo menos um tipo de telefone no cadastro' });
  }
  next();
};

module.exports = { userReqValidator };