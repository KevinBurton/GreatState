import React from "react";
import { render } from "@testing-library/react";
import * as gatsby from "gatsby";
import Schedule, { PureSchedule } from "../pages/schedule";
describe("Schedule", () => {
  test("renders Schedule without crashing", async () => {
    const { container } = render(<PureSchedule />);
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          CLASS SCHEDULE
        </h2>
        <p>
          We ask every new athlete (including DROP-INs!) to contact us before coming to their first class. (To avoid having trainers teaching empty classes, we have them come in only when we know members will be there. So, to avoid coming to a locked up box, RESERVE your class or CALL us the day before you intend to come in!)
        </p>
        <h2>
          NEW TO CROSSFIT?
        </h2>
        <p>
          Contact us to schedule your first one-on-one Foundations class.
        </p>
        <div
          class="container"
        >
          <img
            alt="Classes"
            src="assets/img/classes.jpg"
          />
        </div>
        <p
          style="text-align: center;"
        >
          <a
            href="https://app.wodify.com/WodifyAdminTheme/Login.aspx"
            rel="noopener noreferrer"
            target="_blank"
          >
            <br />
            <img
              alt=""
              class="wp-image-477 aligncenter"
              height="93"
              sizes="(max-width: 296px) 100vw, 296px"
              src="https://secureservercdn.net/198.71.233.104/654.510.myftpupload.com/wp-content/uploads/2017/07/image001.jpg"
              srcset="https://secureservercdn.net/198.71.233.104/654.510.myftpupload.com/wp-content/uploads/2017/07/image001.jpg 385w, https://secureservercdn.net/198.71.233.104/654.510.myftpupload.com/wp-content/uploads/2017/07/image001-300x94.jpg 300w"
              width="296"
            />
          </a>
        </p>
        <p
          style="text-align: center;"
        >
          (If you have Wodify , you must be logged out or logged into your account linked to Great State CrossFit to see our box’s class schedule below.)
        </p>
        <p
          style="text-align: center;"
        >
          Check out our 
          <a
            href="https://greatstatecrossfit.com/pricing/"
          >
            Pricing
          </a>
           page to purchase a membership!
        </p>
        <div>
          <div>
            <iframe
              height="800"
              src="https://app.wodify.com/Schedule/PublicCalendarListView.aspx?tenant=5463"
              title="Schedule"
              width="800"
            />
          </div>
        </div>
      </div>
    `);
  });
  test("renders Resources without crashing", async () => {
    const useStaticQuery = jest.spyOn(gatsby, "useStaticQuery");
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: "Kevin",
          description: "My description",
          title: "My Title",
        },
      },
    }));
    const { container } = render(<Schedule />);
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
                href="/"
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
                  href="/gettingstarted"
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
                  href="/weights"
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
                  href="/michael"
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
                  href="/dropin"
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
                  href="/wod"
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
                  href="/contact"
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
                  href="/login"
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
          <h2>
            CLASS SCHEDULE
          </h2>
          <p>
            We ask every new athlete (including DROP-INs!) to contact us before coming to their first class. (To avoid having trainers teaching empty classes, we have them come in only when we know members will be there. So, to avoid coming to a locked up box, RESERVE your class or CALL us the day before you intend to come in!)
          </p>
          <h2>
            NEW TO CROSSFIT?
          </h2>
          <p>
            Contact us to schedule your first one-on-one Foundations class.
          </p>
          <div
            class="container"
          >
            <img
              alt="Classes"
              src="assets/img/classes.jpg"
            />
          </div>
          <p
            style="text-align: center;"
          >
            <a
              href="https://app.wodify.com/WodifyAdminTheme/Login.aspx"
              rel="noopener noreferrer"
              target="_blank"
            >
              <br />
              <img
                alt=""
                class="wp-image-477 aligncenter"
                height="93"
                sizes="(max-width: 296px) 100vw, 296px"
                src="https://secureservercdn.net/198.71.233.104/654.510.myftpupload.com/wp-content/uploads/2017/07/image001.jpg"
                srcset="https://secureservercdn.net/198.71.233.104/654.510.myftpupload.com/wp-content/uploads/2017/07/image001.jpg 385w, https://secureservercdn.net/198.71.233.104/654.510.myftpupload.com/wp-content/uploads/2017/07/image001-300x94.jpg 300w"
                width="296"
              />
            </a>
          </p>
          <p
            style="text-align: center;"
          >
            (If you have Wodify , you must be logged out or logged into your account linked to Great State CrossFit to see our box’s class schedule below.)
          </p>
          <p
            style="text-align: center;"
          >
            Check out our 
            <a
              href="https://greatstatecrossfit.com/pricing/"
            >
              Pricing
            </a>
             page to purchase a membership!
          </p>
          <div>
            <div>
              <iframe
                height="800"
                src="https://app.wodify.com/Schedule/PublicCalendarListView.aspx?tenant=5463"
                title="Schedule"
                width="800"
              />
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
