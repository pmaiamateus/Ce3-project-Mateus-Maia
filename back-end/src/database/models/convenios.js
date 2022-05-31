module.exports = (sequelize, DataTypes) => {
  const convenios = sequelize.define('convenios', {
    convenio: {
      type: DataTypes.STRING,
    },
  },
    { tableName: 'convenios', timestamps: false },
  );
  return convenios;
};