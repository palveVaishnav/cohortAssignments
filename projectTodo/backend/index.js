// write a basic express boilerplate code
// with express.json() middleware.
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");


const cors = require("cors");
const { nullable } = require("zod");
const app = express();

app.use(express.json());
app.use(cors());


app.post("/todo", async (req, res) => {
    const createPayload = req.body;

    if (createPayload.title == "" && createPayload.description == "") {
        return res.status(400).json({
            msg: "Both the fields can't be empty !",
        })
    }

    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs ",
        })
        return;
    }

    // else put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Creted"
    })

});




app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos,
    });

});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id,
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as Completed."
    })
});

app.delete("/clear", async (req, res) => {
    await todo.deleteMany({});
    res.json({
        msg: "All todos cleared",
    });
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server at : http://localhost:${PORT}`);
})


