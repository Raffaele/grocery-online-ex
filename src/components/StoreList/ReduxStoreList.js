import StoreList from './StoreList';
import {connect} from 'react-redux';

import { changheBuyQuatity } from '../../store/actions/basket/basketActions';

function mapStateToProps({ products, cathegories, basket }) {
    const selectedCathegory = cathegories.find(cat => cat.isSelected);
    return {
        products: products
            .filter(item => !selectedCathegory || item.cathegories.includes(selectedCathegory.name))
            .map((item, index) => ({ ...item, index, bouth: basket[item.id].quantity }))
    };
}

function mapDispatchesToProps(dispatch) {
    return {
        changeQuantity: (command) => {
            dispatch(changheBuyQuatity(command.itemId, command.increment));
        }
    };
}

const ReduxStoreList = connect(mapStateToProps, mapDispatchesToProps)(StoreList);

export default ReduxStoreList;