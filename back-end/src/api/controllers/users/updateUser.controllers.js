const { updateUserService } = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const info = req.body;
    await updateUserService(info);
    return res.status(200).json({ message: 'Usuário atualizado' });
  } catch (error) {
    next(error);
  }
};