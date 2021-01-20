import appSlice, { APP_STATE } from './app.slice';

describe('App Slice', () => {
    it('should have the initial appState as APP_STATE.NOT_READY', () => {
        const result = appSlice(undefined, {});
        expect(result).toEqual({ appState: APP_STATE.NOT_READY });
    });
});
