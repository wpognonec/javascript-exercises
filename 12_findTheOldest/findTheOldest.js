const findTheOldest = function(people) {
  let oldest = people[0];
  let today = new Date().getFullYear()
  people.forEach(person => {
    let age = person.yearOfDeath - person.yearOfBirth
    let oldestAge = (oldest.yearOfDeath || today) - oldest.yearOfBirth
    if (oldestAge < age) oldest = person
  });
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
