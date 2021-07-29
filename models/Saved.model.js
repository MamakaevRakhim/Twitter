const mongoose = require("mongoose");

const savedSchema = mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.objectId,
    ref: "Post",
  },
});

const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;
