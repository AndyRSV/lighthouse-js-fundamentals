
// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//     line += "* "
//   }
//   return line + "\n";
// }

// const buildTriangle = base => {

//   let triangle = '';
//   for (let i = 1; i <= base; i++) {
//     triangle = triangle + makeLine(i)
//     // console.log(makeLine(i));
//   }

//   return triangle;
// };

// console.log(buildTriangle(3));


// const laugh = num => {
//   let haString = '';
//   for (let i = 0; i < num; i++) {
//     haString += 'ha'
//   }

//   return haString + '!'
// }

// console.log(laugh(4));

// const cry = function cryMore() {
//   return 'boohoo!';
// }


// console.log(cry());

// ---- Callbacks -----
// Callback: A function that is passed into another function

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
emotions('happy', function laugh(num) {
  let string = '';
  for (let i = 0; i < num; i++) {
    string += 'ha';
  }

  return string + '!';
});

// Named function expression
const doSomething = function addOne(y) {
  return y + 1;
};