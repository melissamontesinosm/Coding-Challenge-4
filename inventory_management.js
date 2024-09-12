
// Task 1: Create an Inventory Array of Product Objects

let inventory = [
    { name:"Mattress", price: 522, quantity: 138, lowStockLevel: 22},
    { name: "Pillow", price: 25, quantity: 212, lowStockLevel: 18},
    { name: "Comforter", price: 121, quantity: 98, lowStockLevel: 14},
    { name: "Nightstand", price: 89, quantity: 66, lowStockLevel: 8}, 
    { name: "Headboards", price: 102, quantity: 78, lowStockLevel: 9},
];
 
console.log(inventory)

// Task 2: Create a Function to Display Product Details

function displayProductDetails(inventory) {
    inventory.forEach(product => {
        const stockStatus = quantity <= lowStockLevel ? "Low Stock" : "In Stock"; // Using a ternary Operator to check stock status
         console.log(`${product.name}: $${product.price} : ${product.quantity} units : ${product.stockStatus}`);
    }); // Using the forEach formula to formulate a report
}

