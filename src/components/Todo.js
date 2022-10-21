export default function Todo({todoArr, setTodoArr}) { 
    const editMe = (e) => {
        document.querySelectorAll(".edit-checkbox").forEach((item)=>{
            console.log(item);
            item.disabled = true;
        })

        const currentIndex = e.currentTarget.dataset.key;

        const input = document.querySelector('.data');
        input.value = todoArr[currentIndex]; 
        input.setAttribute('data-key', currentIndex);
        const btn = document.querySelector('.add-btn'); 
        btn.style.display = "none";
        const updateBtn = document.querySelector('.update-btn');
        updateBtn.style.display = "initial";
        
    }
    const deleteMe = (e) => {
        const currentIndex = e.target.dataset.key;
        todoArr.splice(currentIndex, 1);
        setTodoArr([...todoArr])
    }

    return (
        <div className="card__body">
            {
                todoArr.length === 0 &&
                <div className="alert alert--danger">
                    Todo list is empty.
                </div>
            }
            <ul className="card__body__list">
                {todoArr.map((item, index) => (
                    <li key={Math.random()} className="card__body__list__item">
                        <input type="checkbox" className="card__body__list__item__checkbox edit-checkbox" />
                        <span className="card__body__list__item__text">
                            <span className="card__body__list__item__text__inner">{item}</span>
                        </span>
                        <div className="card__body__list__item__btn-group">
                            <button className="card__body__list__item__btn card__body__list__item__btn--edit" onClick={editMe} data-key={index}>
                                <i className="bi bi-pencil-square"></i>
                            </button>
                            <button className="card__body__list__item__btn card__body__list__item__btn--delete" onClick={deleteMe} data-key={index}>
                                <i className="bi bi-trash3"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}