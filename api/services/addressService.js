const addressModel = require("../models/addressModel");

class AddressService {
  async createAddress(address) {
    return await addressModel.create(address);
  }
  async getAddressById(addressId) {
    try {
      return await addressModel.findOne({ addressId });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllAddresses() {
    try {
      return await addressModel.find();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateAddress(addressId, address) {
    return await addressModel.findOneAndUpdate({ addressId }, address);
  }

  async deleteAddress(addressId) {
    return await addressModel.findOneAndDelete({ addressId });
  }
}

module.exports = new AddressService();
