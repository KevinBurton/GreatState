import React from 'react'
import {render} from '@testing-library/react'
import { PureGettingStarted } from '../pages/gettingstarted'
describe('GettingSarted', () => {
  test('renders GettingStarted without crashing', async () => {
    const {container} = render(<PureGettingStarted />)
    // rend should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h6>
          Getting Started
        </h6>
        <p>
          Have questions ? Give us a call or fill out the below.We’d be happy to answer any questions.
        </p>
        <form
          class="makeStyles-root-2"
          data-testid="getting-started-form"
        >
          <div
            style="width: 400px;"
          >
            <div
              style="width: 100%;"
            >
              <div
                class="MuiFormControl-root MuiTextField-root"
              >
                <label
                  class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled"
                  data-shrink="true"
                  for="name"
                  id="name-label"
                >
                  Name
                </label>
                <div
                  class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                >
                  <input
                    aria-invalid="false"
                    class="MuiInputBase-input MuiInput-input"
                    data-testid="name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value="Kevin"
                  />
                </div>
              </div>
            </div>
            <div
              style="width: 100%;"
            >
              <div
                class="MuiFormControl-root MuiTextField-root"
              >
                <label
                  class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled"
                  data-shrink="true"
                  for="email"
                  id="email-label"
                >
                  Email
                </label>
                <div
                  class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                >
                  <input
                    aria-invalid="false"
                    class="MuiInputBase-input MuiInput-input"
                    data-testid="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="text"
                    value="rkevinburton@charter.net"
                  />
                </div>
              </div>
            </div>
            <div
              style="width: 100%;"
            >
              <div
                class="MuiFormControl-root MuiTextField-root"
              >
                <label
                  class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled"
                  data-shrink="true"
                  for="phone"
                  id="phone-label"
                >
                  Phone
                </label>
                <div
                  class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                >
                  <input
                    aria-invalid="false"
                    class="MuiInputBase-input MuiInput-input"
                    data-testid="phone"
                    id="phone"
                    name="phone"
                    placeholder="eg.15556667890"
                    type="text"
                    value="16083588015"
                  />
                </div>
              </div>
            </div>
            <div
              style="width: 100%;"
            >
              <div
                class="MuiFormControl-root MuiTextField-root"
              >
                <label
                  class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled"
                  data-shrink="true"
                  for="comments"
                  id="comments-label"
                >
                  Comments
                </label>
                <div
                  class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline"
                >
                  <textarea
                    aria-invalid="false"
                    class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"
                    data-testid="comments"
                    id="comments"
                    name="comments"
                    placeholder="Comments"
                    rows="6"
                  >
                    Note
                  </textarea>
                </div>
              </div>
            </div>
          </div>
          <button
            aria-label="submit getting-started-form"
            class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
            data-testid="getting-started-form-submit-button"
            tabindex="0"
            type="submit"
          >
            <span
              class="MuiButton-label"
            >
              Submit
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </button>
        </form>
      </div>
    `)
  })
})
