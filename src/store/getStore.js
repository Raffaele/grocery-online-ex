import { createStore, combineReducers } from 'redux';

import productsReducer from './reducers/products/productsReducer';
import cathegoriesReducer from './reducers/cathegories/cathegoriesReducer';
import basketReducer from './reducers/basket/basketReducer';

function getStore(products) {
    const cathegories = getCathegories(products);
    const completeReducers = combineReducers({
        cathegories: cathegoriesReducer,
        products: productsReducer,
        basket: basketReducer
    });
    const basket = products.map((product) => ({
        quantity: 0,
        productId: product.id
    }));
    return createStore(completeReducers, {
        cathegories,
        products,
        basket
    }, window.devToolsExtension());
}

function getCathegories(products) {
    return products.reduce((complete, product) => {
        const extraCathegories = product.cathegories.filter(cat => !complete.includes(cat));
        return [...complete, ...extraCathegories];
    }, [])
    .map((name, id) => ({
        name,
        id
    }));
}

export default getStore;
