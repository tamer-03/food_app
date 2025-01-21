const categoryService = require("../services/categoryService");

class CategoryController {
  async getAllCategories(req, res, next) {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }

  async getCategoryById(req, res, next) {
    try {
      const categoryId = req.params.id;
      const category = await categoryService.getCategoryById(categoryId);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }

  async createCategory(req, res, next) {
    try {
      const category = req.body;
      const newCategory = await categoryService.createCategory(category);
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }

  async updateCategory(req, res, next) {
    try {
      const categoryId = req.params.id;
      const category = req.body;
      const updatedCategory = await categoryService.updateCategory(
        categoryId,
        category
      );
      res.status(200).json(updatedCategory);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const categoryId = req.params.id;
      const deletedCategory = await categoryService.deleteCategory(categoryId);
      res.status(200).json(deletedCategory);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }
}

module.exports = new CategoryController();
