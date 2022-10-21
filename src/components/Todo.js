// import React from "react"; 

export default function Todo({todoArr, setTodoArr}) { 

    const editMe = (e) => {
        const currentIndex = e.target.dataset.key;
        
        // todoArr.splice(currentIndex, 1);
        // setTodoArr([...todoArr])

        // Get sibling input value 

        //  Get all siblings  and target specific class 
        // const siblings = e.target.parentNode.childNodes;    
        // const sibling = siblings[1];
        // const siblingValue = sibling.value;
        // todoArr.splice(currentIndex, 1, siblingValue);
        // setTodoArr([...todoArr])
        // console.log(todoArr);

        const input = document.querySelector('.data'); 
        input.value = todoArr[currentIndex]; 
        input.setAttribute('data-key', currentIndex);
        input.focus();
        const btn = document.querySelector('.add-btn'); 
        btn.style.display = "none";
        const updateBtn = document.querySelector('.update-btn');
        updateBtn.style.display = "initial"; 
        // todoArr.splice(currentIndex, 1, siblingValue);

        //  Add class to target sibling 
        // input.classList.add('edit');

        
        
    }
    const deleteMe = (e) => {
        const currentIndex = e.target.dataset.key;
        todoArr.splice(currentIndex, 1);
        setTodoArr([...todoArr])
        // console.log(todoArr);
    }
    return (
        <div>
            <ol>
            { 

                todoArr.map((item, index) =>
                    (
                        <li key={index}>
                            {item}
                            {/* <input className="edit" type="text" defaultValue={item}/> */}
                              &nbsp; 
                            
                            <br />
                            <button onClick={editMe} data-key={index}> Update</button> 
                            <button onClick={deleteMe} data-key={index}> Delete</button>
                            
                        </li>
                    )
                
                )

            }
            </ol>
        </div>
    )
}