const Book = require('../models/book.model');

exports.getAll = async (req, res) => {

  try {
    res.json(await Book.find({}));
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};

exports.getRandom = async (req, res) => {

  try {
    const count = await Book.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const dep = await Book.findOne().skip(rand);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};
