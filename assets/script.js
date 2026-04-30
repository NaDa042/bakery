/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

// CAKES
const chocolateFudgeCake = { name: "Chocolate Fudge Cake", price: 15, quantity: 0, productId: 100, image: "./images/cake/ChocolateFudgeCake.jpg" };
const redVelvetCake = { name: "Red Velvet Cake", price: 13, quantity: 0, productId: 101, image: "./images/cake/RedVelvet.jpg" };
const strawberryShortcake = { name: "Strawberry Shortcake", price: 12, quantity: 0, productId: 102, image: "./images/cake/StrawberryShortcake.jpg" };
const strawberryCheesecake = { name: "Strawberry Cheesecake", price: 10, quantity: 0, productId: 103, image: "./images/cake/StrawberryCheesecake.jpg" };
const biscoffCake = { name: "Biscoff Caramel Cake", price: 15, quantity: 0, productId: 104, image: "./images/cake/BiscoffCaramelCake.jpg" };

// CUPCAKES
const ChocolateGanacheCupcake = {name : "Chocolate Ganache Cupcake" , price: 7, quantity: 0,productId: 105, image : "./images/cupcake/ChocolateGanacheCupcake.jpg"};
const RedVelvetCupcake = {name : "Red Velvet Cupcake" , price: 10, quantity: 0 ,productId: 106, image :"./images/cupcake/RedVelvetCupcake.jpg"};
const SaltedCaramelCupcake = {name : "Salted Caramel Cupcake" , price: 8 , quantity: 0 ,productId: 107, image :"./images/cupcake/SaltedCaramelCupcake.jpg"};
const StrawberryCupcake = {name : "Strawberry Cupcake" , price: 9, quantity: 0 ,productId:108 , image :"./images/cupcake/StrawberryCupcake.jpg"};
const ToastedCoconutCupcake = {name : "Toasted Coconut Cupcake"  , price: 10, quantity: 0 ,productId: 109, image :"./images/cupcake/ToastedCoconutCupcake.jpg"};

// CROISSANTS
const ChocolateCroissant = {name : "Chocolate Croissant" , price: 12, quantity: 0 ,productId: 110 , image :"./images/croissant/ChocolateCroissant.jpg"};
const ClassicButteryCroissant = {name : "Classic Buttery Croissant" , price: 5, quantity: 0 ,productId: 111, image :"./images/croissant/ClassicButteryCroissant.png"};
const FrenchAlmondCroissants = {name :"French Almond Croissants", price: 10 , quantity: 0 ,productId:112 , image :"./images/croissant/FrenchAlmondCroissants.jpg"};
const pistachioCreamCroissant = {name : "Pistachio Cream Croissant" , price: 12, quantity: 0 ,productId:113 , image :"./images/croissant/pistachioCreamCroissant.jpg"};
const StrawberryCreamCroissant = {name : "Strawberry Cream Croissant" , price: 8, quantity: 0 ,productId: 114, image :"./images/croissant/StrawberryCreamCroissant.jpg"};

// COOKIES
const BiscoffStuffedCookie = {name : "Biscoff Stuffed Cookie"  , price: 14, quantity: 0 ,productId: 115 , image :"./images/cookies/BiscoffStuffedCookie.jpg"};
const ClassicChocolateChipCookies = {name : "Classic Chocolate Chip Cookies" , price:  6, quantity: 0 ,productId: 116, image :"./images/cookies/ClassicChocolateChipCookies.jpg"};
const DoubleChocolateFudgeCookie = {name : "Double Chocolate Fudge Cookie" , price: 8, quantity: 0 ,productId:117 , image :"./images/cookies/DoubleChocolateFudgeCookie.jpg"};
const PistachioWhiteChocolateCookie = {name : "Pistachio White Chocolate Cookie" , price: 10, quantity: 0 ,productId: 118, image :"./images/cookies/PistachioWhiteChocolateCookie.png"};
const StrawberryCheesecakeCookie = {name : "Strawberry Cheesecake Cookie" , price: 8, quantity: 0 ,productId: 119, image :"./images/cookies/StrawberryCheesecakeCookie.jpg"};

