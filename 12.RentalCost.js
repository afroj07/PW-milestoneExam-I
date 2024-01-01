//  Calculate rental cost
// A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
// of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
// Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.
// Thd rdntal costs arc
// V Economy = Rs. 4FFF /- pdr dayE
// V Midsizd = Rs. 1F,FFF /- pdr dayE
// V Luxury = Rs. 2F,FFF /- pdr day.
function calculateRentalCost(daysRented, carType) {
    // Define rental costs for each car type
    const economyCostPerDay = 4000;
    const midsizeCostPerDay = 15000;
    const luxuryCostPerDay = 20000;

    // Check the car type and calculate the total cost
    let totalCost;

    switch (carType.toLowerCase()) {
        case 'economy':
            totalCost = economyCostPerDay * daysRented;
            break;
        case 'midsize':
            totalCost = midsizeCostPerDay * daysRented;
            break;
        case 'luxury':
            totalCost = luxuryCostPerDay * daysRented;
            break;
        default:
            console.log('Invalid car type. Please choose economy, midsize, or luxury.');
            return;
    }

    // Return the total cost
    return totalCost;
}

// Example usage:
const daysRented = 5;
const carType = 'midsize';
const totalRentalCost = calculateRentalCost(daysRented, carType);

console.log(`Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalRentalCost}/-`);