function min(a, b) {
    if (a < b) {
      return a;
    } else
      return b;
  }
  console.log(min(0, 10));
  console.log(min(0, -10));

  function isEven(n) {
    if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if (n < 0)
      return isEven(-n);
    else
      return isEven(n - 2);
  }
  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));

  function countChar(string, ch) {
    var count = 0;
    for (var i = 0; i < string.length; i++)
      if (string.charAt(i) === ch)
        count ++;
    return count;
  }
  function countBs(string) {
    return countChar(string, "B");
  }
  console.log(countBs("BBC"));
  console.log(countChar("kakkerlak", "k"));