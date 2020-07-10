import React from "react";
import { render } from "@testing-library/react";
import Pricing from '../components/Pricing';
describe("Pricing", () => {
  test("renders Pricing without crashing", async () => {
    const { container } = render(<Pricing />);
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Pricing
        </h2>
        <p>
          READY TO JOIN GREAT STATE CROSSFIT? WE’RE EXCITED TO HAVE YOU AS A MEMBER. WE HAVE AN ARRAY OF MEMBERSHIP OPTIONS AND PLANS TO SUIT YOUR SCHEDULE.
        </p>
      </div>
    `);
  });
});
