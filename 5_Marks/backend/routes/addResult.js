const express = require('express');
const Result = require('../models/result');
const calculateGPA = require('../utils/calculateGPA');

const router = express.Router();

router.post('/', async (req, res) => {
  const { studentId, semester, subjects } = req.body;

  try {
    const newResult = new Result({ studentId, semester, subjects });
    const savedResult = await newResult.save();
    const formattedResult = {
      studentId: savedResult.studentId,
      semester: savedResult.semester,
      subjects: savedResult.subjects,
      gpa: calculateGPA(savedResult.subjects),
    };
    res.json(formattedResult);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error adding result' });
  }
});

module.exports = router;
