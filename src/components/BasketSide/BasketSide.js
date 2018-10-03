import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import BasketProduct from '../BasketProduct/BasketProduct';
import ShowPrice from '../ShowPrice/ShowPrice';

import './BasketSide.css';

function BasketSide(props) {
    const bouthProducts = props.products.filter(x => x.bouth);
    const numberOfBouthItems = bouthProducts.reduce((total, {bouth}) => total + bouth, 0);
    const totalPrice = props.products.reduce((tot, x) => tot + x.bouth * x.pricePerUnit, 0);
    function changeQuantity(productId, increment) {
        props.changeQuantity(productId, increment);
    }
    function removeAll(productId) {
        props.removeAll(productId);
    }
    return <Jumbotron className="basket-side">
        <div>Items: {numberOfBouthItems}</div>
        Total price: <ShowPrice price={totalPrice} />
        {props.products.filter(x => x.bouth)
            .map((item, i) =>
                <BasketProduct product={item} key={i}
                    changeQuantity={changeQuantity.bind(this)}
                    removeAll={removeAll.bind(this)}/>
            )
        }
    </Jumbotron>;
}

export default BasketSide;
