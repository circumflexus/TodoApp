import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? '#0071e3' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
    <span className="todo-list-item">
        <span className="todo-list-item-label" style={style}>
            {label}
        </span>
        <button type="button" className="btn btn-outline-danger btn-sm float-end">
            X
        </button>
        <button type="button" className="btn btn-outline-success btn-sm float-end">
            !
        </button>
    </span>
    );
};


export default TodoListItem;