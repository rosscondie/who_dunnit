// Episode 1:

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// expected - console.log prints Miss Scarlet 
// WHY - Property murderer is defined in scenario object

// Episode 2:

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// expected - console.log prints The murderer is Professor Plum 
// actual - TypeError: Assignment to constant variable
// WHY - murderer was already defined on line 21 with keyword const

// Episode 3:

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// console.log prints First Verdict: The murderer is Mrs. Peacock.
// console.log prints Second Verdict: The murderer is Professor Plum.
// WHY - in the declareMurderer function variable is only accessible within function

// Episode 4:

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// console.log prints The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// console.log prints Suspect three is Mrs.Peacock.
// WHY - Colonel Mustard variable is only available within the scope of the declareAllSuspects function

// Episode 5: 

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

// console.log prints The weapon is the Revolver.
// WHY - changeWeapon function called replacing Candle Stick with Revolver

// Episode 6:

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// console.log prints The murderer is Mrs.White.
// WHY - plotTwist function was invoked within the function

// Episode 7:

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// expected - console.log prints The murderer is Colonel Mustard. 
// actual - console.log prints The murderer is Mr Green.
// WHY - the invoking of unexpectedOutcome and plotTwist are done within the body of the changeMurderer function ?

// Episode 8:

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

// console.log prints The weapon is Candle Stick.
// WHY - changeScenario invoked, first if statement is false - 'Dining Room' != 'Conservatory'
// second if statment is true - 'Mrs. Peacock' === 'Mrs. Peacock'

// The murderer is Colonel Mustard - plotTwist invoked within changeScenario makes first if statment true = 'Dining Room' === 'Dining Room'

// Episode 9:

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// expected - console.log prints The murderer is Mrs. Peacock.
// WHY - if conditional checks if variable is truthy which it is so changes variable to Mrs. Peacock

// actual - console.log prints The murderer is Professor Plum.
// WHY - inside the if statement the variable is declared but never read 