const fibonacci = function(a) {
  let num = parseInt(a)
  if (num < 0) return "OOPS"
  if (num === 0) return 0
  let currentDigit = 1
  let previousDigit = 1
  for (let i = 2; i < num; i++) {
    temp = currentDigit
    currentDigit = currentDigit + previousDigit
    previousDigit = temp
  }
  return currentDigit
};

// Do not edit below this line
module.exports = fibonacci;
