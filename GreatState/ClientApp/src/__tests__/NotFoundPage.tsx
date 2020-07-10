import React from "react";
import { render } from "@testing-library/react";
import NotFoundPage from '../components/NotFoundPage';
describe('NotFoundPage', () => {
    test("renders NotFoundPage without crashing", async () => {
        const { getByText } = render(<NotFoundPage />);
        // render should show the title
        // screen.debug();
        expect(getByText(/Not Found/)).toBeInTheDocument();
    });
});