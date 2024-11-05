// const vegetarian = "Vegetarian Pizza";
// const hawaiian = "Hawaiian Pizza";
// const pepperoni = "Pepperoni Pizza";

// const pizzaPrice = 80;

// //Put your Javscript code here:

// //BigInt.addEventlistener("click", () => {
// //const orderQuantity = parseFloat (document.getElementById("orderQuantity").value)
// //const orderName = document.getElementById("orderName")
// //const button = document.getElementById("btn")
// //};

// //Greeting
// alert(
//   `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
// );

// //Order

// let orderName = prompt("Enter the name of the pizza you want to order today.");

// //check if pizza on menu

// function checkOrderName(orderName) {
//   if (
//     orderName === vegetarian ||
//     orderName === hawaiian ||
//     orderName === pepperoni
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // How many pizzas?

// let orderQuantity;

// if (!checkOrderName(orderName)) {
//   alert("Sorry, that pizza is not on our menu!");
// } else {
//   orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`));
// }

// //Finalizing the order
// function totalCost(orderQuantity) {
//   return orderQuantity * pizzaPrice;
// }

// //Cooking time

// function cookingTime(orderQuantity) {
//   if (orderQuantity <= 2) {
//     return 10;
//   } else if (orderQuantity <= 5) {
//     return 15;
//   } else {
//     return 20;
//   }
// }

// let orderTotal = totalCost(orderQuantity);
// let time = cookingTime(orderQuantity);

// alert(
//   `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`
// );

// New JS code;

const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

// Add event listener to the form submission
document
  .getElementById("pizzaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // values from the form
    const orderName = document.getElementById("pizzaType").value;
    const orderQuantity = parseInt(
      document.getElementById("pizzaQuantity").value,
      10
    );

    // Check if the pizza is on the menu
    if (!checkOrderName(orderName)) {
      alert("Sorry, that pizza is not on our menu!");
      return;
    }

    // Calculate total cost and cooking time
    const orderTotal = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);

    // final message
    alert(
      `Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`
    );
  });
