/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowelsCount = 0;
  let value = str.split("");
  value.forEach((elements) => {
    if (
      elements == "a" ||
      elements == "o" ||
      elements == "i" ||
      elements == "u" ||
      elements == "e"
    ) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}
getCount("abracidubro");
/*function getCount(str) {
return (str.match(/[aeiou]/ig) || []).length;
}*/
