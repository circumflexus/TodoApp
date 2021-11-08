import React from "react";

import './ItemAddForm.css';

const ItemAddForm = ({addItem}) => {
    return(
        <div className="item-add-form">
            <button type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => addItem('Test')}>
                Add item
            </button>
        </div>
    );
};

export default ItemAddForm;