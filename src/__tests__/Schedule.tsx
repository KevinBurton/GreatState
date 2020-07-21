import React from "react"
import { render } from "@testing-library/react"
import { PureSchedule } from "../pages/schedule"
describe("Schedule", () => {
  test("renders Schedule without crashing", async () => {
    const { container } = render(<PureSchedule />)
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
    `)
  })
})
