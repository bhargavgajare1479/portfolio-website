"use client"
import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Lexend, Outfit } from "next/font/google";
import { useState } from "react";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";

const lexend = Lexend({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

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
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = "Invalid email address.";
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
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again later.");
      }
    } catch {
      setStatus("Failed to send. Try again later.");
    }
  }

  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className={`mt-12 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center ${lexend.className}`}>Contact Me</h1>
        <p className={`mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground ${outfit.className}`}>Let&apos;s connect and create something amazing together.</p>
        <form onSubmit={handleSubmit} className={`mt-10 max-w-lg mx-auto flex flex-col gap-6 bg-background border border-border rounded-xl shadow-md p-6 ${outfit.className}`}>
          <div>
            <label className={`block mb-1 font-semibold ${outfit.className}`}>Name</label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${outfit.className}`}
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
            {errors.name && <p className={`text-red-500 text-sm mt-1 ${outfit.className}`}>{errors.name}</p>}
          </div>
          <div>
            <label className={`block mb-1 font-semibold ${outfit.className}`}>Email</label>
            <input
              type="email"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${outfit.className}`}
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
            {errors.email && <p className={`text-red-500 text-sm mt-1 ${outfit.className}`}>{errors.email}</p>}
          </div>
          <div>
            <label className={`block mb-1 font-semibold ${outfit.className}`}>Message</label>
            <textarea
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring min-h-[120px] ${outfit.className}`}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
            {errors.message && <p className={`text-red-500 text-sm mt-1 ${outfit.className}`}>{errors.message}</p>}
          </div>
          <button type="submit" className={`mt-2 px-6 py-2 rounded bg-primary text-primary-foreground font-bold ${outfit.className}`}>Submit</button>
          {status && <p className={`text-center mt-2 text-sm ${outfit.className}`}>{status}</p>}
        </form>
      </motion.div>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
} 