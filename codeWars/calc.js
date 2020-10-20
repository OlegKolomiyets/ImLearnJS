/*This time we want to write calculations using 
functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

=There must be a function for each number from 0 ("zero") to 9 ("nine")
=There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
=Each calculation consist of exactly one operation and two numbers
=The most outer function represents the left operand, the most inner function represents the right operand
=Divison should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));*/

function calc(num, func) {
  if (func === undefined) {
    return num;
  } else {
    return func(num);
  }
}

function zero(func) {
  return calc(0, func);
}
function one(func) {
  return calc(1, func);
}
function two(func) {
  return calc(2, func);
}
function three(func) {
  return calc(3, func);
}
function four(func) {
  return calc(4, func);
}
function five(func) {
  return calc(5, func);
}
function six(func) {
  return calc(6, func);
}
function seven(func) {
  return calc(7, func);
}
function eight(func) {
  return calc(8, func);
}
function nine(func) {
  return calc(9, func);
}

function plus(val) {
  return function (val2) {
    return val + val2;
  };
}
function minus(val) {
  return function (val2) {
    return (val2 -= val);
  };
}
function times(val) {
  return function (val2) {
    return (val *= val2);
  };
}
function dividedBy(val) {
  return function (val2) {
    return Math.floor((val2 /= val));
  };
}
//   return {
//     plus;
//     minus,
//     times,
//     dividedBy,
//     one,
//     two,
//     three,
//     four,
//     five,
//     six,
//     seven,
//     eight,
//     nine,
//     zero,
//   };
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
