import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';

const TodoList = ({ itemData, onDelete, onToggleImportant, onToggleDone }) => {
    const elements = itemData.map((item) => {
        return (
        <li key={item.id} className="list-group-item">
            <TodoListItem
                label={item.label}
                important={item.important}
                done={item.done}
                onDelete={() => onDelete(item.id)}
                onToggleImportant={() => onToggleImportant(item.id)}
                onToggleDone={() => onToggleDone(item.id)} />
        </li>
        );
    });

    let classNames = "list-group todo-list";

    if(elements.length === 0) {
        classNames += " empty";
    }

    return (
      <ul className={classNames}>
          { elements }
      </ul>
    );
  };

  export default TodoList;