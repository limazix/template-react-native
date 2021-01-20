import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appSlice from './app.slice';

/**
 * @memberof App
 * @name rootReducer
 * @description This is the final reducer, the combination of all reducers
 */
export const rootReducer = combineReducers({
    app: appSlice,
});

/**
 * @memberof App
 * @name store
 * @description This is the redux store instance
 */
const store = configureStore({
    reducer: rootReducer,
});

export default store;
