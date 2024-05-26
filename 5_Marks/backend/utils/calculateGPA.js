function calculateGPA(subjects) {
  const totalMarks = subjects.reduce((acc, subject) => {
    const subjectPercentage = (subject.mse * 0.3) + (subject.ese * 0.7);
    return acc + subjectPercentage;
  }, 0);

  const percentage = totalMarks / subjects.length;
  return (percentage + 7.5)/10;
}

module.exports = calculateGPA;
