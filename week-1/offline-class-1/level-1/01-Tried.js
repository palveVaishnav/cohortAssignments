
// length
let str = "Hello Vaishnav "
console.log(str.length);

// indexOf
let index = str.indexOf("Vai");
// indexOf is Case Sensitive
console.log(index)

// lastIndexOf
index = str.lastIndexOf("v"); // Also Case Sensitive 
console.log(index)

// slice 
index = str.slice(6,14);  // start <-> (end-1)
console.log(index);

// substring 
index = str.substring(6,14)
console.log(index)

// Differnece between slice and Substring  ??

// Replace 
index = str.replace("Vaishnav","Vaishnavi")
console.log(index,str)
// No changes in original string are made, new string is returned with the required replacements..

// split
index = str.split(" ");
console.log(index)

// trim
str = "   Hello   Vaishnav    "
index = str.trim()
// Trims white-spaces from front and back -> NOT MIDDLE
console.log(index)






