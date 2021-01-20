// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const render = (ui, initialState, reducer, renderOptions) => {
    const Wrapper = ({ children }) => {
        const store = createStore(reducer, initialState);
        return <Provider store={store}>{children}</Provider>;
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react-native';
// override render method
export { render };
