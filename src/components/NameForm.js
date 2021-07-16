import React, { useState } from "react";

export const NameForm = () => {

    const [userInput, setUserInput] = useState("");

    const handleNameInput = event => {
        setUserInput(event.target.value);
    }

    return (
        <div id="nameForm">
            <h2>Type your name to begin...</h2>
            <form>
                <input name="name_input" onInput={handleNameInput} value={userInput}></input>
            </form>
        </div>
    )
}