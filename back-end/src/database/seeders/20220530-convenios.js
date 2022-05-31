module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('convenios',
      [{
        convenio: 'amil',
      },
      {
        convenio: 'Bradesco Saúde',
      },
      {
        convenio: 'sulAmérica',
      },
      ], { timestamps: false });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('convenios', null, {});
  },
};