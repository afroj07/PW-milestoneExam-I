//  Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.
// Customer object constructor

function Customer(name, balance) {
    this.name = name;
    this.balance = balance;
}

// Object method to display account information
Customer.prototype.displayInfo = function () {
    console.log(`Account Holder: ${this.name}, Balance: Rs. ${this.balance}/-`);
};

// Object method to deposit money
Customer.prototype.deposit = function (amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit successful. New balance: Rs. ${this.balance}/-`);
    } else {
        console.log("Invalid deposit amount. Please enter a positive value.");
    }
};

// Object method to withdraw money
Customer.prototype.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal successful. New balance: Rs. ${this.balance}/-`);
    } else {
        console.log("Invalid withdrawal amount or insufficient funds.");
    }
};

// Example usage:
const customer1 = new Customer("John Doe", 5000);
customer1.displayInfo(); // Display initial account information

customer1.deposit(2000); // Deposit Rs. 2000
customer1.displayInfo(); // Display updated account information

customer1.withdraw(1500); // Withdraw Rs. 1500
customer1.displayInfo(); // Display updated account information

const customer2 = new Customer("afroj", 7000);
customer2.deposit(5000);

