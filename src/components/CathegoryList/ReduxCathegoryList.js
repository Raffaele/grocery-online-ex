import CathegoryList from './CathegoryList';
import {connect} from 'react-redux';

import { deselectAllCathegories, selectCathegory } from '../../store/actions/cathegories/cathegoriesActions';

function mapStateToProps({ cathegories }) {
    return {
        cathegories
    };
}

function mapDispatchesToProps(dispatch) {
    return {
        selectCathegory: cathegoryIndex => {
            const action = (cathegoryIndex === -1) ?
                deselectAllCathegories() :
                selectCathegory(cathegoryIndex);
            dispatch(action);
        }
    };
}

const ReduxCathegoryList = connect(mapStateToProps, mapDispatchesToProps)(CathegoryList);

export default ReduxCathegoryList;