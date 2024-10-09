const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
  if (num1 % 1 !== 0 || num2 % 1 !== 0) return "ERROR"

  let larger = num1 > num2 ? num1 : num2;
  let smaller = num1 < num2 ? num1 : num2;
  let total = 0;

  for (let i = smaller; i <= larger; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
