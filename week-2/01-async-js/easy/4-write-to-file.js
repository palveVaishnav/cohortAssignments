// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const path = 'week-2/01-async-js/easy/randomFile.txt';

let toWrite = 'Author : Vaishnav Palve'

fs.appendFile(path, toWrite, (err, data) => {
    if (err) throw err;
    console.log('Updated!!');
});

fs.writeFile('week-2/01-async-js/easy/randomFile.txt','the Replaced Content\n',(err)=>{
    if(err) throw err;
    console.log('Replaced!!');
})

// this one is intresting ... -> the thread first goes to .appendFile function and then moves on to the .writeFile function
// it executes the write function first and then it the callBack from the appendFile is resolved

/*
// Something doesn't add up ->
    sometimes the output is this :
        "the Replaced Content
        Author : Vaishnav Palve"
    
    Sometimes this : 
        "the Replaced Content
        ve"

 */
// is there a chance that both the function are working on the file at the same time ????