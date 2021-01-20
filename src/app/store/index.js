import { combineReducers, configureStore } from '@reduxjs/toolkit';

/**
 * @memberof App
 * @name rootReducer
 * @description This is the final reducer, the combination of all reducers
 */
const rootReducer = combineReducers({});

/**
 * @memberof App
 * @name store
 * @description This is the redux store instance
 */
const store = configureStore({
    reducer: rootReducer,
});

export default store;
