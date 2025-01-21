const productModule = require("../modules/productModule");

class ProductService {
  async getAllProducts() {
    return await productModule.find();
  }

  async getProductById(productId) {
    return await productModule.findOne({ productId });
  }

  async createProduct(product) {
    return await productModule.create(product);
  }

  async updateProduct(productId, product) {
    return await productModule.findOneAndUpdate({ productId }, product);
  }

  async deleteProduct(productId) {
    return await productModule.findOneAndDelete({ productId });
  }
}

module.exports = new ProductService();
