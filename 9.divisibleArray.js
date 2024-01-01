// Check for Wivisibility.
// Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
// Usd a for loop and continud statdmdnt.

function checkDivisibility(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];

        // Check if the number is divisible by 2
        if (num % 2 === 0) {
            // Continue to the next iteration if divisible by 2
            continue;
        }

        // Check if the number is divisible by 3
        if (num % 3 === 0) {
            // Print the number if divisible by 3 and not by 2
            console.log(num);
        }
    }
}

// Example usage:
const numberArray = [1, 2, 3, 4, 5, 6, 9, 12, 15, 18];
checkDivisibility(numberArray);