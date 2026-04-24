"use client";

import { useState } from "react";
import { IconMail, IconPhone, IconLocation, IconArrowRight } from "./Icon";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder submission — wire this up to your preferred backend or
    // form service (Formspree, Resend, Netlify Forms, your own API route).
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Looking for a trusted playground installation partner?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-700">
              Tell us about your project — timeline, scope, location, and any
              manufacturer spec details. We&rsquo;ll respond promptly with
              availability and next steps.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                  <IconMail />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">
                    Email
                  </div>
                  <a
                    href="mailto:contact@eddingtonbuilds.com"
                    className="text-base font-medium text-navy-900 hover:text-accent"
                  >
                    contact@eddingtonbuilds.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                  <IconPhone />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">
                    Phone
                  </div>
                  <a
                    href="tel:+10000000000"
                    className="text-base font-medium text-navy-900 hover:text-accent"
                  >
                    (000) 000-0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                  <IconLocation />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">
                    Service Area
                  </div>
                  <div className="text-base font-medium text-navy-900">
                    Regional Midwest + travel-ready nationwide
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal rounded-xl border border-navy-100 bg-navy-50/40 p-6 shadow-sm sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" type="email" name="email" required />
              <Field label="Phone" type="tel" name="phone" />
            </div>
            <div className="mt-5">
              <Field label="Project Location" name="location" />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium text-navy-800">
                Project Details
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Scope, timeline, equipment manufacturer, surfacing type, etc."
                  className="mt-1.5 block w-full rounded-md border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 shadow-sm ring-1 ring-inset ring-navy-200 placeholder:text-navy-400 focus:ring-2 focus:ring-inset focus:ring-accent"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
              <IconArrowRight />
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-green-700">
                Thanks — we&rsquo;ll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-700">
                Something went wrong. Please email us directly.
              </p>
            )}

            <p className="mt-4 text-xs text-navy-500">
              By submitting you agree to be contacted about your project.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="block text-sm font-medium text-navy-800">
      {label}
      {required && <span className="ml-0.5 text-accent">*</span>}
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 block w-full rounded-md border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 shadow-sm ring-1 ring-inset ring-navy-200 placeholder:text-navy-400 focus:ring-2 focus:ring-inset focus:ring-accent"
      />
    </label>
  );
}
