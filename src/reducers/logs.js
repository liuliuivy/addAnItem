function logs(state = [], action) {
    switch (action.type) {
        case "ADD_LOG": {
            const { text, col, id, act = "add" } = action;
            return [
                ...state,
                { text, col, id, type: act }
            ];
        }
        case "DELETE_LOG": {
            const { id } = action;
            return state.filter( i => i.id !== id);
        }
        default:
            return state;
    }
}

export default logs;