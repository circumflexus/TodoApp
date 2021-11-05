import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';

const TodoList = ({ itemData, onDelete }) => {
    const elements = itemData.map((item) => {
        return (
        <li key={item.id} className="list-group-item">
            <TodoListItem
                label={item.label}
                important={item.important}
                onDelete={() => onDelete(item.id)} />
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