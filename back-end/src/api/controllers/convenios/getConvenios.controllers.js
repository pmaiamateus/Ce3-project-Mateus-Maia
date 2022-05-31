const { getConveniosService } = require('../../services/convenios')

module.exports = async (_req, res, next) => {
  try {
    const serviceResponse = await getConveniosService()
    return res.status(200).json({ message: serviceResponse })
  } catch (error) {
    next(error)
  }
};