import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import items from './items';
import filter from './filter';
import logs from './logs';

const marvelousApp = combineReducers({
    items,
    filter,
    logs,
    form
})

export default marvelousApp;