import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { render } from "@testing-library/react";
import { PurePrograms } from '../pages/programs';
describe("Programs", () => {
  test("renders Programs without crashing", async () => {
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
});
