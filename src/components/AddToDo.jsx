import { useRef, useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
    const {addNewItem} = useContext(TodoItemsContext)
    const todoNameElement = useRef();
    const dueDateElement = useRef();


    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        console.log(`${todoName} due on ${dueDate}`)
        addNewItem(todoName, dueDate);
    }
    return (
        <>
            <div className="container text-center">
                <form className="row kg-row" onSubmit={handleAddButtonClicked}>
                    <div className="col-6">
                        <input type="text" ref={todoNameElement} placeholder="Enter To Do" />
                    </div>
                    <div className="col-4">
                        <input type="date" ref={dueDateElement}  />
                    </div>
                    <div className="col-2">
                        <button  className="btn btn-success kg-button">
                        <BiMessageAdd size={25} />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddToDo;