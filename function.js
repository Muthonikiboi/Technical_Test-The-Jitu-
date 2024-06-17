

// 1. Design a function that reverses the digits of an integer. For example, 50 should become 5 and -12 should become -21.
const reverseDigits=(n)=> {
    var reversednum = parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
    return reversednum;
}
console.log(reverseDigits(50));
console.log(reverseDigits(-12));

// 2. Write a recursive function to calculate the factorial of a number
const factorial=(n)=> {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// 3. Design a function that takes a string or sequence of characters as input and
//returns the character that appears most frequently.
//Eg 11189 => '1'
//hello => l
const findMaxFrequencyChar=(inputString)=> {
    let maxFrequency = 0;
    let mostFrequentChar = '';

    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString[i];
        let currentFrequency = 0;

        for (let j = 0; j < inputString.length; j++) {
            if (inputString[j] === currentChar) {
                currentFrequency++;
            }
        }
        if (currentFrequency > maxFrequency) {
            maxFrequency = currentFrequency;
            mostFrequentChar = currentChar;
        }
    }
    return mostFrequentChar;
}

const string= "hello";
const number = '11189';
console.log(findMaxFrequencyChar(string));
console.log(findMaxFrequencyChar(number));

// 4. Design a function that determines whether a given string is a pangram. A
// pangram is a sentence or phrase containing every letter of the alphabet at
// least once. Punctuation and case are typically ignored. For example, the
// string "The quick brown fox jumps over the lazy dog" is a pangram, while
// "Hello, world!" is not.
const checkIfPangram=(sentence)=> {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var lowerCaseSentence = sentence.toLowerCase();
    var sentenceSet = new Set(lowerCaseSentence);

    for (var char of alphabet) {
        if (!sentenceSet.has(char)) {
            return false;
        }
    }
    return true;
}

console.log(checkIfPangram("Hello, world!")); 
console.log(checkIfPangram("The quick brown fox jumps over the lazy dog")); 



// 5. Design a function that takes a list of integers as input. The function should
// return True if the list contains two consecutive threes (3 next to a 3) anywhere
// within the list. Otherwise, it should return False. For example, the function
// should return True for [1, 3, 3] and False for [1, 3, 1, 3].
const hasConsecutiveThrees=(numbers)=> {
    let hasConsecutiveThrees = false;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === 3 && numbers[i + 1] === 3) {
            hasConsecutiveThrees = true;
            break;
        }
    }
    return hasConsecutiveThrees;
}
console.log(hasConsecutiveThrees([1, 3, 3])); 
console.log(hasConsecutiveThrees([1, 3, 1, 3]));

// 6. Master Yoda, a renowned Jedi Master from the Star Wars universe, is known
// for his unique way of speaking. He often reverses the order of words in his
// sentences. For example, instead of saying "I am home" he might say "Home
// am I" Design a function that takes a sentence as input and returns a new
// sentence with the words reversed in the same order that Master Yoda would
// use.
const yodaSpeak=(sentence)=> {
    const words = sentence.split(' ');
    const yodaSentence = words.reverse().join(' ');
    return yodaSentence;
}
console.log(yodaSpeak("I am home")); 


