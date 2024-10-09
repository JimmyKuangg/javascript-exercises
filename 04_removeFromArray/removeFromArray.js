const removeFromArray = function(array, ...args) {
  for (let arg of args) {
    if (array.includes(arg)) {
      const idx = array.indexOf(arg);
      let count = 0;

      for (ele of array) {
        if (arg === ele) count ++;
      }

      array.splice(idx, count);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
