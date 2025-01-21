const productServices = require("../services/productServices");
const statusEmun = require("../models/enum/statusEnum");

class ProductController {
  async getProducts(req, res, next) {
    try {
      const products = await productServices.getAllProducts();
      res.status(statusEmun.statusCodes.SUCCESS).json(products);
    } catch (error) {
      console.error("Error in productControlelr - getProducts:", error);

      res.status(statusEmun.statusCodes.INTERNAL_SERVER_ERROR).json({
        message: statusEmun.statusMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async getProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const product = await productServices.getProductById(productId);
      res.json(product);
    } catch (error) {
      console.error("Error in productControlelr - getProduct:", error);

      res.status(statusEmun.statusCodes.INTERNAL_SERVER_ERROR).json({
        message: statusEmun.statusMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async createProduct(req, res, next) {
    try {
      const product = req.body;
      const newProduct = productServices.createProduct(product);
      res.status(statusEmun.statusCodes.CREATED).json(newProduct);
    } catch (error) {
      console.error("Error in productControlelr - createProduct:", error);

      res.status(statusEmun.statusCodes.INTERNAL_SERVER_ERROR).json({
        message: statusEmun.statusMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async updateProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const product = req.body;
      const updateProduct = await productServices.updateProduct(
        productId,
        product
      );
      res.status(statusEmun.statusCodes.SUCCESS).json(updateProduct);
    } catch (error) {
      console.error("Error in productControlelr - updateProduct:", error);

      res.status(statusEmun.statusCodes.INTERNAL_SERVER_ERROR).json({
        message: statusEmun.statusMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const product = await productServices.deleteProduct(productId);
      res.status(statusEmun.statusCodes.SUCCESS).json(product);
    } catch (error) {
      console.error("Error in productControlelr - deleteProduct:", error);

      res.status(statusEmun.statusCodes.INTERNAL_SERVER_ERROR).json({
        message: statusEmun.statusMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }
}

module.exports = new ProductController();
