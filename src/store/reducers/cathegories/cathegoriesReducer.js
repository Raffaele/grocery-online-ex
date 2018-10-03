import { CATHEGORIES_SELECT, CATHEGORIES_DESELECT } from '../../actions/cathegories/cathegoriesActions';

function cathegoriesReducer(state = [], action) {
    switch(action.type) {
        case CATHEGORIES_DESELECT:
            return state.map(cathegory => ({...cathegory, isSelected: false}));
        case CATHEGORIES_SELECT:
            return state.map((cathegory, index) => ({
                ...cathegory,
                isSelected: index === action.cathegoryIndex
            }));
        default:
            return state;
    }
};

export default cathegoriesReducer;
