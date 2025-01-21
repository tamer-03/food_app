const categoryModel = require("../models/categoryModel");

class CategoryService {
  async getAll() {
    try {
      return await categoryModel.find();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getById(categoryId) {
    try {
      return await categoryModel.findOne({ categoryId });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async create(data) {
    try {
      return await categoryModel.create(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(categoryId, data) {
    try {
      return await categoryModel.findOneAndUpdate({ categoryId }, data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(categoryId) {
    try {
      return await categoryModel.findOneAndDelete({ categoryId });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = new CategoryService();
