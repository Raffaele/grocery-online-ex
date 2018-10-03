import React from 'react';

import QuantitySpinner from '../QuantitySpinner/QuantitySpinner';

import './BasketProduct.css';

function BasketProduct(props) {
    function changeQuantity(step) {
        props.changeQuantity(props.product.id, step);
    }
    function removeAll() {
        props.removeAll(props.product.id);
    }
    return <div className="basket-product">
        <div className="basket-product__close-btn-line">
            <span className="basket-product__close-btn" onClick={removeAll.bind(this)}>X</span>
        </div>
        <div data-selector="product-name">{props.product.name}</div>
        <QuantitySpinner info={props.product}
            increase={changeQuantity.bind(this, 1)}
            decrease={changeQuantity.bind(this, -1)} />
 
    </div>;
}

export default BasketProduct;
