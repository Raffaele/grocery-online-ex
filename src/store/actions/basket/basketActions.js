export const BASKET_BUY_QUANTITY = 'basket:change-quantity';
export const BASKET_REMOVE_ALL_ITEM_TYPE = 'basket:remove-all-item-type';

export function changheBuyQuatity(productId, increment) {
    return {
        type: BASKET_BUY_QUANTITY,
        productId,
        increment
    };
}

export function basketRemoveQuantity(productId) {
    return {
        type: BASKET_REMOVE_ALL_ITEM_TYPE,
        productId
    };
}
