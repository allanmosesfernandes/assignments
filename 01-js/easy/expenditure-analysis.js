/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // Take in initial items and add timestamp to it
  const timestamp = new Date().toLocaleString();
  let shoppingListArray = {};

  transactions.forEach((item) => {
    const {itemName, category, price} = item;
    // Check if category exists in object
    if (shoppingListArray[category]) {
      shoppingListArray[category] += price;
    } else {
      shoppingListArray[category] = price;
    }
  });
  // console.log(shoppingListArray);
  const shoppingListArrayKeys = Object.keys(shoppingListArray).map(category => {
    return {category: category, totalSpent: shoppingListArray[category]}
  });
   console.log(shoppingListArrayKeys);
  return shoppingListArrayKeys;
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
];
// const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
calculateTotalSpentByCategory(transactions)
module.exports = calculateTotalSpentByCategory;
