/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait(t) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        },t*1000);
    })
}

async function calculateTime(t1, t2, t3) {
    let start = Date.now();

    //   Add async key word to the function declaration before using this code.
    // and this works ...

    await wait(t1);
    await wait(t2);
    await wait(t3);
    let end = Date.now();
    console.log(end-start);
    return end-start;

    // using .then() 
    // wait(t1).then(()=>{
    //     wait(t2).then(()=>{
    //         wait(t3).then(()=>{
                
    //         });
    //     });
    // });
    // let end = Date.now();                
    // let ans = end-start;
    // // console.log(ans,typeof(ans));
    // return ans;
}

// console.log(calculateTime(1,2,3));

module.exports = calculateTime;
