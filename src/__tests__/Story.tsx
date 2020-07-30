import React from "react";
import { render } from "@testing-library/react";
import * as gatsby from "gatsby";
import Story, { PureStory } from "../pages/story";
describe("Story", () => {
  test("renders PureStory without crashing", async () => {
    const { container } = render(
      <PureStory
        mike={{ width: 0, height: 0, src: "testing", srcSet: "testing" }}
      />
    );
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          OUR STORY
        </h2>
        <p>
          The idea to open Great State CrossFit began when Head Coach & Owner, Mike Burton, was working at several other CrossFit gyms in Southern California. An athlete since childhood, Mike sidetracked in his early twenties, and found CrossFit by accident while living in San Diego. After over 5 years training himself and others, he wanted to bring his experience working with some of the best coaches in the nation to Madison, WI. Finally, after years of planning, GSCF was born. Great State CrossFit’s philosophy is about more than just using strength and conditioning to improve your quality of life – nutrition and mobility are key factors that allow the S&C exercises to develop total wellness. We push every member to take advantage of our Yoga/Mobility classes as well as provide them nutritional guidance in order to achieve their wellness goals. For members who would like to take advantage of all the benefits of a high intensity workout without the more complex Olympic lifts, our one-of-a-kind Fit &Flexible program provides just that, and supplements the regimen with Mobility and Yoga classes. Being the newest CrossFit gym in town also has its benefits – we have the newest equipment, fresh & clean facilities, and a drive to be the best box in Dane County. We are right off the beltline and just down the street from the Alliant Energy Center and Downtown. We offer all our clients a Wodify account to ensure they can SEE their numbers improving. Best of all, we are a gym that LISTENS to our athletes – its important to us that they are getting the services they want while getting the results they seek. Feedback is not only welcomed, but encouraged. We hope to see you in the gym soon.
        </p>
        <div
          class=" gatsby-image-wrapper"
          style="position: relative; overflow: hidden; display: inline-block; width: 0px; height: 0px;"
        >
          <picture>
            <source
              srcset="testing"
            />
            <img
              alt="Mike"
              height="0"
              loading="lazy"
              src="testing"
              srcset="testing"
              style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
              width="0"
            />
          </picture>
          <noscript>
            &lt;picture&gt;&lt;source srcset="testing" /&gt;&lt;img loading="lazy" srcset="testing" src="testing" alt="Mike" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
          </noscript>
        </div>
        <h5>
          MIKE BURTON
        </h5>
        <h6>
          Head Coach and Owner
        </h6>
        <p>
          CF Level 1
        </p>
        <p>
          Dry Land Coach for MAC
        </p>
        <p>
          OPEX CCP, completing case studies
        </p>
        <p>
          Personal Trainer Certification
        </p>
      </div>
    `);
  });
  test("renders Story without crashing", async () => {
    const useStaticQuery = jest.spyOn(gatsby, "useStaticQuery");
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: "Kevin",
          description: "My description",
          title: "My Title",
        },
      },
      mike: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAY5sjNzLVZLAA//EABsQAAMAAgMAAAAAAAAAAAAAAAABAhETAxIg/9oACAEBAAEFAsFSjXk3QPlTO0+P/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAQMFAQAAAAAAAAAAAAAAAQARIRAgMTJBkf/aAAgBAQAGPwIMJ66ChvaYK0s//8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFBUZHx/9oACAEBAAE/IUBq9hiuRffQRadSWzLc8RrGlXxCDLn/2gAMAwEAAgADAAAAEG//AAH/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPxBj/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxDBX//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQWFRcZH/2gAIAQEAAT8QMkQytfRWiN8Fmmhq+YtMjVpL+1FNWJSPdx0327A89wwhB6hpHi7n/9k=",
            width: 10,
            height: 10,
            src:
              "/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/mike-burton.jpg",
            srcSet:
              "/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/mike-burton.jpg 1x",
          },
        },
      },
    }));
    const { container } = render(<Story />);
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
          <h2>
            OUR STORY
          </h2>
          <p>
            The idea to open Great State CrossFit began when Head Coach & Owner, Mike Burton, was working at several other CrossFit gyms in Southern California. An athlete since childhood, Mike sidetracked in his early twenties, and found CrossFit by accident while living in San Diego. After over 5 years training himself and others, he wanted to bring his experience working with some of the best coaches in the nation to Madison, WI. Finally, after years of planning, GSCF was born. Great State CrossFit’s philosophy is about more than just using strength and conditioning to improve your quality of life – nutrition and mobility are key factors that allow the S&C exercises to develop total wellness. We push every member to take advantage of our Yoga/Mobility classes as well as provide them nutritional guidance in order to achieve their wellness goals. For members who would like to take advantage of all the benefits of a high intensity workout without the more complex Olympic lifts, our one-of-a-kind Fit &Flexible program provides just that, and supplements the regimen with Mobility and Yoga classes. Being the newest CrossFit gym in town also has its benefits – we have the newest equipment, fresh & clean facilities, and a drive to be the best box in Dane County. We are right off the beltline and just down the street from the Alliant Energy Center and Downtown. We offer all our clients a Wodify account to ensure they can SEE their numbers improving. Best of all, we are a gym that LISTENS to our athletes – its important to us that they are getting the services they want while getting the results they seek. Feedback is not only welcomed, but encouraged. We hope to see you in the gym soon.
          </p>
          <div
            class=" gatsby-image-wrapper"
            style="position: relative; overflow: hidden; display: inline-block; width: 10px; height: 10px;"
          >
            <img
              alt=""
              aria-hidden="true"
              src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAY5sjNzLVZLAA//EABsQAAMAAgMAAAAAAAAAAAAAAAABAhETAxIg/9oACAEBAAEFAsFSjXk3QPlTO0+P/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAQMFAQAAAAAAAAAAAAAAAQARIRAgMTJBkf/aAAgBAQAGPwIMJ66ChvaYK0s//8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFBUZHx/9oACAEBAAE/IUBq9hiuRffQRadSWzLc8RrGlXxCDLn/2gAMAwEAAgADAAAAEG//AAH/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPxBj/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxDBX//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQWFRcZH/2gAIAQEAAT8QMkQytfRWiN8Fmmhq+YtMjVpL+1FNWJSPdx0327A89wwhB6hpHi7n/9k="
              style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 1; transition-delay: 500ms;"
            />
            <picture>
              <source
                srcset="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/mike-burton.jpg 1x"
              />
              <img
                alt="Mike"
                height="10"
                loading="lazy"
                src="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/mike-burton.jpg"
                srcset="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/mike-burton.jpg 1x"
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                width="10"
              />
            </picture>
            <noscript>
              &lt;picture&gt;&lt;source srcset="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/mike-burton.jpg 1x" /&gt;&lt;img loading="lazy" width="10" height="10" srcset="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/mike-burton.jpg 1x" src="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/mike-burton.jpg" alt="Mike" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
            </noscript>
          </div>
          <h5>
            MIKE BURTON
          </h5>
          <h6>
            Head Coach and Owner
          </h6>
          <p>
            CF Level 1
          </p>
          <p>
            Dry Land Coach for MAC
          </p>
          <p>
            OPEX CCP, completing case studies
          </p>
          <p>
            Personal Trainer Certification
          </p>
        </div>
      </div>
    `);
  });
});
