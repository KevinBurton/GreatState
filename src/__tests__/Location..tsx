import React from "react";

import { render } from "@testing-library/react";
import Location from '../components/Location';
describe('Location', () => {
    test("renders Location without crashing", async () => {
      const center = {
            lat: 43.035419,
            lng: -89.380748
      };
      process.env.REACT_APP_GOOGLE_MAPS_KEY = 'AIzaSyCnOdoYKEm2qYt82jJKH8clFc9gcuvEmPY';
      const { container, getByText, getByTestId } = render(<Location center={center} />);
      // render should show the title
      const loading = getByText('Loading...');
      expect(loading).toBeInTheDocument(); 
      // element is removed
      //waitForElementToBeRemoved(loading).then(() => {
      //  console.log('Element no longer in DOM');
      //  screen.debug();
      //});
      //expect(container).toMatchInlineSnapshot();
    });
});