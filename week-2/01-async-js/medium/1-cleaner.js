const fs = require('fs');

const path = 'week-2/01-async-js/medium/toClean.txt'

fs.readFile(path, 'utf-8', (err, data) => {
    if (err) throw err;
    data = data.replace(/\s+/g, ' ');
    fs.writeFile(path, data, (err) => {
        if (err) throw err;
        console.log("File is cleaned");
    })
});




