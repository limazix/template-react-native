import { createSlice } from '@reduxjs/toolkit';

/**
 * @name APP_STATE
 * @description It has the possible app states
 * @property {string} READY it represents the state when the app is READ to interact with the user
 * @property {string} NOT_READY it represents the state when the app is NOT READY to interact with the user
 */
export const APP_STATE = {
    READY: 'app-ready',
    NOT_READY: 'app-not-ready',
};

/**
 * @name appSlice
 * @description It defines the redux store data and behaviors for the app
 */
const appSlice = createSlice({
    name: 'app',
    initialState: { appState: APP_STATE.NOT_READY },
    reducers: {
        /**
         * @name changeAppState
         * @description Reducer used to handle the app loading state change
         * @param {object} state
         * @param {object} state.appState
         * @param {object} action
         * @param {object} action.payload
         * @param {APP_STATE} action.payload.appState
         */
        changeAppState(state, action) {
            const { appState } = action.payload;
            state.appState = appState;
        },
    },
});

export const { changeAppState } = appSlice.actions;
export default appSlice.reducer;
