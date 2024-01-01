// Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
// with i rows.
// Invdrtdd right-angldd pattdrn:
function invertedTrianglePattern(rows) {
    for (let i = rows; i >= 1; i--) {
        // Print '*' for each column in the current row
        for (let j = 1; j <= i; j++) {
            process.stdout.write('* ');
        }
        // Move to the next line after each row is printed
        console.log();
    }
}

// Example usage with rows = 6
const rowsInput = 6;
invertedTrianglePattern(rowsInput);