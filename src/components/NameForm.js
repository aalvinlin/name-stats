import React, { useState, useEffect } from "react";
import axios from "axios";

export const NameForm = () => {

    const [userInput, setUserInput] = useState("");

    const handleNameInput = event => {
        setUserInput(event.target.value);
    }

    const handleSubmit = event => {
        
        const API_URL = ""

        axios.get(API_URL + "?" + userInput)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div id="nameForm">
            <h2>Type your name to begin...</h2>
            <form>
                <input name="name_input" onInput={handleNameInput} value={userInput}></input>
                <button name="name_button" onClick={handleSubmit}>Go!</button>
            </form>
        </div>
    )
}