// DONUTS
const CaramelGlazedDonut = {name : "Caramel Glazed Donut" , price: 7, quantity: 0 ,productId: 120, image :"./images/donut/CaramelGlazedDonut.jpg"};
const ChocolateGlazedDonuts = {name : "Chocolate Glazed Donuts" , price: 10 , quantity: 0 ,productId:121 , image :"./images/donut/ChocolateGlazedDonuts.jpg"};
const glazedDonuts = {name : "Classic glazed Donuts" , price: 7 , quantity: 0 ,productId:122 , image :"./images/donut/glazedDonuts.jpg"};
const jellyFilledDonuts = {name : "jelly Filled Donuts" , price: 8, quantity: 0 ,productId: 123, image :"./images/donut/jellyFilledDonuts.jpg"};
const strawberryFrostedDonuts = {name : "Strawberry Frosted Donuts" , price: 8, quantity: 0 ,productId: 124, image :"./images/donut/strawberryFrostedDonuts.jpg"};

// ROLLS
const cinnamonRoll = {name : "Cinnamon Roll" , price: 8, quantity: 0 ,productId: 125, image :"./images/rolls/cinnamonRoll.jpg"};
const CaramelPecanRoll = {name : "Caramel Pecan Roll" , price: 12, quantity: 0 ,productId: 126, image :"./images/rolls/CaramelPecanRoll.jpg"};
const NutellaCrescentRolls = {name : "Nutella Crescent Rolls" , price: 10, quantity: 0 ,productId: 127, image :"./images/rolls/NutellaCrescentRolls.jpg"};
const PistachioCreamRoll = {name : "Pistachio CreamRoll" , price: 10, quantity: 0 ,productId: 128, image :"./images/rolls/PistachioCreamRoll.jpg"};
const StrawberryCreamCheeseRoll = {name : "Strawberry Cream Cheese Roll" , price: 8, quantity: 0 ,productId: 129, image :"./images/rolls/StrawberryCreamCheeseRoll.jpg"};



products.push(
    chocolateFudgeCake, redVelvetCake, strawberryShortcake, strawberryCheesecake, biscoffCake,
    ChocolateGanacheCupcake, RedVelvetCupcake, SaltedCaramelCupcake, StrawberryCupcake, ToastedCoconutCupcake,
    ChocolateCroissant, ClassicButteryCroissant, FrenchAlmondCroissants, pistachioCreamCroissant, StrawberryCreamCroissant,
    BiscoffStuffedCookie, ClassicChocolateChipCookies, DoubleChocolateFudgeCookie, PistachioWhiteChocolateCookie, StrawberryCheesecakeCookie,
    CaramelGlazedDonut, ChocolateGlazedDonuts, glazedDonuts, jellyFilledDonuts, strawberryFrostedDonuts,
    cinnamonRoll, CaramelPecanRoll, NutellaCrescentRolls, PistachioCreamRoll, StrawberryCreamCheeseRoll
);


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function findInArray(arr ,productId){
  return arr.find(item => item.productId === productId);
}
function addProductToCart(productId){
  const product = findInArray(products,productId);
  if (!product) return;

  const inCart = findInArray(cart,productId);
  if (!inCart) {
    cart.push({ ...product }); 
}
  increaseQuantity(productId);
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const item = findInArray(cart,productId);
  if (item) item.quantity += 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
- decreaseQuantity should get the correct product based on the productId
- decreaseQuantity should decrease the quantity of the product
- if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const item = findInArray(cart,productId);
  if (item){
    item.quantity -=1;
    if (item.quantity === 0){
      removeProductFromCart(productId);
    }
    
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
- removeProductFromCart should get the correct product based on the productId
- removeProductFromCart should update the product quantity to 0
- removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId){
  const item = findInArray(cart,productId);
  if (item){
    item.quantity = 0;
    const index = cart.findIndex(item => item.productId === productId);
    cart.splice(index,1);
  }
  
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal(){
  let totalCost = 0;
  for (let item of cart){
    totalCost += (item.quantity * item.price);
  }
  return totalCost;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  while (cart.length > 0) {
    removeProductFromCart(cart[0].productId);
  }
}
/* Create a function named pay that takes in an amount as an argument
- amount is the money paid by customer
- pay will return a negative number if there is a remaining balance
- pay will return a positive number if money should be returned to customer
Hint: cartTotal function gives us cost of all the products in the cart  
*/
let totalPaid = 0;

function pay(amount) {
  const debt = cartTotal();
  totalPaid += amount;
  const remainingBalance = totalPaid - debt;

  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }

  return remainingBalance;
}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
