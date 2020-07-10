import React from 'react'
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom'
import {render} from '@testing-library/react'
import App from '../App'

const OLD_ENV = process.env

afterEach(() => {
  jest.clearAllMocks()
  jest.resetModules()
  process.env = {...OLD_ENV}
})

it('renders without crashing', () => {
  const storeFake = (state: any) => ({
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({...state}),
  })
  const store = storeFake({}) as any

  const {container} = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  )
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
              class="makeStyles-search-5"
            >
              <div
                class="makeStyles-searchIcon-6"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  />
                </svg>
              </div>
              <div
                class="MuiInputBase-root makeStyles-inputRoot-7"
              >
                <input
                  aria-label="search"
                  class="MuiInputBase-input makeStyles-inputInput-8"
                  placeholder="Search�"
                  type="text"
                  value=""
                />
              </div>
            </div>
            <div
              class="makeStyles-grow-1"
            />
            <div
              class="makeStyles-sectionDesktop-9"
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
            <div
              class="makeStyles-sectionMobile-10"
            >
              <button
                aria-controls="primary-search-account-menu-mobile"
                aria-haspopup="true"
                aria-label="show more"
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
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
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
            </div>
          </div>
        </header>
      </div>
      <div
        class="container"
      >
        <div
          class="fullscreen-bg"
        >
          <video
            autoplay=""
            class="fullscreen-bg__video"
            loop=""
          >
            <source
              src="MichaelPR.mp4"
              type="video/mp4"
            />
            <source
              src="MichaelPR.mp4"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <img
            alt="Great State"
            class="logo"
            src="/assets/img/greatstate.png"
          />
        </div>
      </div>
    </div>
  `)
})

it('Under construction scenario', () => {
  // Given
  process.env.REACT_APP_CONSTRUCTION = 'true' // mock variable for scenario 1

  // When
  const storeFake = (state: any) => ({
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({...state}),
  })
  const store = storeFake({}) as any

  const {queryByText} = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  )
  const underConstructionText = queryByText('Under Construction')

  // Then
  expect(underConstructionText).toBeInTheDocument()
})

it('Not under construction', () => {
  // Given
  process.env.REACT_APP_CONSTRUCTION = 'false' // mock variable for scenario 2

  // When
  const storeFake = (state: any) => ({
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({...state}),
  })
  const store = storeFake({}) as any

  const {queryByText} = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  )
  const underConstructionText = queryByText('Under Construction')

  // Then
  expect(underConstructionText).not.toBeInTheDocument()
})
