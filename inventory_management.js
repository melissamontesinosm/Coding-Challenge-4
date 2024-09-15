
// Task 1: Create an Inventory Array of Product Objects

const inventory = [
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
        const {quantity, lowStockLevel} = product; // Defining quantity and lowStockLevel
        const stockStatus = quantity <= lowStockLevel ? "Low Stock" : "In Stock"; // Using a ternary Operator to check stock status
         console.log(`${product.name}: $${product.price} : ${product.quantity} units : ${stockStatus}`);
    }); // Using the forEach formula to formulate a report
}

displayProductDetails(inventory);


// Task 3: Create a Function to Update Product Stock After Sales

const unitsSold = [42,121,50,66,71]; //Units Sold for Each Product

function updateStock(product, UnitsSold) {
    product.quantity -= UnitsSold;

let status;
    if (product.quantity <= 0) {
        status = 'Out of Stock';
    } else if (product.quantity <= product.lowStockLevel) {
        status = 'Low on stock';
    } else {
        status = 'Sufficient Stock';
    }

 console.log(`${product.name}: Updated Quantity = ${product.quantity}, Status= ${status}`);
} 

inventory.forEach ((product, index) => {
    updateStock(product, unitsSold[index]);
}); 


// Task 4: Create a Function to Check Low Stock Products

const updatedinventory = [
    { name:"Mattress", price: 522, quantity: 96, lowStockLevel: 22},
    { name: "Pillow", price: 25, quantity: 91, lowStockLevel: 18},
    { name: "Comforter", price: 121, quantity: 48, lowStockLevel: 14},
    { name: "Nightstand", price: 89, quantity: 0, lowStockLevel: 8}, 
    { name: "Headboards", price: 102, quantity: 7, lowStockLevel: 9},
];

function checkLowStock(updatedinventoryinventory) {
    inventory.forEach(product => {
        if (product.quantity < product.lowStockLevel) {
            console.log(`Buy Stock for: ${product.name}`);
        } 
    });
}

checkLowStock(updatedinventory);


