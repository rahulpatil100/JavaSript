// let iAmGlobal = 'someValue'
//
// if (true) {
//   let iamLocal = 'someMoreValue' //in Javascript if you declare var variable  declare the global variable i.e leak cases in java Javascript
//                                  //in declaring var in block you declare let  variable i.e good
//   iAmGlobal = 'Rahul'
//   console.log(iAmGlobal);
//   console.log(iamLocal);
// }
//
//  console.log(iamLocal);
// console.log(iAmGlobal);


// Kings Problem

//let king = 'John'

if (true) {
  //let king = 'Rahul'
  if (true) {
    let king = 'Arnav'
    console.log(king);
  }
}

if (true) {
  console.log(" I am secound part :" + king);
}
