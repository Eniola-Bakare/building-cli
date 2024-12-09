function ispalindromema(string) {
  let firsts = 0;
  let lasts = string.length - 1;
  while (string[firsts] === string[lasts]) {
    console.log(string[firsts] === string[lasts]);
    firsts++;
    lasts--;

    if (firsts === Math.floor(string.length / 2)) {
      return `TRUE - ${string} is a palindrome.`;
    }
  }
  return `FALSE - ${string} is not a palindrome.`;
}

module.exports = ispalindromema;
