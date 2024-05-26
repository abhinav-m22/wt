const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const connection = require('./connection');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Retrieve all records
app.get('/records', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error retrieving records: ', err);
            res.status(500).send('Error retrieving records');
            return;
        }

        res.send(results);
    });
});

// Retrieve a specific record
app.get('/records/:id', (req, res) => {
    const id = req.params.id;

    connection.query('SELECT * FROM users WHERE id = ?', id, (err, results) => {
        if (err) {
            console.error('Error retrieving record: ', err);
            res.status(500).send('Error retrieving record');
            return;
        }

        res.send(results[0]);
    });
});

// Create a new record
app.post('/records', (req, res) => {
    const { name, age } = req.body;

    connection.query('INSERT INTO users SET ?', { name, age }, (err, result) => {
        if (err) {
            console.error('Error creating record: ', err);
            res.status(500).send('Error creating record');
            return;
        }

        res.send(result);
    });
});

// Update an existing record
app.put('/records/:id', (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;

    connection.query('UPDATE users SET name = ?, age = ? WHERE id = ?', [name, age, id], (err, result) => {
        if (err) {
            console.error('Error updating record: ', err);
            res.status(500).send('Error updating record');
            return;
        }

        res.send(result);
    });
});

// Delete a record
app.delete('/records/:id', (req, res) => {
    const id = req.params.id;

    connection.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error deleting record: ', err);
            res.status(500).send('Error deleting record');
            return;
        }

        res.send(result);
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
