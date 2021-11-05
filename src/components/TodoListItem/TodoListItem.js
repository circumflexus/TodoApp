import React from "react";
import "./TodoListItem.css";

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            important: false
        };
    }

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            };
        });
    }

    onExclButtonClick = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        });
    }

    render() {
        const { label, onDelete } = this.props;
        const {done, important} = this.state;
        let classNames = 'todo-list-item';

        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }
    
        return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={ this.onLabelClick }
            >
                {label}
            </span>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-end"
                    onClick={onDelete}>
                X
            </button>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-end"
                    onClick={this.onExclButtonClick}>
                !
            </button>
        </span>
        );
    };
}