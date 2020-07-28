import React from "react"
import { render } from "@testing-library/react"
import * as gatsby from "gatsby"
import Contact, { PureContact } from "../pages/contact"
describe("Contact", () => {
  test("renders Contact without crashing", async () => {
    const useStaticQuery = jest.spyOn(gatsby, "useStaticQuery")
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: "Kevin",
          description: "My description",
          title: "My Title",
        },
      },
    }))
    const { container } = render(<Contact />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-grow-1"
        >
          <header
            class="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary MuiPaper-elevation4"
          >
            <div
              class="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
            >
              <button
                aria-label="open drawer"
                class="MuiButtonBase-root MuiIconButton-root makeStyles-menuButton-2 MuiIconButton-colorInherit MuiIconButton-edgeStart"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiIconButton-label"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                    />
                  </svg>
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
              <a
                class=""
                href="/"
                title="Home"
              >
                <li
                  aria-disabled="false"
                  class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                  role="menuitem"
                  tabindex="-1"
                >
                  <h6
                    class="MuiTypography-root makeStyles-nav-3 MuiTypography-h6 MuiTypography-noWrap"
                  >
                    Great State
                  </h6>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </li>
              </a>
              <div
                class="makeStyles-grow-1"
              />
              <div
                class="makeStyles-sectionDesktop-7"
              >
                <a
                  class=""
                  href="/gettingstarted"
                  title="Getting Started"
                >
                  <li
                    aria-disabled="false"
                    class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                    role="menuitem"
                    tabindex="-1"
                  >
                    <h6
                      class="MuiTypography-root makeStyles-nav-3 MuiTypography-h6 MuiTypography-noWrap"
                    >
                      Getting Started
                    </h6>
                    <span
                      class="MuiTouchRipple-root"
                    />
                  </li>
                </a>
                <a
                  class=""
                  href="/weights"
                  title="Weights"
                >
                  <li
                    aria-disabled="false"
                    class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                    role="menuitem"
                    tabindex="-1"
                  >
                    <h6
                      class="MuiTypography-root makeStyles-nav-3 MuiTypography-h6 MuiTypography-noWrap"
                    >
                      Weights
                    </h6>
                    <span
                      class="MuiTouchRipple-root"
                    />
                  </li>
                </a>
                <a
                  class=""
                  href="/michael"
                  title="Michael"
                >
                  <li
                    aria-disabled="false"
                    class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                    role="menuitem"
                    tabindex="-1"
                  >
                    <h6
                      class="MuiTypography-root makeStyles-nav-3 MuiTypography-h6 MuiTypography-noWrap"
                    >
                      Michael
                    </h6>
                    <span
                      class="MuiTouchRipple-root"
                    />
                  </li>
                </a>
                <a
                  class=""
                  href="/dropin"
                  title="Drop-Ins"
                >
                  <li
                    aria-disabled="false"
                    class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                    role="menuitem"
                    tabindex="-1"
                  >
                    <h6
                      class="MuiTypography-root makeStyles-nav-3 MuiTypography-h6 MuiTypography-noWrap"
                    >
                      Drop-Ins
                    </h6>
                    <span
                      class="MuiTouchRipple-root"
                    />
                  </li>
                </a>
                <a
                  class=""
                  href="/wod"
                  title="Workout of the day"
                >
                  <li
                    aria-disabled="false"
                    class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                    role="menuitem"
                    tabindex="-1"
                  >
                    <h6
                      class="MuiTypography-root makeStyles-nav-3 MuiTypography-h6 MuiTypography-noWrap"
                    >
                      WOD
                    </h6>
                    <span
                      class="MuiTouchRipple-root"
                    />
                  </li>
                </a>
                <a
                  class=""
                  href="/contact"
                  title="Contact Us"
                >
                  <li
                    aria-disabled="false"
                    class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                    role="menuitem"
                    tabindex="-1"
                  >
                    <h6
                      class="MuiTypography-root makeStyles-nav-3 MuiTypography-h6 MuiTypography-noWrap"
                    >
                      Contact Us
                    </h6>
                    <span
                      class="MuiTouchRipple-root"
                    />
                  </li>
                </a>
                <button
                  aria-controls="about-menu"
                  aria-haspopup="true"
                  class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                  tabindex="0"
                  title="Covid-19"
                  type="button"
                >
                  <span
                    class="MuiButton-label"
                  >
                    <h6
                      class="MuiTypography-root makeStyles-nav-3 MuiTypography-h6 MuiTypography-noWrap"
                    >
                      Covid-19
                    </h6>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
                <button
                  aria-controls="about-menu"
                  aria-haspopup="true"
                  class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                  tabindex="0"
                  title="About Us"
                  type="button"
                >
                  <span
                    class="MuiButton-label"
                  >
                    <h6
                      class="MuiTypography-root makeStyles-nav-3 MuiTypography-h6 MuiTypography-noWrap"
                    >
                      About Great State
                    </h6>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
                <button
                  aria-label="show 17 new notifications"
                  class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                  tabindex="0"
                  type="button"
                >
                  <span
                    class="MuiIconButton-label"
                  >
                    <span
                      class="MuiBadge-root"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                        />
                      </svg>
                      <span
                        class="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary"
                      >
                        17
                      </span>
                    </span>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
                <a
                  class=""
                  href="/login"
                  title="Login"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root makeStyles-nav-3 MuiSvgIcon-fontSizeLarge"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </header>
        </div>
        <div
          class="container"
        >
          <div
            class="MuiBox-root MuiBox-root-13"
          >
            <div
              class="MuiPaper-root MuiCard-root makeStyles-root-10 MuiPaper-elevation1 MuiPaper-rounded"
            >
              <div
                class="MuiCardContent-root"
              >
                <div
                  class="MuiBox-root MuiBox-root-14"
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
                  class="MuiTypography-root makeStyles-colorTextPrimary-11 MuiTypography-h5 MuiTypography-colorTextPrimary MuiTypography-alignCenter"
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
              class="MuiPaper-root MuiCard-root makeStyles-root-10 MuiPaper-elevation1 MuiPaper-rounded"
            >
              <div
                class="MuiCardContent-root"
              >
                <div
                  class="MuiBox-root MuiBox-root-15"
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
              class="MuiPaper-root MuiCard-root makeStyles-root-10 MuiPaper-elevation1 MuiPaper-rounded"
            >
              <div
                class="MuiCardContent-root"
              >
                <div
                  class="MuiBox-root MuiBox-root-16"
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
            src="https://maps.googleapis.com/maps/api/streetview?location=43.035419,-89.380748&size=456x456&key=AIzaSyCnOdoYKEm2qYt82jJKH8clFc9gcuvEmPY"
          />
        </div>
      </div>
    `)
  })
  test("renders Contact without crashing", async () => {
    const { container } = render(<PureContact />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiBox-root MuiBox-root-21"
        >
          <div
            class="MuiPaper-root MuiCard-root makeStyles-root-18 MuiPaper-elevation1 MuiPaper-rounded"
          >
            <div
              class="MuiCardContent-root"
            >
              <div
                class="MuiBox-root MuiBox-root-22"
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
                class="MuiTypography-root makeStyles-colorTextPrimary-19 MuiTypography-h5 MuiTypography-colorTextPrimary MuiTypography-alignCenter"
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
            class="MuiPaper-root MuiCard-root makeStyles-root-18 MuiPaper-elevation1 MuiPaper-rounded"
          >
            <div
              class="MuiCardContent-root"
            >
              <div
                class="MuiBox-root MuiBox-root-23"
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
            class="MuiPaper-root MuiCard-root makeStyles-root-18 MuiPaper-elevation1 MuiPaper-rounded"
          >
            <div
              class="MuiCardContent-root"
            >
              <div
                class="MuiBox-root MuiBox-root-24"
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
          src="https://maps.googleapis.com/maps/api/streetview?location=43.035419,-89.380748&size=456x456&key=AIzaSyCnOdoYKEm2qYt82jJKH8clFc9gcuvEmPY"
        />
      </div>
    `)
  })
})
