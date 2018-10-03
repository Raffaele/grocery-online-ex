import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Product from '../Product/Product';

import 'bootstrap/dist/css/bootstrap.css';
import './StoreList.css';

function StoreList(props) {
    function changeQuantityOfItem(item, increment) {
        props.changeQuantity({
            itemId: item.id,
            increment
        });
    }
    return <Row className="store-list-component">
        {props.products.map((item, index) => {
            return <Col key={index} xs={12} sm={6} md={4}>
                <Product info={item} changeQuantity={changeQuantityOfItem} />
            </Col>
        })}
    </Row>;
}

export default StoreList;
