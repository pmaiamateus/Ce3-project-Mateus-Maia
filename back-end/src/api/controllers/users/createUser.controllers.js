const { createUserService } = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const info = req.body;
    const serviceResponse = await createUserService(info);
      if (serviceResponse.status) {
        return res.status(serviceResponse.status).json({ message: serviceResponse.message });
      } return res.status(201).json(serviceResponse);
  } catch (error) {
    next(error);
  }
};