import React from 'react';
import Enzyme, {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BasketProduct from './BasketProduct';

configure({ adapter: new Adapter() });

describe('BasketProduct component', () => {
    let removeAll;
    let changeQuantity;
    let product;
    let BasketProductComponent;
    beforeEach(() => {
        removeAll = jest.fn();
        changeQuantity = jest.fn();
        product = {
            name: 'product name',
            id: 3
        };
        BasketProductComponent = shallow(<BasketProduct
            product={product}
            changeQuantity={changeQuantity}
            removeAll={removeAll}/>);
    });
    it('should show the correct name', () => {
        expect(BasketProductComponent.find('[data-selector="product-name"]').text()).toBe(product.name);
    });

    describe('inner QuantitySpinner component', () => {
        let QuantitySpinnerComponent;
        beforeEach(() => {
            QuantitySpinnerComponent = BasketProductComponent.find('QuantitySpinner');
        });
        it('should be present', () => {
            expect(QuantitySpinnerComponent.length).toBe(1);
        });
        it('should receive the product from BasketProduct', () => {
            expect(QuantitySpinnerComponent.props().info).toBe(product);
        });
        it('should call the BasketProductComponent.changeQuantity method on QuantitySpinnerComponent.increase event', () => {
            QuantitySpinnerComponent.props().increase();
            expect(changeQuantity.mock.calls.length).toBe(1);
            expect(changeQuantity).toBeCalledWith(product.id, 1);
        });

        it('should call the BasketProductComponent.changeQuantity method on QuantitySpinnerComponent.decrease event', () => {
            QuantitySpinnerComponent.props().decrease();
            expect(changeQuantity.mock.calls.length).toBe(1);
            expect(changeQuantity).toBeCalledWith(product.id, -1);
        });
    });
});
