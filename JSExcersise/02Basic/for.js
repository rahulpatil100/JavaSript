// const days = ['Mon','Tue','Wed','Thr','Fri','Sat']
//
// for (var i = days.length-1; i >=0; i--) {
//   console.log(days[i]);
// }

const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos for youtube')
myTodos.push('Go to Gym')

myTodos.forEach(function (todo, i) {
  console.log(`Your task no. ${i + 1} is : ${todo}`);
})
