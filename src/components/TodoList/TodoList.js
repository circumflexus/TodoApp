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

    return (
      <ul className="list-group todo-list">
          { elements }
      </ul>
    );
  };

  export default TodoList;