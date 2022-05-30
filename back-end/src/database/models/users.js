module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    prontuario: {
      type: DataTypes.INTEGER,
    },
    nome: {
      type: DataTypes.STRING,
    },
    sobrenome: {
      type: DataTypes.STRING,
    },
    dataDeNascimento: {
      type: DataTypes.DATE,
    },
    genero: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
    },
    rg: {
      type: DataTypes.INTEGER,
    },
    rgUf: {
      type: DataTypes.STRING,
    },
    email: { 
      type: DataTypes.STRING,
    },
    celular: {
      type: DataTypes.STRING,
    },
    telefoneFixo: {
      type: DataTypes.STRING,
    },
    convenio: {
      type: DataTypes.STRING,
    },
    carteirinhaDoConvenio: {
      type: DataTypes.INTEGER,
    },
    validadeDaCarteirinha: {
      type: DataTypes.DATE,
    },
  },
    { tableName: 'users', timestamps: false },
  );
  return users;
};