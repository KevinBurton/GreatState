import React from "react";
import ReactDOMServer from 'react-dom/server';
import WOD from '../components/WOD';
describe("WOD", () => {
  test("renders WOD without crashing", async () => {
      const renderString = ReactDOMServer.renderToString(<WOD />);
      //console.log(renderString);
  });
});
