import { useState } from "react";
import { sendContactMessage } from "../api.js";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact({ apiConnected }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      await sendContactMessage(form);
      setStatus("sent");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Try again.");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="section__header">
        <span className="method method--post">POST</span>
        <h2 className="route-heading">/contact</h2>
      </div>

      {!apiConnected && (
        <p className="notice">
          Backend not detected — start the API in <code>backend/</code> for this form to actually
          send messages. See the README for setup.
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
          />
        </label>

        <label className="field">
          <span>email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            required
          />
        </label>

        <label className="field">
          <span>message</span>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Let's talk about..."
            required
          />
        </label>

        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        {status === "sent" && (
          <p className="form-feedback form-feedback--success">
            <span className="status-chip status-chip--2xx">201</span> Message received. Thanks —
            you'll hear back soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-feedback form-feedback--error">
            <span className="status-chip status-chip--4xx">400</span> {errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}
