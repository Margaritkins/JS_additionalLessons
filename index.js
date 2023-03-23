      /// numbers from 0 to 100
// let number = 0;
// while (number <= 100){
//   console.log(number);
//   number
// }
//correct
     /// numbers from 11 to 22
// let number = 11;
// while (number <= 22) {
//   console.log(number);
//   number++
// }
//correct

      ///numbers from 30 to 0
// let number = 30;
// while (number > -1) {
//   console.log(number);
//   number--
// }    
//correct  

      /// odd numbers from 10 to 30
// let number = 10;
// while (number <= 30){
//   if (number % 2 === 1) {
//     console.log(number);
//   }
//   number++
// }
//correct

      /// task password
// let password = 'qwerty123';

// while (true) {
//   let userInput = prompt('type your password');// this variable must be written inside 'while'
//   if (userInput !== password) {
//   alert ('password is not correct, try again');
//   } else if (userInput === password) {
//   alert ('password is correct');
//   break;
//   }
//   }
  //correct

  /// task password with 3 attempts
// let i = 3;       // i = iteration( indicate it by myselfe)
// let pass = "qwe";
// while (i > 0){   // i = iteration. While it's 'true'
// let usrInpt = prompt('type your password');
// if (usrInpt !== pass) {
//   alert ('password is not correct');
//   } else if (usrInpt === pass) {
//   alert ('password is correct');
//   break;
//   }
//   i--   //indicate it to become less or more (--)(++)(**)(//)
// }
//correct


/// task sum numbers from 1 to n (1+2=3+4+5+6...+n)
  // function pow (num){
  //   let sum = 0;
  //   for (let i = 0; i <= num; i++) {
  //     sum += i
  //   }
  //   return sum;
  // }
  // console.log(pow(10));
  //correct
  
////  task multiply numbers from 1 to n(1*2*3*4*5...*n)  
//it calls factorial of number n 
///////////////////////////don't work with -n, factorial from 0 = 0, from 1 = 1
// let multiply = 1;
//     for (let i = 1; i <= 5; i++) {
//       multiply *= i
//     }
//     console.log(multiply);
//correct

////  task multiply numbers from 1 to n(1*2*3*4*5...*n) using function
//it calls factorial of number n
  // function multiply (num){
  //   let multiply = 1;
  //   for (let i = 1; i <= num; i++) {
  //     multiply *= i
  //   }
  //   return multiply;
  // }
  // console.log(multiply(5));
  //correct