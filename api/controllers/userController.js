const userService = require("../services/userService");
const statusEnum = require("../models/enum/statusEnum");

class UserController {
  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res
        .status(statusEnum.statusCodes.SUCCESS)
        .json({ message: statusEnum.statusMessages.SUCCESS, users });
    } catch (err) {
      res
        .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: statusEnum.statusMessages.INTERNAL_SERVER_ERROR });
      next(err);
    }
  }

  async getUserById(req, res, next) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        res
          .status(statusEnum.statusCodes.NOT_FOUND)
          .json({ message: statusEnum.statusMessages.NOT_FOUND });
      } else {
        res.status(statusCode.SUCCESS).json(user);
      }
    } catch (err) {
      res
        .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
      next(err);
    }
  }

  async createUser(req, res, next) {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(statusEnum.statusCodes.CREATED).json(newUser);
    } catch (err) {
      res
        .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
      next(err);
    }
  }

  async updateUser(req, res, next) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      res.status(statusEnum.statusCodes.SUCCESS).json(updatedUser);
    } catch (err) {
      res
        .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
      next(err);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const deletedUser = await userService.deleteUser(req.params.id);
      res.status(statusEnum.statusCodes.SUCCESS).json(deletedUser);
    } catch (err) {
      res
        .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err.message });
      next(err);
    }
  }
}

module.exports = new UserController();
