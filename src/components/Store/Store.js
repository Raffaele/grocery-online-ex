import React from 'react';
import { Col, Row } from 'react-bootstrap';

import ReduxStoreList from '../StoreList/ReduxStoreList';
import ReduxBasketSide from '../BasketSide/ReduxBasketSide';

function Store(props) {
    return <Row>
        <Col xs={12} sm={8} md={9}>
            <ReduxStoreList />
        </Col>
        <Col xs={12} sm={4} md={3}>
            <ReduxBasketSide />
        </Col>
        <Col xs={12}>
            <h3>{props.cathegory}</h3>
        </Col>
    </Row>;
}

export default Store;
