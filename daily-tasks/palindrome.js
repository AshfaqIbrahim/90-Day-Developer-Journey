function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");

  if (reversed === str) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a paindrome");
  }
}

isPalindrome("123321")