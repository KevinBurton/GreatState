import React from "react";
import { Provider } from "react-redux";
import {
  render,
  screen,
  waitFor,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import * as gatsby from "gatsby";
import { FixedObject } from "gatsby-image";
import IndexPage, {
  PureIndexPage,
  handleUnderConstructionNotification,
  ItemAttribute,
} from "../pages/index";
import Layout from "../components/layout";
const OLD_ENV = process.env;

describe("App", () => {
  beforeEach(() => {
    jest.mock("gatsby");
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  test("renders without crashing", () => {
    // Given
    process.env.REACT_APP_CONSTRUCTION = "false";
    const notification = jest.fn();

    const storeFake = (state: any) => ({
      default: () => {},
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({ ...state }),
    });
    const store = storeFake({}) as any;
    const fixed: FixedObject = {
      width: 0,
      height: 0,
      src: "",
      srcSet: "",
    };
    const items: ItemAttribute[] = [
      {
        Name: "Lose Weight",
        Caption: "Lose Weight",
        contentPosition: "left",
        Items: [
          {
            Name: "Evolution Name",
            Image: "Evolution Image",
          },
          {
            Name: "Did you do it?",
            Image: "Exercise Nme",
          },
        ],
      },
      {
        Name: "Conditioning",
        Caption: "Conditioning",
        contentPosition: "middle",
        Items: [
          {
            Name: "Bike Name",
            Image: "Bike Image",
          },
          {
            Name: "Sharp Name",
            Image: "Sharp Image",
          },
        ],
      },
      {
        Name: "Strength",
        Caption: "Lift weights",
        contentPosition: "right",
        Items: [
          {
            Name: "Ready Name",
            Image: "Ready Image",
          },
          {
            Name: "Set Name",
            Image: "Set Image",
          },
        ],
      },
    ];

    const { container } = render(
      <Provider store={store}>
        <Layout>
          <PureIndexPage
            handleUnderConstructionNotification={notification}
            items={items}
            logo={fixed}
          />
        </Layout>
      </Provider>
    );
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
          <div
            style="margin-top: 50px; color: rgb(73, 73, 73);"
          >
            <div
              class="Carousel-root-10 Example"
            >
              <div
                class="CarouselItem"
              >
                <div
                  style="opacity: 1; webkit-transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
                >
                  <div
                    class="MuiPaper-root MuiCard-root Banner MuiPaper-elevation8 MuiPaper-rounded"
                  >
                    <div
                      class="MuiGrid-root BannerGrid MuiGrid-container"
                    >
                      <div
                        class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4"
                      >
                        <div
                          class="MuiCardContent-root Content"
                        >
                          <p
                            class="MuiTypography-root Title MuiTypography-body1"
                          >
                            Lose Weight
                          </p>
                          <p
                            class="MuiTypography-root Caption MuiTypography-body1"
                          >
                            Lose Weight
                          </p>
                          <button
                            class="MuiButtonBase-root MuiButton-root MuiButton-outlined ViewButton"
                            tabindex="0"
                            type="button"
                          >
                            <span
                              class="MuiButton-label"
                            >
                              Start Now
                            </span>
                            <span
                              class="MuiTouchRipple-root"
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4"
                      >
                        <div
                          class="MuiCardMedia-root Media"
                          title="Evolution Name"
                        >
                          <p
                            class="MuiTypography-root MediaCaption MuiTypography-body1"
                          >
                            Evolution Name
                          </p>
                        </div>
                      </div>
                      <div
                        class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4"
                      >
                        <div
                          class="MuiCardMedia-root Media"
                          title="Did you do it?"
                        >
                          <p
                            class="MuiTypography-root MediaCaption MuiTypography-body1"
                          >
                            Did you do it?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="Carousel-buttonWrapper-14 Carousel-fullHeightHoverWrapper-15 Carousel-next-20"
              >
                <button
                  aria-label="Next"
                  class="MuiButtonBase-root MuiIconButton-root Carousel-button-16 Carousel-buttonHidden-19 Carousel-fullHeightHoverButton-17 Carousel-next-20"
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
                        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                      />
                    </svg>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>
              <div
                class="Carousel-buttonWrapper-14 Carousel-fullHeightHoverWrapper-15 Carousel-prev-21"
              >
                <button
                  aria-label="Previous"
                  class="MuiButtonBase-root MuiIconButton-root Carousel-button-16 Carousel-buttonHidden-19 Carousel-fullHeightHoverButton-17  Carousel-prev-21"
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
                        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                      />
                    </svg>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>
              <div
                class="Carousel-indicators-11"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root Carousel-indicator-12 Carousel-active-13 undefined"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                  />
                </svg>
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root Carousel-indicator-12 undefined"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                  />
                </svg>
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root Carousel-indicator-12 undefined"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  test("Under construction", async () => {
    // Given
    const useStaticQuery = jest.spyOn(gatsby, "useStaticQuery");
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: "Kevin",
          description: "My description",
          title: "My Title",
        },
      },
      logo: {
        childImageSharp: {
          fixed: {
            base64: "base64",
            width: 720,
            height: 720,
            src: "src",
            srcSet: "srcSet",
          },
        },
      },
      evolution: {
        childImageSharp: {
          fixed: {
            base64: "base64",
            width: 720,
            height: 720,
            src: "src",
            srcSet: "srcSet",
          },
        },
      },
      exercise: {
        childImageSharp: {
          fixed: {
            base64: "base64",
            width: 720,
            height: 720,
            src: "src",
            srcSet: "srcSet",
          },
        },
      },
      bike: {
        childImageSharp: {
          fixed: {
            base64: "base64",
            width: 720,
            height: 720,
            src: "src",
            srcSet: "srcSet",
          },
        },
      },
      sharp: {
        childImageSharp: {
          fixed: {
            base64: "base64",
            width: 720,
            height: 720,
            src: "src",
            srcSet: "srcSet",
          },
        },
      },
      load: {
        childImageSharp: {
          fixed: {
            base64: "base64",
            width: 720,
            height: 720,
            src: "src",
            srcSet: "srcSet",
          },
        },
      },
      start: {
        childImageSharp: {
          fixed: {
            base64: "base64",
            width: 720,
            height: 720,
            src: "src",
            srcSet: "srcSet",
          },
        },
      },
    }));
    process.env.REACT_APP_CONSTRUCTION = "true"; // mock variable for scenario 1
    const notification = jest.fn(handleUnderConstructionNotification);

    // When
    const { container, queryByText, getByRole } = render(<IndexPage />);
    await waitFor(() =>
      expect(screen.queryByText(/Under Construction/)).toBeInTheDocument()
    );
    const underConstructionText = queryByText("Under Construction");
    // Then
    expect(underConstructionText).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-grow-23"
        >
          <header
            class="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary MuiPaper-elevation4"
          >
            <div
              class="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
            >
              <button
                aria-label="open drawer"
                class="MuiButtonBase-root MuiIconButton-root makeStyles-menuButton-24 MuiIconButton-colorInherit MuiIconButton-edgeStart"
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
                    class="MuiTypography-root makeStyles-nav-25 MuiTypography-h6 MuiTypography-noWrap"
                  >
                    Great State
                  </h6>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </li>
              </a>
              <div
                class="makeStyles-grow-23"
              />
              <div
                class="makeStyles-sectionDesktop-29"
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
                      class="MuiTypography-root makeStyles-nav-25 MuiTypography-h6 MuiTypography-noWrap"
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
                      class="MuiTypography-root makeStyles-nav-25 MuiTypography-h6 MuiTypography-noWrap"
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
                      class="MuiTypography-root makeStyles-nav-25 MuiTypography-h6 MuiTypography-noWrap"
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
                      class="MuiTypography-root makeStyles-nav-25 MuiTypography-h6 MuiTypography-noWrap"
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
                      class="MuiTypography-root makeStyles-nav-25 MuiTypography-h6 MuiTypography-noWrap"
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
                      class="MuiTypography-root makeStyles-nav-25 MuiTypography-h6 MuiTypography-noWrap"
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
                      class="MuiTypography-root makeStyles-nav-25 MuiTypography-h6 MuiTypography-noWrap"
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
                      class="MuiTypography-root makeStyles-nav-25 MuiTypography-h6 MuiTypography-noWrap"
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
                    class="MuiSvgIcon-root makeStyles-nav-25 MuiSvgIcon-fontSizeLarge"
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
            Under Construction
          </h2>
          <br />
          <div
            class="MuiFormControl-root makeStyles-root-31"
            data-testid="notification-form"
          >
            <label
              class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
              data-shrink="false"
              data-testid="email-label"
              for="email-notification"
            >
              Enter Email
            </label>
            <div
              class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd"
            >
              <input
                aria-invalid="false"
                class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd"
                data-testid="email-notification"
                id="email-notification"
                type="text"
                value=""
              />
              <div
                class="MuiInputAdornment-root MuiInputAdornment-positionEnd"
              >
                <button
                  aria-label="submit email"
                  class="MuiButtonBase-root MuiIconButton-root"
                  data-testid="notifications-form-submit"
                  tabindex="0"
                  type="button"
                >
                  <span
                    class="MuiIconButton-label"
                  >
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root makeStyles-iconColor-33"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                      />
                    </svg>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
    const submitButton = getByRole("button", { name: /submit email/i });
    const emailInput = getByRole("textbox", { name: /enter email/i });
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.submit(submitButton);
    //expect(notification).toHaveBeenCalled();
  });
  test("Not under construction", () => {
    // Given
    process.env.REACT_APP_CONSTRUCTION = "false"; // mock variable for scenario 2
    const notification = jest.fn();

    // When
    const storeFake = (state: any) => ({
      default: () => {},
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({ ...state }),
    });
    const store = storeFake({}) as any;
    const fixed: FixedObject = {
      width: 0,
      height: 0,
      src: "",
      srcSet: "",
    };
    const items: ItemAttribute[] = [
      {
        Name: "Lose Weight",
        Caption: "Lose Weight",
        contentPosition: "left",
        Items: [
          {
            Name: "Evolution Name",
            Image: "Evolution Image",
          },
          {
            Name: "Did you do it?",
            Image: "Exercise Nme",
          },
        ],
      },
      {
        Name: "Conditioning",
        Caption: "Conditioning",
        contentPosition: "middle",
        Items: [
          {
            Name: "Bike Name",
            Image: "Bike Image",
          },
          {
            Name: "Sharp Name",
            Image: "Sharp Image",
          },
        ],
      },
      {
        Name: "Strength",
        Caption: "Lift weights",
        contentPosition: "right",
        Items: [
          {
            Name: "Ready Name",
            Image: "Ready Image",
          },
          {
            Name: "Set Name",
            Image: "Set Image",
          },
        ],
      },
    ];
    const { queryByText } = render(
      <Provider store={store}>
        <Layout>
          <PureIndexPage
            handleUnderConstructionNotification={notification}
            logo={fixed}
            items={items}
          />
        </Layout>
      </Provider>
    );
    const underConstructionText = queryByText("Under Construction");

    // Then
    expect(underConstructionText).not.toBeInTheDocument();
  });
});
