import {
    CATHEGORIES_DESELECT,
    CATHEGORIES_SELECT,
    deselectAllCathegories,
    selectCathegory
} from './cathegoriesActions';

describe('cathegoriesActions', () => {
    describe('deselectAllCathegories method', () => {
        it('should return the appropriate object', () => {
            expect(deselectAllCathegories()).toEqual({
                type: CATHEGORIES_DESELECT
            });
        });
    });
    
    describe('selectCathegory method', () => {
        it('should return the appropriate object for input 1', () => {
            const cathegoryIndex = 1;
            expect(selectCathegory(1)).toEqual({
                type: CATHEGORIES_SELECT,
                cathegoryIndex
            });
        });
    });
});