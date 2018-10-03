import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import './QuantitySpinner.css';

function QuantitySpinner(props) {
    const isPlusDisabled = props.info.bouth === props.info.quantity;
    return <ButtonGroup className="product-info__cmd">
        <Button bsStyle="info" disabled={!props.info.bouth} onClick={props.decrease}>
            -
        </Button>
        <span className="product-info__quantity-bouth">{props.info.bouth}</span>
        <Button bsStyle="primary" disabled={isPlusDisabled} onClick={props.increase}>
            +
        </Button>
    </ButtonGroup>
}

export default QuantitySpinner;
