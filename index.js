
///task with function takes array
const subscribers = [
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},  
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1},  
  {firstName: 'qwert', lastName:'qwert', age:1},
  {firstName: 'qwert', lastName:'qwert', age:1}
]
function congratsIfMoreThan100(){
if (subscribers.length >= 10){
  return alert('Congrats!');
} else{
  return alert('Less than you expected')
}
}
let showCongrats = congratsIfMoreThan100();

