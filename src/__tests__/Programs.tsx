import React from "react";
import * as gatsby from "gatsby";
import { render } from "@testing-library/react";
import Programs, { PurePrograms } from "../pages/programs";
describe("Programs", () => {
  test("renders PurePrograms without crashing", async () => {
    const { container } = render(<PurePrograms />);
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Programs
        </h2>
        <h6
          style="text-align: center;"
        >
          CrossFit Group Classes
        </h6>
        <p>
          CrossFit is a high intensity fitness program that incorporates elements from several types of exercises. While CrossFit is meant to be taught in groups, trainers should limit the number in each class in order to allow them to focus on each individual athlete as much as possible. A typical class will consist of:
        </p>
        <p
          style="margin-left: 10%; margin-right: 10%;"
        >
          a warm-up to get the blood flowing, strength training, often times incorporating Olympic lifting, body weight skill work and/or gymnastics, a metabolic conditioning segment and closing out with proper recovery methods
        </p>
        <p>
          High intensity workouts result in improved strength, speed, power, coordination and endurance. Every workout can be scaled up or down to meet your current ability levels. We do recommend that all new members complete a Foundations course in order to ensure they feel ready to take on a regular CrossFit class.
        </p>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
          style="text-transform: none;"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            Purchase a Membership
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
        <hr />
        <h6
          style="text-align: center;"
        >
          Athlete Development
        </h6>
        <p>
          Have a sports team needing strength & conditioning work? Are you a high school or collegiate athlete looking for an edge? We can help. We will design specific programs to assist in meeting your goals. As a previous competitive swimmer, Coach Mike understands the demands an athlete faces (in and out of the pool, ring, court, or field). Feel free to contact us to set up an initial consult on how Great State CrossFit can help you or your team.
        </p>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
          style="text-transform: none;"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            Team Membership
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
        <hr />
        <h6
          style="text-align: center;"
        >
          Foundations aka ‘CrossFit 101’
        </h6>
        <p>
          The Foundations course is designed for those new to Great State CrossFit or who need a refresher on the movements taught in each class. This course is meant to help you feel completely comfortable in any regularly offered class. We break down the movements, step by step, as well as teach you what to expect. We recommend three Foundations courses as a prerequisite to joining any other class, unless you can test out or are a current CrossFitter.
        </p>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
          style="text-transform: none;"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            Start Foundations
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
        <hr />
        <h6
          style="text-align: center;"
        >
          Open Gym
        </h6>
        <p>
          Our version of recess. Open gym is extra time for you to work on whatever you want – make up a missed class, work on new skills, or dedicate the time to what you need to practice on. Enjoy the freedom of moving at your own pace. Although open gym is not trainer-led, a coach is always on hand to help you get the most out of your time there.
        </p>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
          style="text-transform: none;"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            Part of your Unlimited Membership at GSCF
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
        <hr />
        <h6
          style="text-align: center;"
        >
          Personal Training
        </h6>
        <p>
          In today’s busy world, it’s hard to find the time to get regular exercise. So it’s important to make the most of the time you have. We offer a wide range of personal workout programs to help you achieve your ideal body. Your personal trainer will develop an exercise regimen suited specifically for you, whatever your goals may be.
        </p>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
          style="text-transform: none;"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            Personal Training Rates - $75/hour
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
      </div>
    `);
  });
  test("renders Pricing without crashing", async () => {
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
    const { container } = render(<Programs />);
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
            Programs
          </h2>
          <h6
            style="text-align: center;"
          >
            CrossFit Group Classes
          </h6>
          <p>
            CrossFit is a high intensity fitness program that incorporates elements from several types of exercises. While CrossFit is meant to be taught in groups, trainers should limit the number in each class in order to allow them to focus on each individual athlete as much as possible. A typical class will consist of:
          </p>
          <p
            style="margin-left: 10%; margin-right: 10%;"
          >
            a warm-up to get the blood flowing, strength training, often times incorporating Olympic lifting, body weight skill work and/or gymnastics, a metabolic conditioning segment and closing out with proper recovery methods
          </p>
          <p>
            High intensity workouts result in improved strength, speed, power, coordination and endurance. Every workout can be scaled up or down to meet your current ability levels. We do recommend that all new members complete a Foundations course in order to ensure they feel ready to take on a regular CrossFit class.
          </p>
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
            style="text-transform: none;"
            tabindex="0"
            type="button"
          >
            <span
              class="MuiButton-label"
            >
              Purchase a Membership
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </button>
          <hr />
          <h6
            style="text-align: center;"
          >
            Athlete Development
          </h6>
          <p>
            Have a sports team needing strength & conditioning work? Are you a high school or collegiate athlete looking for an edge? We can help. We will design specific programs to assist in meeting your goals. As a previous competitive swimmer, Coach Mike understands the demands an athlete faces (in and out of the pool, ring, court, or field). Feel free to contact us to set up an initial consult on how Great State CrossFit can help you or your team.
          </p>
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
            style="text-transform: none;"
            tabindex="0"
            type="button"
          >
            <span
              class="MuiButton-label"
            >
              Team Membership
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </button>
          <hr />
          <h6
            style="text-align: center;"
          >
            Foundations aka ‘CrossFit 101’
          </h6>
          <p>
            The Foundations course is designed for those new to Great State CrossFit or who need a refresher on the movements taught in each class. This course is meant to help you feel completely comfortable in any regularly offered class. We break down the movements, step by step, as well as teach you what to expect. We recommend three Foundations courses as a prerequisite to joining any other class, unless you can test out or are a current CrossFitter.
          </p>
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
            style="text-transform: none;"
            tabindex="0"
            type="button"
          >
            <span
              class="MuiButton-label"
            >
              Start Foundations
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </button>
          <hr />
          <h6
            style="text-align: center;"
          >
            Open Gym
          </h6>
          <p>
            Our version of recess. Open gym is extra time for you to work on whatever you want – make up a missed class, work on new skills, or dedicate the time to what you need to practice on. Enjoy the freedom of moving at your own pace. Although open gym is not trainer-led, a coach is always on hand to help you get the most out of your time there.
          </p>
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
            style="text-transform: none;"
            tabindex="0"
            type="button"
          >
            <span
              class="MuiButton-label"
            >
              Part of your Unlimited Membership at GSCF
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </button>
          <hr />
          <h6
            style="text-align: center;"
          >
            Personal Training
          </h6>
          <p>
            In today’s busy world, it’s hard to find the time to get regular exercise. So it’s important to make the most of the time you have. We offer a wide range of personal workout programs to help you achieve your ideal body. Your personal trainer will develop an exercise regimen suited specifically for you, whatever your goals may be.
          </p>
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
            style="text-transform: none;"
            tabindex="0"
            type="button"
          >
            <span
              class="MuiButton-label"
            >
              Personal Training Rates - $75/hour
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </button>
        </div>
      </div>
    `);
  });
});
