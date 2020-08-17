import React from "react";
import { render } from "@testing-library/react";
import Contact from '../components/Contact';
describe("Contact", () => {
  test("renders Contact without crashing", async () => {
    const { container } = render(<Contact />);
    //screen.debug();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-4"
        >
          <div
            class="MuiPaper-root MuiCard-root makeStyles-root-1 MuiPaper-elevation1 MuiPaper-rounded"
          >
            <div
              class="MuiCardContent-root"
            >
              <div
                class="MuiBox-root MuiBox-root-5"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root"
                  color="blue"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                  />
                  <path
                    d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                  />
                </svg>
              </div>
              <h2
                class="MuiTypography-root makeStyles-colorTextPrimary-2 MuiTypography-h5 MuiTypography-colorTextPrimary MuiTypography-alignCenter"
              >
                Hours of Operation
              </h2>
              <p
                class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-alignCenter"
              >
                Mon-Fri: 5:30am-7pm
              </p>
              <p
                class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-alignCenter"
              >
                Saturday: 12pm-3pm
              </p>
              <p
                class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-alignCenter"
              >
                (Doors are locked when no classes are scheduled.)
              </p>
            </div>
          </div>
          <div
            class="MuiPaper-root MuiCard-root makeStyles-root-1 MuiPaper-elevation1 MuiPaper-rounded"
          >
            <div
              class="MuiCardContent-root"
            >
              <div
                class="MuiBox-root MuiBox-root-6"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root"
                  color="blue"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                  />
                </svg>
              </div>
              <p
                class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-alignCenter"
              >
                (608) 338-8016
              </p>
            </div>
          </div>
          <div
            class="MuiPaper-root MuiCard-root makeStyles-root-1 MuiPaper-elevation1 MuiPaper-rounded"
          >
            <div
              class="MuiCardContent-root"
            >
              <div
                class="MuiBox-root MuiBox-root-7"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root"
                  color="blue"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
              </div>
              <p
                class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-alignCenter"
              >
                2500 Rimrock Road
              </p>
              <p
                class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-alignCenter"
              >
                Suite 104
              </p>
              <p
                class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-alignCenter"
              >
                Madison, WI 53713
              </p>
            </div>
          </div>
        </div>
        <div />
        <div>
          Loading...
        </div>
        <img
          alt="Gym"
          src="https://maps.googleapis.com/maps/api/streetview?location=43.035419,-89.380748&size=456x456&key=<api key>"
        />
      </div>
    `);
  });
});
