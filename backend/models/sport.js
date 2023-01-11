const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sportSchema = new Schema({
  title: { type: String, required: true },
  nation: { type: String, required: true },
  date: { type: Date, required: true },
  teams: { type: String, required: true },
  hometeam: { type: String, required: true },
  awayteam: { type: String, required: true },
});

module.exports = mongoose.model("Sport", sportSchema);
