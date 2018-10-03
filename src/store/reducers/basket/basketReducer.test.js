import basketReducer from './basketReducer';
import { BASKET_BUY_QUANTITY, BASKET_REMOVE_ALL_ITEM_TYPE } from '../../actions/basket/basketActions';

describe('basketReducer', () => {
    const initialState = Array.from({length: 8}).map((x, productId) => ({
        productId,
        quantity: 5
    }));
    it('should increment the bouth quantity of product', () => {
        const productId = 3;
        const newState = basketReducer(initialState, {
            type: BASKET_BUY_QUANTITY,
            increment: 1,
            productId
        });
        const product = newState.find(x => x.productId === productId);
        expect (product.quantity).toBe(6);
    });
    it('should remove the selected product from the basket', () => {
        const productId = 4;
        const newState = basketReducer(initialState, {
            type: BASKET_REMOVE_ALL_ITEM_TYPE,
            productId
        });
        const product = newState.find(x => x.productId === productId);
        expect (product.quantity).toBe(0);
    });
});