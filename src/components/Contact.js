import { useState } from "react";

export default function Contact({ darkMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const apiEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to submit");
      }

      setSucceeded(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Server error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      id="contact"
      className={darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <div className="container py-3">
        <header className="text-center mb-5">
          <h1 className={`display-5 fw-bold ${darkMode ? "text-light" : "text-dark"}`}>
            Contact Me
          </h1>
          <p className={`lead ${darkMode ? "text-light" : "text-muted"}`}>
            Get in touch with me
          </p>
        </header>

        {succeeded ? (
          <div className="alert alert-warning fade show mb-3" role="alert">
            Thank you for reaching out! I'll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} data-bs-theme={darkMode ? "dark" : "light"}>
            <div className="mb-3">
              <label htmlFor="contact-name" className="form-label">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="form-control"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contact-email" className="form-label">
                Email address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="form-control"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-control"
                rows="4"
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className={
                  darkMode
                    ? "btn btn-outline-dark text-light"
                    : "btn btn-outline-light text-dark"
                }
                type="submit"
                disabled={submitting}
              >
                {!submitting && "Submit"}
                {submitting && (
                  <>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
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
