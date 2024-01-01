// Vowel Counter
// We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
// countedQ

function vowelCounter(name) {
    // Convert the name to lowercase to make the comparison case-insensitive
    name = name.toLowerCase();

    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Initialize a counter for vowels
    let vowelCount = 0;

    // Iterate through each character in the name
    for (let char of name) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Print the result
    console.log(`Number of vowels in '${name}': ${vowelCount}`);
}

const name =   "afroj mansoori"  //prompt("Enter a name: ");
vowelCounter(name);