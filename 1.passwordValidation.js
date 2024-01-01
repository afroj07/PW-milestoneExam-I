// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleQ

function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

// Taking input for password and confirmed password
let password = "Afroj$1234"
let confirmPassword = "Afroj$1234"

// Validate the passwords
validatePassword(password, confirmPassword);