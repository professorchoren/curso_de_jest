module.exports = (grade1, grade2, grade3) => {
  var average = (grade1 + grade2 + grade3) / 3;
  return average >= 6;
};
