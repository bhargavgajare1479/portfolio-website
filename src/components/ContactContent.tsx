"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";

interface ContactContentProps {
  isModal?: boolean;
}

export function ContactContent({ isModal = false }: ContactContentProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function validate() {
    let valid = true;
    const errs = { name: "", email: "", message: "" };

    if (!form.name.trim()) {
      errs.name = "Name is required.";
      valid = false;
    }

    if (!form.email.trim()) {
      errs.email = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!form.message.trim()) {
      errs.message = "Message is required.";
      valid = false;
    }

    setErrors(errs);
    return valid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setStatusMessage(
          data.error || "Failed to send message. Please try again or email directly."
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection or email directly.");
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 w-full">
      {/* Direct Contact Links Column */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Let&apos;s Connect
          </h3>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Whether you have a question about spatial systems architecture, XR engineering, or want to explore potential collaborations, feel free to reach out.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:gajarebhargav@gmail.com"
            className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-black transition-colors">
              <MdEmail size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Email</p>
              <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                gajarebhargav@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/bhargavsg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-black transition-colors">
              <FaLinkedin size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">LinkedIn</p>
              <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                linkedin.com/in/bhargavsg
              </p>
            </div>
          </a>

          <a
            href="https://github.com/bhargavgajare1479"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-black transition-colors">
              <FaGithub size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">GitHub</p>
              <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                github.com/bhargavgajare1479
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Contact Form Column */}
      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. John Doe"
              value={form.name}
              onChange={(e) => {
                setForm((f) => ({ ...f, name: e.target.value }));
                if (errors.name) setErrors((errs) => ({ ...errs, name: "" }));
              }}
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-base"
            />
            {errors.name && (
              <p className="mt-1.5 text-sm font-medium text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. you@example.com"
              value={form.email}
              onChange={(e) => {
                setForm((f) => ({ ...f, email: e.target.value }));
                if (errors.email) setErrors((errs) => ({ ...errs, email: "" }));
              }}
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-base"
            />
            {errors.email && (
              <p className="mt-1.5 text-sm font-medium text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2"
            >
              Message / Description
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project, opportunity, or inquiry..."
              value={form.message}
              onChange={(e) => {
                setForm((f) => ({ ...f, message: e.target.value }));
                if (errors.message) setErrors((errs) => ({ ...errs, message: "" }));
              }}
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-base resize-y"
            />
            {errors.message && (
              <p className="mt-1.5 text-sm font-medium text-red-600 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold text-base hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
          >
            {status === "sending" ? (
              <span>Sending Message...</span>
            ) : (
              <>
                <span>Send Message</span>
                <MdSend size={18} />
              </>
            )}
          </button>

          {statusMessage && (
            <div
              className={`p-4 rounded-xl text-sm font-medium ${status === "success"
                ? "bg-green-50 text-green-800 dark:bg-green-950/40 dark:text-green-300 border border-green-200 dark:border-green-800"
                : "bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-300 border border-red-200 dark:border-red-800"
                }`}
            >
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
