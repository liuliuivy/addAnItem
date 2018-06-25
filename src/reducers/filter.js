function filter(state = '', action) {
    switch (action.type) {
        case "SET_FILTER": {
            const { text } = action;
            return text;
        }
        default:
            return state;
    }
}

export default filter;