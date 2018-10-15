const text = `You wish you were batman`;

const lettersToNumbers = {
    'A': 4,
    'E': 3,
    'G': 6,
    'I': 1,
    'O': '0',
    'S': 5,
    'T': 7
};

const textToTranslate = text.toUpperCase();
let translation = ``;

for (let letter of textToTranslate) {

    const replacement = lettersToNumbers[letter];

  if (replacement) {
    console.log(`${letter} is ${replacement}`);
    translation = translation + replacement;
  } else {
      console.log(`${letter} stays the same`);
      translation = translation + letter;
  }
}

console.log(translation);