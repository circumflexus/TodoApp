import React from "react";
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends React.Component {
    render() {
        return(
            <div className="btn-group item-status-filter">
                <button type="button" className="btn btn-primary active">All</button>
                <button type="button" className="btn btn-primary">Active</button>
                <button type="button" className="btn btn-primary">Done</button>
            </div>
        );
    };
}