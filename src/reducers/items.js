function items(state = [], action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const { text, col, id } = action;
            return [
                ...state,
                { text, col, id }
            ];
        }
        case "DELETE_ITEM": {
            const { id } = action;
            return state.filter( i => i.id !== id);
        }
        default:
            return state;
    }
}

export default items;