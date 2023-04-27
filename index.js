const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
  };
  
  console.log(customer); // you can use this to check the contents of the object in the console
  
  // Modify email and phone
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;

// Modify zipCode and favoriteFlavors
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

console.log(customer); // you can use this to check the modified contents of the object in the console

// Delete zipCode and favoriteStore
delete customer.zipCode;
delete customer.favoriteStore;

// Add toppings, futureFlavors, and todaysPurchaseCost
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = ["mango"];
customer.todaysPurchaseCost = 5.32;

// Print all the keys in the customer object
console.log(Object.keys(customer));

// Print all the values in the customer object
console.log(Object.values(customer));