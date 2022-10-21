import React from "react"; 
import ReactDOM from "react-dom/client"; 
import Form from "./components/Form";
import { useState } from "react";
// import JSON from "./db.json"

import Header from "./components/Header"; 
import Todo from "./components/Todo";


import "./styles/style.css";

    const App =  () => { 

        const [todoArr, setTodoArr] = useState([])


        // let n = 4;
        
            return (
                <>
                    {/* <Header initialCounter={5} /> */}
                    
                    <Form  todoArr={todoArr} setTodoArr={setTodoArr}/>
                    <Todo todoArr={todoArr} setTodoArr={setTodoArr}/>
                    
                </>

                
            )

    }

    // const App = () => {
    //     const [color, setColor] = useState("red");
    //     const changeColor = (color) => {
    //        return this.setColor(color);
    //     }
      
    //     return (
    //         <>
    //             <h1>My favorite color is {color}!</h1>
    //             <button onClick={() => changeColor('blue')}>Change to blue</button>
    //         </>
    //     )
    //   }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />); 