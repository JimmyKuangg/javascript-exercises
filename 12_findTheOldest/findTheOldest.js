const findTheOldest = function(people) {
  let oldestAge = 0;
  let oldest = "";
  let currentYear = 2024;

  for (let person of people) {
    let personAge = 0;

    if (!person.yearOfDeath) {
      personAge = currentYear - person.yearOfBirth;
    } else {
      personAge = person.yearOfDeath - person.yearOfBirth;
    }

    if (personAge > oldestAge) {
      oldestAge = personAge;
      oldest = person;
    }
  }

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
