export const CATHEGORIES_DESELECT = 'cathegories:deselect';
export const CATHEGORIES_SELECT = 'cathegories:select';

export function deselectAllCathegories() {
    return {
        type: CATHEGORIES_DESELECT
    };
}

export function selectCathegory(cathegoryIndex) {
    return {
        type: CATHEGORIES_SELECT,
        cathegoryIndex
    };
}
