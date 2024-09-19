import TodoItem from "./ToDoItem";
import s from "./ItemsContainer.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const ToDoItems = () => {
    const {todoItems} = useContext(TodoItemsContext);

    console.log(todoItems)
    return (
        <div className={s.itemsContainer}>
            {todoItems.map(item => (<TodoItem key={item.Name} todoName={item.Name} todoDate={item.dueDate}></TodoItem>))}
        </div>
    )
}

export default ToDoItems;