var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
    min: [2, "Title needs to be greater than 3 characters"]
  },
  description: {
    type: String,
    default: '',
    required: "Description is required"
  },
  completed: {
    type: "boolean",
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);