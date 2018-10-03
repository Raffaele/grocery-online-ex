import BasketSide from './BasketSide';
import {connect} from 'react-redux';

import { basketRemoveQuantity, changheBuyQuatity } from '../../store/actions/basket/basketActions';

function mapStateToProps({ products, basket }) {
    return {
        products: products.map(product => ({
            ...product,
            bouth: basket[product.id].quantity
        }))
    };
}

function mapDispatchesToProps(dispatch) {
    return {
        changeQuantity: (productId, increment) => {
            dispatch(changheBuyQuatity(productId, increment));
        },
        removeAll: productId => {
            dispatch(basketRemoveQuantity(productId));
        }
    };
}

const ReduxBasketSide = connect(mapStateToProps, mapDispatchesToProps)(BasketSide);

export default ReduxBasketSide;