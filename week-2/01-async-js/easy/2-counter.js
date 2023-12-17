// ## Counter without setInterval
// (Hint: setTimeout)

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let c = 0
function counter() {
    setTimeout(() => {
        console.log(++c);
        counter();
    }, 1000);
    // setTimeout(counter(),1000);  -> this line behaves differently , it doesn't wait for one second it just runs fast.
}
counter();
