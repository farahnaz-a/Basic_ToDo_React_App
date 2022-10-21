import React from "react";
import { useState } from "react";

export default function Form({todoArr, setTodoArr}){ 

    // const [element, setElement] = useState('')

    const addMe = (e) => {
        
        e.preventDefault();
        const data = document.querySelector('.data').value;
        // setElement(data);
        document.querySelector('.data').value = "";

        todoArr.push(data)
        setTodoArr([...todoArr])

        console.log(todoArr);
      
    }

    const updateMe = (e) => {
        
        const data = document.querySelector('.data');
        const currentIndex = data.dataset.key;
        todoArr.splice(parseInt(currentIndex), 1, data.value);
        setTodoArr([...todoArr])
        data.value = ''; 
        const btn = document.querySelector('.add-btn');
        btn.style.display = "initial";
        const updateBtn = document.querySelector('.update-btn');
        updateBtn.style.display = "none";
    }

    return (
        <div>
            <input className="data" type="text" placeholder="Name" />

            <button className="add-btn" onClick={addMe}> Add </button>           
            <button style={{display :"none" }} className="update-btn" onClick={updateMe}> Update </button>           
        </div>
    )

}