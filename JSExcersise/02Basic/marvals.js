// // Datatype - Array
//
// const superHeroes = ['Iron Man', 'Spider Man', 'Capt. America','Thor']
//
// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes[2]);
// console.log(superHeroes[superHeroes.length-1]);
//
// console.log(`We have ${superHeroes.length} super heroes`);

const numbers = ['one', 'two','three','four','five','six']

// numbers[1] ='SOMETHING'

//start
// console.log(numbers.shift());
// console.log(numbers);

// numbers.unshift('SOMETHING')
// console.log(numbers);

//end

// console.log("The element to be deleted is:" +numbers.pop());
// console.log(numbers);

// numbers.push('seven')
// console.log(numbers);

//middle

numbers.splice(2,2,'SOMETHING')
console.log(numbers);
