'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prontuario: {
        type: Sequelize.STRING,
      },
      nome: {
        type: Sequelize.STRING,
      },
      sobrenome: {
        type: Sequelize.STRING,
      },
      dataDeNascimento: {
        type: Sequelize.DATE,
      },
      genero: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
        unique: true,
      },
      rg: {
        type: Sequelize.STRING,
      },
      rgUf: {
        type: Sequelize.STRING,
      },
      email: { 
        type: Sequelize.STRING,
      },
      celular: {
        type: Sequelize.STRING,
      },
      telefoneFixo: {
        type: Sequelize.STRING,
      },
      convenio: {
        type: Sequelize.STRING,
      },
      carteirinhaDoConvenio: {
        type: Sequelize.STRING,
      },
      validadeDaCarteirinha: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
