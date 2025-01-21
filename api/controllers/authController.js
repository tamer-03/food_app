const authService = require("../services/authService");
const statusEnum = require("../models/enum/statusEnum");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res
      .status(statusEnum.statusCodes.SUCCESS)
      .json({ message: statusEnum.statusMessages.SUCCESS, token });
  } catch (err) {
    res
      .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: statusEnum.statusMessages.INTERNAL_SERVER_ERROR });
  }
};

exports.register = async (req, res) => {
  try {
    console.log(req.body);
    const token = await authService.register(req.body);
    res.status(statusEnum.statusCodes.SUCCESS).json(token);
  } catch (err) {
    res
      .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};
