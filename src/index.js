import React from "react"; 
import ReactDOM from "react-dom/client"; 
import Form from "./components/Form";
import { useState } from "react";
import "./styles/style.css";

const App =  () => {
    const [todoArr, setTodoArr] = useState([])
    return (
        <>
            <Form todoArr={todoArr} setTodoArr={setTodoArr}/>
        </>  
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 