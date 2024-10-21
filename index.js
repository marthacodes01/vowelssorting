function analyzeSentence(sentence) {
    // Remove the last character (the period) for analysis
    if (sentence.endsWith('.')) {
        sentence = sentence.slice(0, -1);
    }

    // Initialize counters
    let lengthCounter = sentence.length; // Length of the sentence
    let wordCounter = 0; // Number of words
    let vowelCounter = 0; // Number of vowels

    // Split the sentence into words and count them
    const words = sentence.trim().split(' ');
    wordCounter = words.length;

    // Define a set of vowels
    const vowels = 'aeiouAEIOU';

    // Count the vowels in the sentence
    for (let char of sentence) {
        if (vowels.includes(char)) {
            vowelCounter++;
        }
    }

    // Return the results
    return {
        length: lengthCounter,
        words: wordCounter,
        vowels: vowelCounter
    };
}

// Example usage with a different sentence
const sentence2 = "The quick brown fox jumps over the lazy dog.";
const analysis2 = analyzeSentence(sentence2);
console.log(analysis2);
