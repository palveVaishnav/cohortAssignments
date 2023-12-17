/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


function calculateTotalSpentByCategory(transactions) {
  // transactions is an array of objects  
  
  if (transactions.length === 0) {
    return []
  }
  // resultObj will store all the categories as keys and their total prize as values associated with them

  let resultObj = {}
  // traversing the given transactions array of objects 
  for (let i of transactions) {
    // i is an object present in the array 
    // let cat = i.category;  // cat is the category 
    if (!resultObj[i.category]) {    // if not present in resultObj
      resultObj[i.category] = 0
    }
    resultObj[i.category] += i.price;
  }

  // console.log(resultObj)


  // now we have a resultObj as an object which contains all the categories and their corresponding prices 
  // but the return type is an array which contains an unique object for every category as the key and prize as the value 
  // so will traverse the resultObject and get the required output.



  let result = [];
  for (let i in resultObj) {
    let y = {};
    y["category"] = i;
    y["totalSpent"] = resultObj[i]
    result.push(y)
  }
  // console.log(result)  

  return result;
}


const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];

// calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
