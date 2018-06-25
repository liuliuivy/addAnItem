export const setFilter = (text = '') => {
    return { 
        type: "SET_FILTER", 
        text
    }
}