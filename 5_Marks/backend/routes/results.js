const express = require('express');
const Result = require('../models/result');
const calculateGPA = require('../utils/calculateGPA');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const result = await Result.findOne({ studentId });
    if (result) {
      const formattedResult = {
        studentId: result.studentId,
        semester: result.semester,
        gpa: calculateGPA(result.subjects),
        subjects: result.subjects,
      };
      res.json(formattedResult);
    } else {
      res.status(404).json({ message: 'Student result not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const results = await Result.find();
    if(results){
      formattedResults = results.map(result => ({
        studentId: result.studentId,
        semester: result.semester,
        gpa: calculateGPA(result.subjects),
        subjects: result.subjects,
      }));
      res.json(formattedResults);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
