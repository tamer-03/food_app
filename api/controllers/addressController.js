const addressService = require("../services/addressService");

class AddressController {
  async getAllAddresses(req, res, next) {
    try {
      const addresses = await addressService.getAllAddresses();
      res.json(addresses);
    } catch (error) {
      res.status(500).send(error.message);
      next(error);
    }
  }

  async getAddressById(req, res, next) {
    try {
      const customId = req.params.id;
      const address = await addressService.getAddressById(customId);
      res.json(address);
    } catch (error) {
      res.status(500).send(error.message);
      next(error);
    }
  }

  async createAddress(req, res, next) {
    try {
      const address = req.body;
      const newAddress = await addressService.createAddress(address);
      res.status(201).json(newAddress);
    } catch (error) {
      res.status(500).send(error.message);
      next(error);
    }
  }

  async updateAddress(req, res, next) {
    try {
      const customId = req.params.id;
      const address = req.body;
      const updatedAddress = await addressService.updateAddress(
        customId,
        address
      );
      res.json(updatedAddress);
    } catch (error) {
      res.status(500).send(error.message);
      next(error);
    }
  }

  async deleteAddress(req, res, next) {
    try {
      const customId = req.params.id;
      const deletedAddress = await addressService.deleteAddress(customId);
      res.json(deletedAddress);
    } catch (error) {
      res.status(500).send(error.message);
      next(error);
    }
  }
}

module.exports = new AddressController();
