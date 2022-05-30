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
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
      },
      validadeDaCarteirinha: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
