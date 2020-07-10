import React from "react";
import { render } from "@testing-library/react";
import Resources from '../components/Resources';
describe("Resources", () => {
  test("renders Resources without crashing", async () => {
    const { container } = render(<Resources />);
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Resources
        </h2>
        <ul>
          <li>
            FAQ
          </li>
          <li>
            Membership Policies
          </li>
          <li>
            News & Updates
          </li>
        </ul>
      </div>
    `);
  });
});
