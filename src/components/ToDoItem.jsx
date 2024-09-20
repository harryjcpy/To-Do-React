import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({todoName, todoDate}) => {
    const {deleteItem} = useContext(TodoItemsContext)

    return (
        <>
            <div className="container text-center">
                <div className="row kg-row">
                    <div className="col-6 to-do-text">
                        {todoName}
                    </div>
                    <div className="col-4 to-do-date">
                        {todoDate}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger kg-button" onClick = {() => deleteItem(todoName)}>
                        <MdDelete size={25}/>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodoItem;