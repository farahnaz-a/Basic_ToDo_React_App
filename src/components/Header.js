import React from "react";

import { useState } from "react";

import Test from "./Test"; 

const Header = ({initialCounter}) => {
    // set the state of the header as a count and keywords 
    const [count, setCount] = useState(initialCounter); 
    // const [countTwo, setCountTwo] = useState(0); 
    const [keywords, setKeywords] = useState("My test keywords");

    // state = {
    //     title : "Welcome to React", 
    //     keywords : "Enter your keywords",
    //     count   : 0
    // }

    // inputChangeHandler = (event) => {
    //     this.setState(() => ({
    //         keywords : event.target.value
    //     }))
    // }

    const  addOne = (counter) => {
        setCount(count + counter);
    }
    // const  addTwo = () => {
    //     setCountTwo(countTwo + 2)
    // }
    const inputChangeHandler = (event) => {
        setKeywords(event.target.value)
    }

        return(
            <header >
                <div className="logo">Logo</div>
                <input  type="text" onChange={inputChangeHandler}/>
                <div>Default keywords are : {keywords}</div>
                <div>Counter : {count}</div>
                {/* <div>Counter : {countTwo}</div> */}
                <button onClick={() => addOne(1)}>Add One</button>
                <button onClick={() => addOne(2)}>Add Two</button>
                <Test counter={count}/>
            </header> 

        ) 
}

export default Header;