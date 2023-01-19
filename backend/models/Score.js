const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const ScoreSchema = mongoose.Schema({

  pubid : {
    twitterId : {type: String, required: true}
  },
  post : { type: Array, required: true

  },
  points: {
    type: Number, required:true
  }
  // username: { type: String, required: true },
  // rank: { type: Number, default: 10 },
  // score: { type: Number, required: true },
  // type: { type: String, required: true },
  // date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("tweets", ScoreSchema);