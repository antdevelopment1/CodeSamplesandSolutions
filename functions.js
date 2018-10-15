const textToTranslate = `You wish you were batman`;

// const textToTranslate = text.toUpperCase();
let translation = '';

function translate(letter) {
    letter = letter.toUpperCase();
    const lettersToNumbers = {
        'A': 4,
        'E': 3,
        'G': 6,
        'I': 1,
        'O': '0',
        'S': 5,
        'T': 7
    };

    const replacement = lettersToNumbers[letter];
    if (replacement) {
        return replacement;
    } else {
        return letter;
    }
}


for (let character of textToTranslate) {
    translation = translation + translate(character);
}
console.log(translation);