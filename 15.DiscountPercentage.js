// Calculate the percentage of the discount
// A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
// show customers how much they can save. Given the original price and the discounted price of a product,
// implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
// This function could be useful for the store's marketing team to create promotions and offers that attract
// customers.

const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice > discountedPrice) {
        const discountAmount = originalPrice - discountedPrice;
        const discountPercentage = (discountAmount / originalPrice) * 100;
        return parseFloat(discountPercentage.toFixed(2)); // Round off to two decimal places
    } else {
        console.log("Invalid input: Discounted price should be less than the original price.");
        return null;
    }
};

// Example usage:
const originalPrice = 1000;
const discountedPrice = 650;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

if (discountPercentage !== null) {
    console.log(`Discount Percentage: ${discountPercentage}%`);
}