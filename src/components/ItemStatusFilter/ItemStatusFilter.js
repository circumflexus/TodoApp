import React from "react";
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends React.Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = this.props.filter === name;
            let classNames = "btn btn-primary";
            if(isActive) {
                classNames += ' active';
            }
            return (
                <button type="button"
                        className={classNames}
                        key={name}
                        onClick={() => this.props.onFilterChange(name)}>
                            {label}
                </button>
            );
        });
        return(
            <div className="btn-group item-status-filter">
                {buttons}
            </div>
        );
    };
}