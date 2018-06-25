let sayHello = function(name){
  console.log("Greeting message for User:");
  console.log(`Hey ${name}`);
}

//sayHello('Rahul')

let fullNameMaker = function (firstname, lastname) {
  console.log('Welcome to LCO');
  console.log(`Happy to have you, ${firstname} ${lastname}` );
}

//fullNameMaker('Rahul','Arnav')



let myAdder  = function (num1, num2) {
  let added = num1 + num2
  return added
}

// let result = myAdder(3,5)
//
// console.log(result);

let  myMultiplier = function (num1, num2) {
  return num1 * num2
}
let guestUser = function (name , courseCount) {
  return ' Hello ' + name + ' and your course count is : ' + courseCount
}

console.log(guestUser('Rahul',1));
