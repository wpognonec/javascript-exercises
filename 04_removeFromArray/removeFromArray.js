const removeFromArray = function(array, ...args) {
  newArr = array.filter((i) => !args.includes(i))
  return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
