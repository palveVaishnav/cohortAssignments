

setInterval(() => {
    const myDate = new Date();
    let hour = myDate.getHours(), minute = myDate.getMinutes(), second = myDate.getSeconds();
    
    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour -= 12;
    }

    let time = `${hour}:${minute}:${second}`;

    if (hour < 12) {
        time += " AM";
    } else if (hour >= 12) {
        time += " PM"
    }

    console.log(time);
}, 1000);




