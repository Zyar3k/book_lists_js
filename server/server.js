const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/books.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', booksRoutes);

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

mongoose.connect(`mongodb+srv://zyar3k:<pass>DB@cluster0-y9wgt.mongodb.net/BooksDB`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});