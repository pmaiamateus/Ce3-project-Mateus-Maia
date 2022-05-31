const { convenios } = require('../../../database/models');

module.exports = async () => {
  const allConvenios = await convenios.findAll()
  return allConvenios
};