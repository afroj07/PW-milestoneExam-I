function removeDuplicates(cart) {
    // Use a Set to store unique items
    const uniqueItems = new Set(cart);

    // Convert the Set back to an array
    const updatedCart = [...uniqueItems];

    return updatedCart;
}

// Example usage:
const customerCart = ["shirt", "shoes", "shoes", "hoody", "buds", "hoody"];
const updatedCart = removeDuplicates(customerCart);

console.log("Original Cart:", customerCart);
console.log("Cart without Duplicates:", updatedCart);