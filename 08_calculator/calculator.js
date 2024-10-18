const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
  if (a.length === 0) return 0
	return a.reduce((total, i) => total + i);
};

const multiply = function(a) {
	return a.reduce((total, i) => total * i);
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	if (!a) return 1
  let sum = 1
  for (let i = a; i > 0; i--) {
    sum *= i
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
