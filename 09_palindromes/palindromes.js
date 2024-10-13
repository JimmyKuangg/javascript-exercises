const palindromes = function (string) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let front = 0;
  let back = string.length - 1;

  while (front < back) {
    while (!alpha.includes(string[front].toLowerCase())) {
      front++;
    } 

    while (!alpha.includes(string[back].toLowerCase())) {
      back--;
    }

    console.log(`this is the front letter ${string[front]}`);
    console.log(`this is the back letter ${string[back]}`);

    if (string[front].toLowerCase() !== string[back].toLowerCase()) {
      return false;
    }

    front++;
    back--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
