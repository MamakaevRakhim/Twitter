const Saved = require("../models/Saved.model");

module.exports.savedController = {
  addSaved: async (req, res) => {
    try {
      const add = await Saved.create({
        PostId: req.body.PostId,
      });
      res.json(`${add} Пост успешно сохранен`);
    } catch {
      console.log("Извините не удалось сохранить пост");
    }
  },

  showSaved: async (req, res) => {
    try {
      const show = await Saved.find(req.params.id).populate("Post");
      res.json(show);
    } catch (e) {
      console.log(e);
    }
  },

  removeSaved: async (req, res) => {
    try {
      await Saved.findByIdAndUpdate(req.params.id, {
        $pull: { PostId: req.body.PostId },
      });
      res.json("Пост удален из сохраненных");
    } catch (e) {
      console.log(e);
    }
  },
};
