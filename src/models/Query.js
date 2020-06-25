const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var querySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  query: {
    type: String,
  },
  created_at: {
    type: String,
    required: true,
    default: Date.now,
  },
});

const Query = mongoose.model("Query", querySchema);

module.exports = Query;
