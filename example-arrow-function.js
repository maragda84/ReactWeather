//var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

//names.forEach((name) => console.log('arrowFunc', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Maragda'));

//Challenge Andrew
// function add(a,b){
//   return a+b;
// }

var addStatement = (a,b) => {
  return a + b;
};
console.log(addStatement(1,3));
console.log(addStatement(9,0));


var addExpression = (a,b) => a + b;
console.log(addExpression(1,3));
console.log(addExpression(9,0));
