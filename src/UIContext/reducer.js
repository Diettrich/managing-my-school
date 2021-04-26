export const ActionTypes = {
    OPEN_DRAWER: 'OPEN_DRAWER',
    CLOSE_DRAWER: 'CLOSE_DRAWER',
    CHECK_TABLE_ITEM: 'CHECK_TABLE_ITEM'
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_DRAWER:
            return { ...state, isDrawerOpen: true };
        case ActionTypes.CLOSE_DRAWER:
            return { ...state, isDrawerOpen: false };
        case ActionTypes.CHECK_TABLE_ITEM:
            const index = state.feeDrawerTableContent.findIndex((element, index) => { return index === action.payload });
            console.log(state.feeDrawerTableContent[index]);
            state.feeDrawerTableContent[index].select = !state.feeDrawerTableContent[index].select;
            return { ...state };
        default:
            return state
    }
}