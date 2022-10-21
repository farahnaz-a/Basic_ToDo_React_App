import React from "react";
import Todo from "./Todo";

export default function Form({todoArr, setTodoArr}){ 

    const addMe = () => {
        const data = document.querySelector('.data').value;
        document.querySelector('.data').value = "";
        if(data.trim() !== ''){
            document.querySelector('.data').setAttribute("placeholder", "Add Todo")
            todoArr.push(data)
            setTodoArr([...todoArr])
        }else{
            document.querySelector('.data').setAttribute("placeholder", "Please add a todo")
        }
    }

    const updateMe = () => {
        const data = document.querySelector('.data');
        if(data.value !== ''){
            const currentIndex = data.dataset.key;
            todoArr.splice(parseInt(currentIndex), 1, data.value);
            setTodoArr([...todoArr])
            data.value = ''; 
            const btn = document.querySelector('.add-btn');
            btn.style.display = "initial";
            const updateBtn = document.querySelector('.update-btn');
            updateBtn.style.display = "none";
        }else{
            document.querySelector('.data').setAttribute("placeholder", "Please update this todo")
        }
    }

    return (
        <div className="card">
            <div className="card__header">
                <input className="data card__header__input" type="text" placeholder="Add Todo" />
            </div>
            <Todo todoArr={todoArr} setTodoArr={setTodoArr}/>
            <div className="card__footer">
                <button className="add-btn card__footer__btn" onClick={addMe}>
                    <i className="bi bi-plus-lg"></i>
                    <span className="card__footer__btn__text">Add</span>
                </button>           
                <button style={{display :"none" }} className="update-btn card__footer__btn" onClick={updateMe}>
                    <i className="bi bi-send-check"></i>
                    <span className="card__footer__btn__text">Update</span>
                </button>
            </div>
        </div>
    )

}