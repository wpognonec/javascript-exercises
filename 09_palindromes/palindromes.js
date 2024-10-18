const palindromes = function (str) {
  let filteredArray = [...str.toLocaleLowerCase()].filter((chr) => !".,! ".includes(chr))
  return filteredArray.toString() === filteredArray.reverse().toString();
};

// Do not edit below this line
module.exports = palindromes;
