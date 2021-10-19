const mongoose = require("mongoose");

const picksSchema = {
  team: { type: String },
  week: { type: Number },
};

const Pick = mongoose.model("Pick", picksSchema);

module.exports = Pick;
