const productImageModel = require("../models/productImageModel");

exports.createProductImage = async (productImage) => {
  return await productImageModel.create(productImage);
};

exports.getProductImages = async () => {
  return await productImageModel.find();
};

exports.getProductImageById = async (productImageId) => {
  return await productImageModel.findOne({ productImageId });
};

exports.updateProductImage = async (productImageId, productImage) => {
  return await productImageModel.findOneAndUpdate(
    { productImageId },
    productImage
  );
};

exports.deleteProductImage = async (productImageId) => {
  return await productImageModel.findOneAndDelete({ productImageId });
};
