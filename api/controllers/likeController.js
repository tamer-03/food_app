const likeService = require("../services/likeService");

class LikeController {
  async getAllLikes(req, res, next) {
    try {
      const likes = await likeService.getAllLikes();
      res.status(200).json(likes);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }

  async getLikeById(req, res, next) {
    try {
      const likeId = req.params.id;
      const like = await likeService.getLikeById(likeId);
      res.status(200).json(like);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }

  async createLike(req, res, next) {
    try {
      const like = req.body;
      const newLike = await likeService.createLike(like);
      res.status(201).json(newLike);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }

  async updateLike(req, res, next) {
    try {
      const likeId = req.params.id;
      const like = req.body;
      const updatedLike = await likeService.updateLike(likeId, like);
      res.status(200).json(updatedLike);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }
  async deleteLike(req, res, next) {
    try {
      const likeId = req.params.id;
      const deletedLike = await likeService.deleteLike(likeId);
      res.status(200).json(deletedLike);
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(err);
    }
  }
}

module.exports = new LikeController();
