/*Given: an array containing hashes of names
Return: a string formatted as a list of names separated
by commas except for the last two names, which should be separated by an ampersand.
Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// returns 'Bart'
list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/
function list(names) {
  names = names.map(function (v) {
    return console.log(v.name);
  });
  return console.log(names.concat(names.splice(-2).join(" & ")).join(", "));
}
list([{ name: "Bart" }]);
list([{ name: "Bart" }, { name: "Lisa" }]);
list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);
