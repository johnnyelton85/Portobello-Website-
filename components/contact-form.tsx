"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us a little about the job..."
          required
        />
      </div>
      <div className="field field--trap" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <button
        className="button"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <LoaderCircle size={18} aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            Request a callback
            <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>
      <div aria-live="polite">
        {status === "success" && (
          <p className="form-status form-status--success">
            Thanks — your request has been received. We&apos;ll be in touch.
          </p>
        )}
        {status === "error" && (
          <p className="form-status form-status--error">
            Something went wrong. Please call 027 549 9090 instead.
          </p>
        )}
      </div>
    </form>
  );
}
