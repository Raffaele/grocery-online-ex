import { BASKET_BUY_QUANTITY, BASKET_REMOVE_ALL_ITEM_TYPE } from '../../actions/basket/basketActions';

function basketReducer(state = [], action) {
    switch (action.type) {
        case BASKET_BUY_QUANTITY:
            return state.map((x, i)=> i !== action.productId ? {...x} : {...x, quantity: x.quantity + action.increment});
        case BASKET_REMOVE_ALL_ITEM_TYPE:
            return state.map((x, i) => i !== action.productId ? {...x} : {...x, quantity: 0});
        default:
            return state;
    }
}

export default basketReducer;
