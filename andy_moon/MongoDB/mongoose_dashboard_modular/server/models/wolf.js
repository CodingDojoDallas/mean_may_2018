var mongoose = require('mongoose');

var WolfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
    min: [2, "Name needs to be greater than 3 characters"]
  },
  color: {
    type: String,
    required: "Color is required"
  },
  stripes: {
    type: String,
    required: "Does the wolf have stripes?"
  },
  sex: {
    type: String,
    required: "Male or Female?"
  },
  age: {
    type: Number,
    required: "How old is the wolf??"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Wolf', WolfSchema);