const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0]);


days.forEach( function (day,index) {
  console.log(`Starts with ${index + 1} --> ${day}`);
})
