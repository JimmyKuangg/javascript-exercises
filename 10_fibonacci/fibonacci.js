const fibonacci = function(num, memo = {}) {
  let argNum = +num;

  if (argNum < 0 || isNaN(argNum)) return 'OOPS';
  if (argNum === 0) return 0;
  if (argNum === 1 || argNum === 2) return 1;
  if (memo[argNum]) return memo[argNum];

  return fibonacci(argNum - 1, memo) + fibonacci(argNum - 2, memo);
};

// Do not edit below this line
module.exports = fibonacci;
