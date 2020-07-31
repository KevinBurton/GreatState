import * as React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  Matcher,
  MatcherOptions,
  waitFor,
} from "@testing-library/react";
import UnderConstruction from "../components/UnderConstruction";

describe("Under Construction", () => {
  let container: HTMLElement;
  let getByTestId: (
    text: Matcher,
    options?: MatcherOptions | undefined,
    waitForElementOptions?: unknown
  ) => HTMLElement;
  let onSubmit: jest.Mock<any, any>;

  beforeEach(() => {
    onSubmit = jest.fn();
    const renderUtils = render(<UnderConstruction onSubmit={onSubmit} />);
    getByTestId = renderUtils.getByTestId;
    container = renderUtils.container;
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.resetModules();
  });

  test("renders UnderConstruction without crashing", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Under Construction
        </h2>
        <br />
        <div
          class="MuiFormControl-root makeStyles-root-1"
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
                    class="MuiSvgIcon-root makeStyles-iconColor-3"
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
    `);
  });

  function pad(n: number, width: number, z: string): string {
    z = z || "0";
    let p = n.toString();
    return p.length >= width ? p : new Array(width - p.length + 1).join(z) + p;
  }

  test("It should submit the form", async () => {
    const form = getByTestId("notification-form");
    expect(form).toBeInTheDocument();
    const label = getByTestId("email-label");
    expect(label).toHaveTextContent("Enter Email");
    const submit = getByTestId("notifications-form-submit");
    expect(submit).toBeInTheDocument();

    const input: HTMLElement = getByTestId("email-notification");
    fireEvent.change(input, { target: { value: "abc@def" } });
    expect(input).toHaveValue("abc@def");
    fireEvent.submit(submit);
    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(1));
    expect(onSubmit).toHaveBeenCalled();
  });
});
