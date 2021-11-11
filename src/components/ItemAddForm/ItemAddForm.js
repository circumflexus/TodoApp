import React from "react";

import './ItemAddForm.css';

export default class ItemAddForm extends React.Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return(
            <form className="item-add-form"
                    onSubmit={this.onSubmit}>
                <input type="text"
                        className="input-field"
                        onChange={this.onLabelChange}
                        placeholder="Add something"
                        value={this.state.label}
                        required />
                <button type="submit"
                        className="btn-submit">
                    <i className="fa fa-angle-up" />
                </button>
            </form>
        );
    }
};