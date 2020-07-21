import React from 'react'
import {
  render,
  Matcher,
  MatcherOptions,
  fireEvent,
  cleanup,
  screen,
  waitFor,
} from '@testing-library/react'
import Start from '../components/Start'
describe('Start', () => {
  let container: HTMLElement
  let getByTestId: (
    text: Matcher,
    options?: MatcherOptions | undefined,
    waitForElementOptions?: unknown,
  ) => HTMLElement
  let getByText: (
    text: Matcher,
    options?: MatcherOptions | undefined,
    waitForElementOptions?: unknown,
  ) => HTMLElement
  let onSubmit: jest.Mock<any, any>
  beforeEach(() => {
    onSubmit = jest.fn()
    const renderUtils = render(<Start onSubmit={onSubmit} />)
    getByTestId = renderUtils.getByTestId
    getByText = renderUtils.getByText
    container = renderUtils.container
  })

  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
    jest.resetModules()
  })

  test('renders Start without crashing', async () => {
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

  test('Enter and submit valid form values', async () => {
    const form = getByTestId('getting-started-form')
    expect(form).toBeInTheDocument()
    const name = getByTestId('name')
    const email = getByTestId('email')
    const phone = getByTestId('phone')
    const comments = getByTestId('comments')
    const submit = getByTestId('getting-started-form-submit-button')
    expect(submit).toBeInTheDocument()

    fireEvent.change(name, {target: {value: 'Tester'}})
    fireEvent.change(email, {target: {value: 'test@test.com'}})
    fireEvent.change(phone, {target: {value: '12345678901'}})
    fireEvent.change(comments, {target: {value: 'This is a great site'}})
    fireEvent.submit(form)
    expect(name).toHaveValue('Tester')
    expect(email).toHaveValue('test@test.com')
    expect(phone).toHaveValue('12345678901')
    expect(comments).toHaveValue('This is a great site')
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0))
    expect(onSubmit).toHaveBeenCalled()
  })
  test('Enter and submit invalid form values', async () => {
    const form = getByTestId('getting-started-form')
    expect(form).toBeInTheDocument()
    const name = getByTestId('name')
    const email = getByTestId('email')
    const phone = getByTestId('phone')
    const comments = getByTestId('comments')
    const submit = getByTestId('getting-started-form-submit-button')
    expect(submit).toBeInTheDocument()

    fireEvent.change(name, { target: { value: '' } })
    fireEvent.change(email, { target: { value: 'test' } })
    fireEvent.change(phone, { target: { value: '1234567890' } })
    fireEvent.change(comments, { target: { value: 'This is a great site' } })
    fireEvent.submit(form)
    expect(name).toHaveValue('')
    expect(email).toHaveValue('test')
    expect(phone).toHaveValue('1234567890')
    expect(comments).toHaveValue('This is a great site')
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(3))
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
