
// react query 

import { useState } from "react"

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // to show a message to the user about the inputs given
    // we will add two states and components to one to store the message and other to check the 
    // current condition of the popUp box
    const [PopupOpen, setPopupOpen] = useState(false);
    const [popUpMsg, setPopupMessage] = useState("");

    function Popup({ m }) {
        return (
            <div>
                <p
                    style={{
                        color: `red`,
                        fontSize: '20px',
                    }}>
                    {m}
                </p>
            </div>
        );
    }

    const addTodo = async () => {
        try {
            await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // now IF we are here means that the todo is added successfully 
            // so now clear the fields
            setPopupMessage("Todo added !");
            setTitle("");
            setDescription("");
            // if an error occurs
        } catch (error) {
            console.log("Error adding todo: ", error);
            setPopupMessage("Failed to add ! try again");
        } finally {
            setPopupOpen(true);
            setTimeout(() => {
                // closing and cleaning the popup
                setPopupOpen(false);
                setPopupMessage("");
            }, 1000);
        }
    };


    return <div>
        <input
            style={{
                padding: 10,
                margin: 10,
            }}
            id="title"
            type="text"
            placeholder="title"
            value={title} //which is set to clear by the addTodo function
            onChange={(e) => {
                setTitle(e.target.value);
            }}>
        </input>
        <br />
        <input
            style={{
                padding: 10,
                margin: 10,
            }}
            id="description"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
                setDescription(e.target.value);
            }}>
        </input>
        <br />
        <button
            style={{
                padding: 10,
                margin: 10,
            }}
            id="markButton"
            onClick={addTodo}
        //  using the addTOdo as an object/state and not as function
        //  if used as function : onClick="addTodo()";
        >
            Add a Todo
        </button>
        {PopupOpen && <Popup m={popUpMsg} />}
    </div>
}

// versel , netlify , render(backend)