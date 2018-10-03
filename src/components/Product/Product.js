import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import QuantitySpinner from '../QuantitySpinner/QuantitySpinner';
import ShowPrice from '../ShowPrice/ShowPrice';

class Product extends Component {
    constructor(props) {
        super(props);
        this.changeQuantity = this.changeQuantity.bind(this);
    }
    changeQuantity(increment) {
        this.props.changeQuantity(this.props.info, increment);
    }
    render() {
        return <Jumbotron className="product-info">
            <h4>{this.props.info.name}</h4>
            <small>
                Price per unit:
                <strong>
                    <ShowPrice price={this.props.info.pricePerUnit} />
                </strong>
            </small>
            {this.props.info.quantity ? <QuantitySpinner info={this.props.info}
                increase={this.changeQuantity.bind(this, 1)}
                decrease={this.changeQuantity.bind(this, -1)} /> :
                <p>OUT OF STOCK</p>}
            
            <div>
                <ShowPrice price={this.props.info.pricePerUnit * this.props.info.bouth} />
            </div>
        </Jumbotron>;
    }
}

export default Product;
