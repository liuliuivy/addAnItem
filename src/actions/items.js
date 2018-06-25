import uuid from 'uuid';
import $ from "jquery";

import { addLog } from "./logs";

export const loadItems = () => dispatch => {
    $.get("https://mighty-river-71361.herokuapp.com/items", ({ items }) => {
        items.forEach(item => {
            dispatch(addItemAction(item));
        })
    });
}

export const addItem = (text = '', col = '1') => dispatch => {
    const id = uuid();

    $.ajax("http://mighty-river-71361.herokuapp.com/items", {
        type: 'post',
        data: JSON.stringify({
            id,
            text,
            col
        }),
        dataType: 'json',
        contentType: 'application/json'
    }, () => { });

    dispatch(addItemAction({
        id,
        text,
        col
    }));

    

    dispatch(addLog({
        text,
        col
    }));
}

const addItemAction = ({ text = '', col = '1', id = uuid() }) => {
    return {
        type: "ADD_ITEM",
        text,
        col,
        id
    }
}

export const deleteItem = (id = '') => (dispatch, getState) => {
    $.ajax({
        url: `http://mighty-river-71361.herokuapp.com/items/${id}`,
        type: "DELETE"
    });

    const { text, col } = getState().items.find(l => l.id === id);
    dispatch(addLog({ text, col, act: "delete" }));
    dispatch(deleteItemAction(id));
}

const deleteItemAction = (id = '') => {
    return {
        type: "DELETE_ITEM",
        id
    }
}