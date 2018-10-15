// const whoami =  `I'm batman`;

// whoami.slice(0, 1).toUpperCase();

// const first = whoami.slice(0, 1).toUpperCase();

// const rest = whoami.slice(1);

// console.log(first + rest);
// console.log(`The length of the string is ${whoami.length}`);

const text = `you wish you were batman`;
const lettersToConvert = ['A', 'E', 'G', 'I', 'O', 'S', 'T'];
const numbers = [4, 3, 6, 1 ,0, 5, 7];
const textToTranslate = text.toUpperCase();
let translation = ``;

// ES6-style array iteration (basically equivalent to Python's 'for' loop)
for (let letter of textToTranslate) {
//    console.log(letter);
   // Check to see if current letter is in lettersToConvert; if so, use the index to determine the appropriate translation from 'numbers', otherwise just use the original letter
//    console.log(lettersToConvert.indexOf(letter));

   if (lettersToConvert.indexOf(letter) !== -1) {
     let index = lettersToConvert.indexOf(letter);
     translation = translation + numbers[index];
   } else {
       translation = translation + letter;
   }

}

console.log(translation);