// Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.

const calculateBill = (costPerDish, numberOfPeople) => {
    if (costPerDish > 0 && numberOfPeople > 0) {
        const totalBill = costPerDish * numberOfPeople;
        const billPerPerson = totalBill / numberOfPeople;

        // Return an object containing totalBill and billPerPerson
        return {
            totalBill: totalBill,
            billPerPerson: billPerPerson
        };
    } else {
        console.log("Invalid input: Cost per dish and number of people should be greater than 0.");
        return null;
    }
};

// Example usage:
const costPerDish = 275;
const numberOfPeople = 5;

const billDetails = calculateBill(costPerDish, numberOfPeople);

if (billDetails !== null) {
    console.log("Bill Details:", billDetails);
    console.log(`Total Bill: Rs. ${billDetails.totalBill.toFixed(2)}/-`);
    console.log(`Bill per Person: Rs. ${billDetails.billPerPerson.toFixed(2)}/-`);
}