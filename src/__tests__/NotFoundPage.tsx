import React from "react";
import { render } from "@testing-library/react";
import { PureNotFoundPage } from '../pages/404';
describe('NotFoundPage', () => {
    test("renders NotFoundPage without crashing", async () => {
        const { getByText } = render(<PureNotFoundPage />);
        // render should show the title
        // screen.debug();
        expect(getByText(/Not Found/i)).toBeInTheDocument();
    });
});