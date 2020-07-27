const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  key: { type: Number, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  readed: { type: Boolean, required: true },
  available: { type: Boolean, required: true },
  link: { type: String, required: true },
  page: { type: Number, required: true }
});


module.exports = mongoose.model('Book', bookSchema);