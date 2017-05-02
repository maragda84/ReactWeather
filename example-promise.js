// function getTempCallback (location, callback) {
//   callback(undefined, 15);
//   callback('City not found');
// }
//
// //the function is the "callback argument from _getTempCallback_. This has two things: error and temperature".
// getTempCallback('Igualada', function (err, temp){
//   if (err) {
//     console.log('error', err);
//   }
//   else{
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function(){
//       resolve(20);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Igualada').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// })
//

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number')
    {
      resolve(a + b);
    }
    else {
      reject('Not a number');
    }
  });
}

addPromise(5,7).then(/*succes*/function(result){console.log('promise success', result);}, /*reject*/function(err){console.log('promise error', err);})
addPromise(5,'Haus').then(/*succes*/function(result){console.log('promise success', result);}, /*reject*/function(err){console.log('promise error', err);})
