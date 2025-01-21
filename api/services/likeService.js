const likeModel = require("../models/likeModel");

class LikeService {
  async getAllLikes() {
    return await likeModel.find();
  }

  async getLikeById(likeId) {
    return await likeModel.findOne({ likeId });
  }

  async createLike(like) {
    return await likeModel.create(like);
  }

  async updateLike(likeId, like) {
    return await likeModel.findOneAndUpdate({ likeId }, like);
  }

  async deleteLike(likeId) {
    return await likeModel.findOneAndDeletedelete({ likeId });
  }
}

module.exports = new LikeService();
