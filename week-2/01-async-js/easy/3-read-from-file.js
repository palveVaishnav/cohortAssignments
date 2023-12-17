// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');
const path = 'week-2/01-async-js/easy/randomFile.txt';

console.log("Entering the readFile Function");
fs.readFile(path,'utf-8',(err,data)=>{
    console.log("Inside the readFile Function");
    if(err) throw err;
    console.log("Content of the File: \n",data);
});

console.log("After the read function")

for(let i=0;i<100;i++){
    console.log(i);
}

console.log('End of code');

// flow -> normal -> readFile   ->  ->      ->      ->      ->    ->  callback
//                      |                                                |
//                -> After read function -> for loop -> End of Code -> content of file  ---End of execution.