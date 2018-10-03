import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Store from '../Store/Store';

import ReduxCathegoryList from '../CathegoryList/ReduxCathegoryList';

import { Provider } from 'react-redux';

import getStore from '../../store/getStore';

class GroceryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: getStore(this.props.storeData)
        };
    }
    render() {
        return <Provider store={this.state.store}>
            <div>
                <ReduxCathegoryList />
                <Store />
            </div>
        </Provider>;
    }
}

GroceryPage.propTypes = {
    storeData: PropTypes.array
};

export default GroceryPage;
