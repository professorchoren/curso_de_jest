module.exports = (dividend, divider) => {
  if (divider == 0) {
    throw new Error("Invalid dividend " + divider);
  }
  return dividend / divider;
};
