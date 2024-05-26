const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/user/create', async (req, res) => {
    let { name, username, password } = req.body;

    if (!name || !username || !password) {
        res.status(400).send('Missing parameters');
    } else {
        try {
            const user = new User({ name, username, password });
            await user.save();
            console.log('User created successfully');
            res.status(200).send({ message: 'Success' });
        } catch (err) {
            console.error(err);
            res.status(500).send('Error creating user');
        }
    }
});

app.post('/user/login', async (req, res) => {
    let { username, password } = req.body;

    if (!username || !password) {
        res.status(400).send('Missing parameters');
    } else {
        try {
            const user = await User.findOne({ username, password });
            console.log('User logged in successfully');
            res.status(200).send(user);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error logging in');
        }
    }
});

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    category: String,
});

const Book = mongoose.model('Book', bookSchema);

app.get('/books/get', async (req, res) => {
    try {
        const books = await Book.find();
        console.log('Books fetched successfully');
        res.status(200).send(books);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching books');
    }
});

app.post('/books/add', async (req, res) => {
    let { title, author, price, category } = req.body;

    if (!title || !author) {
        res.status(400).send('Missing parameters');
    } else {
        try {
            const book = new Book({ title, author, category, price });
            await book.save();
            console.log('Book added successfully');
            res.status(200).send({ message: 'Success' });
        } catch (err) {
            console.error(err);
            res.status(500).send('Error adding book');
        }
    }
});

app.delete('/books/delete/:id', async (req, res) => {
    let { id } = req.params;

    if (!id) {
        res.status(400).send('Missing book ID');
    } else {
        try {
            await Book.findByIdAndDelete(id);
            console.log('Book deleted successfully');
            res.status(200).send({ message: 'Success' });
        } catch (err) {
            console.error(err);
            res.status(500).send('Error deleting book');
        }
    }
});

app.put('/books/update/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, category, price } = req.body;

    if (!id) {
        res.status(400).send('Missing book ID');
    } else {
        Book.findByIdAndUpdate(id, { title, author, category, price })
            .then(() => {
                console.log('Book updated successfully');
                res.status(200).send({ message: 'Success' });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Error updating book');
            });
    }
  });
  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
