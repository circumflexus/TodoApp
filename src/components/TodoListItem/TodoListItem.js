import React from "react";
import "./TodoListItem.css";

export default class TodoListItem extends React.Component {
    render() {
        const { label, onDelete, onToggleImportant, onToggleDone, important, done } = this.props;
        let classNames = 'todo-list-item';

        if (important) {
            classNames += ' important';
        }

        if (done) {
            classNames += ' done';
        }
    
        return (
        <span className={classNames}>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-start"
                    onClick={ onToggleDone }>
                <i className="fa fa-check-circle" />
            </button>
            <span className="todo-list-item-label">
                {label}
            </span>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-end"
                    onClick={onDelete}>
                <i className="fa fa-times-circle" />
            </button>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-end"
                    onClick={ onToggleImportant }>
                <i className="fa fa-exclamation-circle" />
            </button>
        </span>
        );
    };
}