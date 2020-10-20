"use strict";
/*Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples: 
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/
function spinWords(...rest) {
  //TODO Have fun :)
  let arr = [rest][0][0].split(" ");
  let newArr = [];
  arr.forEach(function (item, i, arr) {
    if (item.length >= 5) {
      //console.log(i);

      newArr.push(item.split("").reverse().join(""));
    } else {
      newArr.push(item);
    }
  });

  return newArr.join(" ");
}
spinWords("Hey fellow warriors");
