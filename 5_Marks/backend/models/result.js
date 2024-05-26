const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  semester: { type: Number, required: true },
  subjects: [
    {
      subjectName: { type: String, required: true },
      mse: { type: Number, required: true },
      ese: { type: Number, required: true },
    },
  ],
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
