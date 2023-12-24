
const express = require('express')
const app = express();

function oldEnoughMid(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "Sorry you are not of age yet!!"
        })
    }

}


// one way of using middlewares 

app.get("/ride1", oldEnoughMid, (req, res) => {
    res.json({
        msg: "you have SUCCESSFULLY riden the ride - 1"
    })
});


app.get("/ride2", oldEnoughMid, (req, res) => {
    res.json({
        msg: "you have SUCCESSFULLY riden the ride - 2"
    })
});

// another way of using it is declaring at the top and all the following gateways will include it automaticallyy

app.use(oldEnoughMid);

app.get("/ride3", (req, res) => {
    res.json({
        msg: "you have SUCCESSFULLY riden the ride - 3"
    })
});

app.get("/ride4", (req, res) => {
    res.json({
        msg: "you have SUCCESSFULLY riden the ride - 4"
    })
});



app.listen(3000, () => {
    console.log("The server is listning at https://localhost:3000");
});