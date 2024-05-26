const express = require('express');
const mongoose = require('mongoose');
const resultsRouter = require('./routes/results');
const cors = require('cors');
const addResultRouter = require('./routes/addResult');

require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB Connected');
});

app.use(express.json());

app.use('/api/results', resultsRouter);
app.use('/api/results/add', addResultRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
