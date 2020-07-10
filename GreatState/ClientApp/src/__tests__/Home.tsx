import React from "react";
import { Provider } from 'react-redux';
import { render } from "@testing-library/react";
import Home from '../components/Home';
describe('Home', () => {
    test("renders Programs without crashing", async () => {
        const storeFake = (state: any) => ({
            default: () => { },
            subscribe: () => { },
            dispatch: () => { },
            getState: () => ({ ...state })
        });
        const store = storeFake({}) as any;
        const { getByAltText } = render(<Provider store={store}>
                                            <Home />
                                        </Provider>);
        // render should show the title
        expect(getByAltText(/Great State/)).toBeInTheDocument();
    });
});