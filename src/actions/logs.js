import uuid from 'uuid';
import $ from "jquery";

export const loadLogs = () => dispatch => {
    $.get("https://mighty-river-71361.herokuapp.com/logs", ({ logs }) => {
        logs.forEach(log => {
            dispatch(addLogAction(log));
        })
    });
}

export const addLog = ({
    text = '',
    col = '1',
    act = "add"
}) => dispatch => {
    $.ajax("http://mighty-river-71361.herokuapp.com/logs", {
        type: 'post',
        data: JSON.stringify({
            act,
            text,
            col
        }),
        dataType: 'json',
        contentType: 'application/json'
    }, () => { });

    dispatch(addLogAction({act, text, col}));

    
}

const addLogAction = ({act, text, col}) => (dispatch, getState) => {
    getState().logs.length >= 10 && dispatch(
        deleteLog(getState().logs[0].id)
    );
    dispatch(addLogPureAction({
        type: "ADD_LOG",
        text,
        col,
        act,
        id: uuid()
    }));
}

const addLogPureAction = ({act, text, col}) => {
    return {
        type: "ADD_LOG",
        text,
        col,
        act,
        id: uuid()
    }
}


export const deleteLog = (id = '') => {
    return {
        type: "DELETE_LOG",
        id
    }
}