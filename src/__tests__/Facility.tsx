import React from "react";
import { render } from "@testing-library/react";
import * as gatsby from "gatsby";
import Facility, { PureFacility } from "../pages/facility";

describe("Facility", () => {
  beforeEach(() => {
    jest.mock("gatsby");
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });
  test("renders PureFacility without crashing", async () => {
    const { container } = render(
      <PureFacility
        inside={{ width: 0, height: 0, src: "testing", srcSet: "testing" }}
        inside2={{ width: 0, height: 0, src: "testing", srcSet: "testing" }}
        inside3={{ width: 0, height: 0, src: "testing", srcSet: "testing" }}
        window={{ width: 0, height: 0, src: "testing", srcSet: "testing" }}
        balcony={{ width: 0, height: 0, src: "testing", srcSet: "testing" }}
      />
    );
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Facility
        </h2>
        <p>
          We know that an athlete’s experience at the gym is more than just getting sweaty – the programming, community and facility they choose are huge factors. For many of our athletes, the gym is is a place they visit almost daily, so we strive to provide each one a complete experience. At Great State, we are pretty proud of our box. We are located in a brand-new building in the Novation Business Park in Madison, Wisconsin. Our suite has floor-to-ceiling, wall-to-wall windows – our members benefit from the awesome natural light, (which as we know, can be a godsend during those winter months). We’ve invested in the best equipment and a fully stocked pro-shop. Great State is centrally located – we are just off the beltline (exit south on Rimrock Rd) and have plenty of private parking.  We are literally down the street from the Alliant Energy Center (where the 2017-2021 CrossFit Games are held!) and another 5 minutes from Downtown & the Capitol square. Check out our box below or, better yet, come visit us. We would love to meet you.
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
              alt="Inside"
              height="0"
              loading="lazy"
              src="testing"
              srcset="testing"
              style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
              width="0"
            />
          </picture>
          <noscript>
            &lt;picture&gt;&lt;source srcset="testing" /&gt;&lt;img loading="lazy" srcset="testing" src="testing" alt="Inside" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
          </noscript>
        </div>
        <div>
          <div
            class=" gatsby-image-wrapper"
            style="position: relative; overflow: hidden; display: inline-block; width: 0px; height: 0px;"
          >
            <picture>
              <source
                srcset="testing"
              />
              <img
                alt="Inside2"
                height="0"
                loading="lazy"
                src="testing"
                srcset="testing"
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                width="0"
              />
            </picture>
            <noscript>
              &lt;picture&gt;&lt;source srcset="testing" /&gt;&lt;img loading="lazy" srcset="testing" src="testing" alt="Inside2" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
            </noscript>
          </div>
          <div
            class=" gatsby-image-wrapper"
            style="position: relative; overflow: hidden; display: inline-block; width: 0px; height: 0px;"
          >
            <picture>
              <source
                srcset="testing"
              />
              <img
                alt="Inside3"
                height="0"
                loading="lazy"
                src="testing"
                srcset="testing"
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                width="0"
              />
            </picture>
            <noscript>
              &lt;picture&gt;&lt;source srcset="testing" /&gt;&lt;img loading="lazy" srcset="testing" src="testing" alt="Inside3" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
            </noscript>
          </div>
          <div
            class=" gatsby-image-wrapper"
            style="position: relative; overflow: hidden; display: inline-block; width: 0px; height: 0px;"
          >
            <picture>
              <source
                srcset="testing"
              />
              <img
                alt="Window"
                height="0"
                loading="lazy"
                src="testing"
                srcset="testing"
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                width="0"
              />
            </picture>
            <noscript>
              &lt;picture&gt;&lt;source srcset="testing" /&gt;&lt;img loading="lazy" srcset="testing" src="testing" alt="Window" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
            </noscript>
          </div>
          <div
            class=" gatsby-image-wrapper"
            style="position: relative; overflow: hidden; display: inline-block; width: 0px; height: 0px;"
          >
            <picture>
              <source
                srcset="testing"
              />
              <img
                alt="Balcony"
                height="0"
                loading="lazy"
                src="testing"
                srcset="testing"
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                width="0"
              />
            </picture>
            <noscript>
              &lt;picture&gt;&lt;source srcset="testing" /&gt;&lt;img loading="lazy" srcset="testing" src="testing" alt="Balcony" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
            </noscript>
          </div>
        </div>
      </div>
    `);
  });
  test("renders Facility without crashing", async () => {
    const useStaticQuery = jest.spyOn(gatsby, "useStaticQuery");
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: "Kevin",
          description: "My description",
          title: "My Title",
        },
      },
      inside: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAY5sjNzLVZLAA//EABsQAAMAAgMAAAAAAAAAAAAAAAABAhETAxIg/9oACAEBAAEFAsFSjXk3QPlTO0+P/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAQMFAQAAAAAAAAAAAAAAAQARIRAgMTJBkf/aAAgBAQAGPwIMJ66ChvaYK0s//8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFBUZHx/9oACAEBAAE/IUBq9hiuRffQRadSWzLc8RrGlXxCDLn/2gAMAwEAAgADAAAAEG//AAH/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPxBj/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxDBX//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQWFRcZH/2gAIAQEAAT8QMkQytfRWiN8Fmmhq+YtMjVpL+1FNWJSPdx0327A89wwhB6hpHi7n/9k=",
            width: 720,
            height: 720,
            src: "/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/inside.jpg",
            srcSet:
              "/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/inside.jpg 1x",
          },
        },
      },
      inside2: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAZSvfLkeE9kJiCf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQISAxETMf/aAAgBAQABBQJ2RU0iyO0VFZ0hE/D/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BI//EABsQAAMAAgMAAAAAAAAAAAAAAAABERAxITJh/9oACAEBAAY/Ao6aNHUTk8hzXh4//8QAGxAAAwACAwAAAAAAAAAAAAAAAAERITFxgaH/2gAIAQEAAT8h1iGJXHfbI7Clv4WC6xFY5FThlozGoV1n/9oADAMBAAIAAwAAABCPyAL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EKUef//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPxBg2f/EABsQAQEAAwEBAQAAAAAAAAAAAAERACFBMVGB/9oACAEBAAE/EIPoCIj+3Gxa7ZmsAAQ/DeOi4eHWSCiRY6Ni33C1o6YwujHPuLRw1i2zuf/Z",
            width: 180,
            height: 180,
            src: "/static/e482c65f11f833ed05cab0109525863c/a8ad2/inside2.jpg",
            srcSet:
              "/static/e482c65f11f833ed05cab0109525863c/a8ad2/inside2.jpg 1x,\n/static/e482c65f11f833ed05cab0109525863c/df84b/inside2.jpg 1.5x,\n/static/e482c65f11f833ed05cab0109525863c/921d4/inside2.jpg 2x",
          },
        },
      },
      inside3: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAfTz1dsgoGSZZAH/xAAdEAACAQQDAAAAAAAAAAAAAAAAAgEDBBIxExQh/9oACAEBAAEFApt1HoecB2MBblmIrSPtNSf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPwEh/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8BKf/EABoQAAICAwAAAAAAAAAAAAAAAAABESEQIDH/2gAIAQEABj8Cp4Q7kuDun//EAB0QAAICAQUAAAAAAAAAAAAAAAERACExEEFhkaH/2gAIAQEAAT8hYsHsSRowqGGQ4xNZhbQSQK8RC+0PQ5T/2gAMAwEAAgADAAAAECsHvf/EABcRAAMBAAAAAAAAAAAAAAAAAAABIRD/2gAIAQMBAT8QbhR4/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAgEBPxAO4yERv//EABwQAQEBAQACAwAAAAAAAAAAAAERIQAxQVGRof/aAAgBAQABPxBEZdjjlVM8jHgkVHD89ts1gRLdj2D2y2kPr94BHpha5yCCBfXe/wApe8/f/9k=",
            width: 180,
            height: 180,
            src: "/static/997c35a23755cb3a9dda151372da98d9/a8ad2/inside3.jpg",
            srcSet:
              "/static/997c35a23755cb3a9dda151372da98d9/a8ad2/inside3.jpg 1x,\n/static/997c35a23755cb3a9dda151372da98d9/df84b/inside3.jpg 1.5x,\n/static/997c35a23755cb3a9dda151372da98d9/921d4/inside3.jpg 2x",
          },
        },
      },
      window: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAABrDTnrO7ox4Ce7A//xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIDBBMREiExQv/aAAgBAQABBQK46844suGjdDTNTRdMchy5/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/ASv/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/AaVb/8QAGRABAAMBAQAAAAAAAAAAAAAAAAECERAy/9oACAEBAAY/Aq9rr1DNVQl//8QAHhABAAICAQUAAAAAAAAAAAAAAQAhMVFxEUFhgbH/2gAIAQEAAT8hpyQ+IXLOGAsCIbhuFhc8RevtG7TETEZ1P//aAAwDAQACAAMAAAAQ2BiB/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8QRh//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQMf/aAAgBAgEBPxCcn0iP/8QAHxABAAIBBAMBAAAAAAAAAAAAAQARMSFBUWGBkbHB/9oACAEBAAE/EDSN18mSzL/YPv8AJUeoUhC8+JTk1aDLMPt4Gm6zmOn0QADV4ds7K9vM/9k=",
            width: 180,
            height: 180,
            src: "/static/9808b9234028a2358217a1580db89db2/a8ad2/window.jpg",
            srcSet:
              "/static/9808b9234028a2358217a1580db89db2/a8ad2/window.jpg 1x,\n/static/9808b9234028a2358217a1580db89db2/df84b/window.jpg 1.5x,\n/static/9808b9234028a2358217a1580db89db2/921d4/window.jpg 2x",
          },
        },
      },
      balcony: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAGfLSFSKzZ5hnpkDP8A/8QAGRAAAgMBAAAAAAAAAAAAAAAAABEBAhIh/9oACAEBAAEFAsGDBLJrMHG0WvZn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAISEP/aAAgBAwEBPwGCRs//xAAYEQACAwAAAAAAAAAAAAAAAAAAAhASE//aAAgBAgEBPwHUuJH/xAAcEAABAwUAAAAAAAAAAAAAAAABABARAiMxMpH/2gAIAQEABj8CfJWx6jcqDTLf/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERIVEx/9oACAEBAAE/Ia4Vwrh4VVzNEmirU2eIpM4NN6QTun//2gAMAwEAAgADAAAAEFj/AIP/xAAWEQEBAQAAAAAAAAAAAAAAAAAQETH/2gAIAQMBAT8Qo6P/xAAaEQABBQEAAAAAAAAAAAAAAAAAARARIVFx/9oACAECAQE/EOCeCKb/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhQRAxcWH/2gAIAQEAAT8Q52VOVI0r9nUctDgvkziBncErBBS1FsrUPheowU5Wf//Z",
            width: 180,
            height: 180,
            src: "/static/a2a1977ad07ea1793b682592bcc44c53/a8ad2/balcony.jpg",
            srcSet:
              "/static/a2a1977ad07ea1793b682592bcc44c53/a8ad2/balcony.jpg 1x,\n/static/a2a1977ad07ea1793b682592bcc44c53/df84b/balcony.jpg 1.5x,\n/static/a2a1977ad07ea1793b682592bcc44c53/921d4/balcony.jpg 2x",
          },
        },
      },
    }));
    const { container } = render(<Facility />);
    // render should show the title
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
            Facility
          </h2>
          <p>
            We know that an athlete’s experience at the gym is more than just getting sweaty – the programming, community and facility they choose are huge factors. For many of our athletes, the gym is is a place they visit almost daily, so we strive to provide each one a complete experience. At Great State, we are pretty proud of our box. We are located in a brand-new building in the Novation Business Park in Madison, Wisconsin. Our suite has floor-to-ceiling, wall-to-wall windows – our members benefit from the awesome natural light, (which as we know, can be a godsend during those winter months). We’ve invested in the best equipment and a fully stocked pro-shop. Great State is centrally located – we are just off the beltline (exit south on Rimrock Rd) and have plenty of private parking.  We are literally down the street from the Alliant Energy Center (where the 2017-2021 CrossFit Games are held!) and another 5 minutes from Downtown & the Capitol square. Check out our box below or, better yet, come visit us. We would love to meet you.
          </p>
          <div
            class=" gatsby-image-wrapper"
            style="position: relative; overflow: hidden; display: inline-block; width: 720px; height: 720px;"
          >
            <img
              alt=""
              aria-hidden="true"
              src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAY5sjNzLVZLAA//EABsQAAMAAgMAAAAAAAAAAAAAAAABAhETAxIg/9oACAEBAAEFAsFSjXk3QPlTO0+P/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAQMFAQAAAAAAAAAAAAAAAQARIRAgMTJBkf/aAAgBAQAGPwIMJ66ChvaYK0s//8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFBUZHx/9oACAEBAAE/IUBq9hiuRffQRadSWzLc8RrGlXxCDLn/2gAMAwEAAgADAAAAEG//AAH/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPxBj/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxDBX//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQWFRcZH/2gAIAQEAAT8QMkQytfRWiN8Fmmhq+YtMjVpL+1FNWJSPdx0327A89wwhB6hpHi7n/9k="
              style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 1; transition-delay: 500ms;"
            />
            <picture>
              <source
                srcset="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/inside.jpg 1x"
              />
              <img
                alt="Inside"
                height="720"
                loading="lazy"
                src="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/inside.jpg"
                srcset="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/inside.jpg 1x"
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                width="720"
              />
            </picture>
            <noscript>
              &lt;picture&gt;&lt;source srcset="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/inside.jpg 1x" /&gt;&lt;img loading="lazy" width="720" height="720" srcset="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/inside.jpg 1x" src="/static/cc42e91a4a4cf46af0e53c32213e3afe/52979/inside.jpg" alt="Inside" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
            </noscript>
          </div>
          <div>
            <div
              class=" gatsby-image-wrapper"
              style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;"
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAZSvfLkeE9kJiCf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQISAxETMf/aAAgBAQABBQJ2RU0iyO0VFZ0hE/D/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BI//EABsQAAMAAgMAAAAAAAAAAAAAAAABERAxITJh/9oACAEBAAY/Ao6aNHUTk8hzXh4//8QAGxAAAwACAwAAAAAAAAAAAAAAAAERITFxgaH/2gAIAQEAAT8h1iGJXHfbI7Clv4WC6xFY5FThlozGoV1n/9oADAMBAAIAAwAAABCPyAL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EKUef//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPxBg2f/EABsQAQEAAwEBAQAAAAAAAAAAAAERACFBMVGB/9oACAEBAAE/EIPoCIj+3Gxa7ZmsAAQ/DeOi4eHWSCiRY6Ni33C1o6YwujHPuLRw1i2zuf/Z"
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 1; transition-delay: 500ms;"
              />
              <picture>
                <source
                  srcset="/static/e482c65f11f833ed05cab0109525863c/a8ad2/inside2.jpg 1x,
      /static/e482c65f11f833ed05cab0109525863c/df84b/inside2.jpg 1.5x,
      /static/e482c65f11f833ed05cab0109525863c/921d4/inside2.jpg 2x"
                />
                <img
                  alt="Inside2"
                  height="180"
                  loading="lazy"
                  src="/static/e482c65f11f833ed05cab0109525863c/a8ad2/inside2.jpg"
                  srcset="/static/e482c65f11f833ed05cab0109525863c/a8ad2/inside2.jpg 1x,
      /static/e482c65f11f833ed05cab0109525863c/df84b/inside2.jpg 1.5x,
      /static/e482c65f11f833ed05cab0109525863c/921d4/inside2.jpg 2x"
                  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                  width="180"
                />
              </picture>
              <noscript>
                &lt;picture&gt;&lt;source srcset="/static/e482c65f11f833ed05cab0109525863c/a8ad2/inside2.jpg 1x,
      /static/e482c65f11f833ed05cab0109525863c/df84b/inside2.jpg 1.5x,
      /static/e482c65f11f833ed05cab0109525863c/921d4/inside2.jpg 2x" /&gt;&lt;img loading="lazy" width="180" height="180" srcset="/static/e482c65f11f833ed05cab0109525863c/a8ad2/inside2.jpg 1x,
      /static/e482c65f11f833ed05cab0109525863c/df84b/inside2.jpg 1.5x,
      /static/e482c65f11f833ed05cab0109525863c/921d4/inside2.jpg 2x" src="/static/e482c65f11f833ed05cab0109525863c/a8ad2/inside2.jpg" alt="Inside2" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
              </noscript>
            </div>
            <div
              class=" gatsby-image-wrapper"
              style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;"
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAfTz1dsgoGSZZAH/xAAdEAACAQQDAAAAAAAAAAAAAAAAAgEDBBIxExQh/9oACAEBAAEFApt1HoecB2MBblmIrSPtNSf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPwEh/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8BKf/EABoQAAICAwAAAAAAAAAAAAAAAAABESEQIDH/2gAIAQEABj8Cp4Q7kuDun//EAB0QAAICAQUAAAAAAAAAAAAAAAERACExEEFhkaH/2gAIAQEAAT8hYsHsSRowqGGQ4xNZhbQSQK8RC+0PQ5T/2gAMAwEAAgADAAAAECsHvf/EABcRAAMBAAAAAAAAAAAAAAAAAAABIRD/2gAIAQMBAT8QbhR4/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAgEBPxAO4yERv//EABwQAQEBAQACAwAAAAAAAAAAAAERIQAxQVGRof/aAAgBAQABPxBEZdjjlVM8jHgkVHD89ts1gRLdj2D2y2kPr94BHpha5yCCBfXe/wApe8/f/9k="
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 1; transition-delay: 500ms;"
              />
              <picture>
                <source
                  srcset="/static/997c35a23755cb3a9dda151372da98d9/a8ad2/inside3.jpg 1x,
      /static/997c35a23755cb3a9dda151372da98d9/df84b/inside3.jpg 1.5x,
      /static/997c35a23755cb3a9dda151372da98d9/921d4/inside3.jpg 2x"
                />
                <img
                  alt="Inside3"
                  height="180"
                  loading="lazy"
                  src="/static/997c35a23755cb3a9dda151372da98d9/a8ad2/inside3.jpg"
                  srcset="/static/997c35a23755cb3a9dda151372da98d9/a8ad2/inside3.jpg 1x,
      /static/997c35a23755cb3a9dda151372da98d9/df84b/inside3.jpg 1.5x,
      /static/997c35a23755cb3a9dda151372da98d9/921d4/inside3.jpg 2x"
                  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                  width="180"
                />
              </picture>
              <noscript>
                &lt;picture&gt;&lt;source srcset="/static/997c35a23755cb3a9dda151372da98d9/a8ad2/inside3.jpg 1x,
      /static/997c35a23755cb3a9dda151372da98d9/df84b/inside3.jpg 1.5x,
      /static/997c35a23755cb3a9dda151372da98d9/921d4/inside3.jpg 2x" /&gt;&lt;img loading="lazy" width="180" height="180" srcset="/static/997c35a23755cb3a9dda151372da98d9/a8ad2/inside3.jpg 1x,
      /static/997c35a23755cb3a9dda151372da98d9/df84b/inside3.jpg 1.5x,
      /static/997c35a23755cb3a9dda151372da98d9/921d4/inside3.jpg 2x" src="/static/997c35a23755cb3a9dda151372da98d9/a8ad2/inside3.jpg" alt="Inside3" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
              </noscript>
            </div>
            <div
              class=" gatsby-image-wrapper"
              style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;"
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAABrDTnrO7ox4Ce7A//xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIDBBMREiExQv/aAAgBAQABBQK46844suGjdDTNTRdMchy5/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/ASv/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/AaVb/8QAGRABAAMBAQAAAAAAAAAAAAAAAAECERAy/9oACAEBAAY/Aq9rr1DNVQl//8QAHhABAAICAQUAAAAAAAAAAAAAAQAhMVFxEUFhgbH/2gAIAQEAAT8hpyQ+IXLOGAsCIbhuFhc8RevtG7TETEZ1P//aAAwDAQACAAMAAAAQ2BiB/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8QRh//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQMf/aAAgBAgEBPxCcn0iP/8QAHxABAAIBBAMBAAAAAAAAAAAAAQARMSFBUWGBkbHB/9oACAEBAAE/EDSN18mSzL/YPv8AJUeoUhC8+JTk1aDLMPt4Gm6zmOn0QADV4ds7K9vM/9k="
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 1; transition-delay: 500ms;"
              />
              <picture>
                <source
                  srcset="/static/9808b9234028a2358217a1580db89db2/a8ad2/window.jpg 1x,
      /static/9808b9234028a2358217a1580db89db2/df84b/window.jpg 1.5x,
      /static/9808b9234028a2358217a1580db89db2/921d4/window.jpg 2x"
                />
                <img
                  alt="Window"
                  height="180"
                  loading="lazy"
                  src="/static/9808b9234028a2358217a1580db89db2/a8ad2/window.jpg"
                  srcset="/static/9808b9234028a2358217a1580db89db2/a8ad2/window.jpg 1x,
      /static/9808b9234028a2358217a1580db89db2/df84b/window.jpg 1.5x,
      /static/9808b9234028a2358217a1580db89db2/921d4/window.jpg 2x"
                  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                  width="180"
                />
              </picture>
              <noscript>
                &lt;picture&gt;&lt;source srcset="/static/9808b9234028a2358217a1580db89db2/a8ad2/window.jpg 1x,
      /static/9808b9234028a2358217a1580db89db2/df84b/window.jpg 1.5x,
      /static/9808b9234028a2358217a1580db89db2/921d4/window.jpg 2x" /&gt;&lt;img loading="lazy" width="180" height="180" srcset="/static/9808b9234028a2358217a1580db89db2/a8ad2/window.jpg 1x,
      /static/9808b9234028a2358217a1580db89db2/df84b/window.jpg 1.5x,
      /static/9808b9234028a2358217a1580db89db2/921d4/window.jpg 2x" src="/static/9808b9234028a2358217a1580db89db2/a8ad2/window.jpg" alt="Window" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
              </noscript>
            </div>
            <div
              class=" gatsby-image-wrapper"
              style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;"
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAGfLSFSKzZ5hnpkDP8A/8QAGRAAAgMBAAAAAAAAAAAAAAAAABEBAhIh/9oACAEBAAEFAsGDBLJrMHG0WvZn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAISEP/aAAgBAwEBPwGCRs//xAAYEQACAwAAAAAAAAAAAAAAAAAAAhASE//aAAgBAgEBPwHUuJH/xAAcEAABAwUAAAAAAAAAAAAAAAABABARAiMxMpH/2gAIAQEABj8CfJWx6jcqDTLf/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERIVEx/9oACAEBAAE/Ia4Vwrh4VVzNEmirU2eIpM4NN6QTun//2gAMAwEAAgADAAAAEFj/AIP/xAAWEQEBAQAAAAAAAAAAAAAAAAAQETH/2gAIAQMBAT8Qo6P/xAAaEQABBQEAAAAAAAAAAAAAAAAAARARIVFx/9oACAECAQE/EOCeCKb/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhQRAxcWH/2gAIAQEAAT8Q52VOVI0r9nUctDgvkziBncErBBS1FsrUPheowU5Wf//Z"
                style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 1; transition-delay: 500ms;"
              />
              <picture>
                <source
                  srcset="/static/a2a1977ad07ea1793b682592bcc44c53/a8ad2/balcony.jpg 1x,
      /static/a2a1977ad07ea1793b682592bcc44c53/df84b/balcony.jpg 1.5x,
      /static/a2a1977ad07ea1793b682592bcc44c53/921d4/balcony.jpg 2x"
                />
                <img
                  alt="Balcony"
                  height="180"
                  loading="lazy"
                  src="/static/a2a1977ad07ea1793b682592bcc44c53/a8ad2/balcony.jpg"
                  srcset="/static/a2a1977ad07ea1793b682592bcc44c53/a8ad2/balcony.jpg 1x,
      /static/a2a1977ad07ea1793b682592bcc44c53/df84b/balcony.jpg 1.5x,
      /static/a2a1977ad07ea1793b682592bcc44c53/921d4/balcony.jpg 2x"
                  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
                  width="180"
                />
              </picture>
              <noscript>
                &lt;picture&gt;&lt;source srcset="/static/a2a1977ad07ea1793b682592bcc44c53/a8ad2/balcony.jpg 1x,
      /static/a2a1977ad07ea1793b682592bcc44c53/df84b/balcony.jpg 1.5x,
      /static/a2a1977ad07ea1793b682592bcc44c53/921d4/balcony.jpg 2x" /&gt;&lt;img loading="lazy" width="180" height="180" srcset="/static/a2a1977ad07ea1793b682592bcc44c53/a8ad2/balcony.jpg 1x,
      /static/a2a1977ad07ea1793b682592bcc44c53/df84b/balcony.jpg 1.5x,
      /static/a2a1977ad07ea1793b682592bcc44c53/921d4/balcony.jpg 2x" src="/static/a2a1977ad07ea1793b682592bcc44c53/a8ad2/balcony.jpg" alt="Balcony" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
              </noscript>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
