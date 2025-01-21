const productImageService = require("../services/productImageService");
const statusEnum = require("../models/enum/statusEnum");

exports.createProductImage = async (req, res) => {
  try {
    const productImage = req.body;
    const newProductImage = await productImageService.createProductImage(
      productImage
    );
    res.status(statusEnum.statusCodes.CREATED).send(newProductImage);
  } catch (error) {
    res
      .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

exports.getProductImages = async (req, res) => {
  try {
    const productImages = await productImageService.getProductImages();
    res.status(statusEnum.statusCodes.OK).send(productImages);
  } catch (error) {
    res
      .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productImageId = req.params.productImageId;
    const productImage = await productImageService.getProductImageById(
      productImageId
    );
    res.status(statusEnum.statusCodes.OK).send(productImage);
  } catch (error) {
    res
      .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

exports.deleteProductImage = async (req, res) => {
  try {
    const productImageId = req.params.productImageId;
    await productImageService.deleteProductImage(productImageId);
    res.status(statusEnum.statusCodes.NO_CONTENT).send();
  } catch (error) {
    res
      .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

exports.updateProductImage = async (req, res) => {
  try {
    const productImageId = req.params.productImageId;
    const productImage = req.body;
    await productImageService.updateProductImage(productImageId, productImage);
    res.status(statusEnum.statusCodes.NO_CONTENT).send();
  } catch (error) {
    res
      .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};
