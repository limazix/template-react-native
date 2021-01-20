import appSlice, { APP_STATE, changeAppState } from './app.slice';

describe('App Slice', () => {
    it('should have the initial appState as APP_STATE.NOT_READY', () => {
        const result = appSlice(undefined, {});
        expect(result).toEqual({ appState: APP_STATE.NOT_READY });
    });
    describe('given the app redux store is ready', () => {
        it('should handle app state changes from APP_STATE.NOT_READY to APP_STATE.READY', () => {
            const startState = { appState: APP_STATE.NOT_READY };
            const endState = { appState: APP_STATE.READY };
            const actionMock = {
                type: changeAppState.type,
                payload: {
                    appState: APP_STATE.READY,
                },
            };

            const actionResult = appSlice(startState, actionMock);
            expect(actionResult).toEqual(endState);
        });
        it('should handle app state changes from APP_STATE.READY to APP_STATE.NOT_READY', () => {
            const startState = { appState: APP_STATE.READY };
            const endState = { appState: APP_STATE.NOT_READY };
            const actionMock = {
                type: changeAppState.type,
                payload: {
                    appState: APP_STATE.NOT_READY,
                },
            };

            const actionResult = appSlice(startState, actionMock);
            expect(actionResult).toEqual(endState);
        });
    });
});
