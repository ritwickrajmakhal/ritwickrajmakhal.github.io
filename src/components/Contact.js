import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact(props) {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_KEY);
  return (
    <div
      id="contact"
      className={props.darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <div className="container py-3">
        <h1 className="text-center">Contact</h1>
        {state.succeeded ? (
          <div
            className="alert alert-warning fade show mb-3"
            role="alert"
          >
            Thank you for reaching out! I'll get back to you shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-bs-theme={props.darkMode ? "dark" : "light"}
          >
            <input
              name="subject"
              value="Portfolio Website Contact"
              hidden
              disabled
            />
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Doe"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message here..."
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className={
                  props.darkMode
                    ? "btn btn-outline-dark text-light"
                    : "btn btn-outline-light text-dark"
                }
                type="submit"
                disabled={state.submitting}
              >
                {!state.submitting && "Submit"}
                {state.submitting && (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    &nbsp;
                    <span role="status">Submitting...</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
