const userModel = require("../models/userModel");

class UserService {
  async createUser(user) {
    try {
      const existingUser = await userModel.findOne({ email: user.email });
      if (existingUser) {
        throw new Error("Email already exists");
      } else if (!user.email.includes("@")) {
        throw new Error("Mail must contain @");
      } else {
        return await userModel.create(user);
      }
    } catch (error) {
      console.error("Error in UserService - createUser:", error);
      throw error;
    }
  }

  async getUserById(userId) {
    try {
      if (!userId) {
        throw new Error("Id is required");
      } else {
        return await userModel.findOne({ userId });
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      return await userModel.find();
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userId, user) {
    try {
      return await userModel.findOneAndUpdate({ userId }, user);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      return await userModel.findOneAndDelete({ userId });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
