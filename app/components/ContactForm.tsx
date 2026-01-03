
"use client";

import { useMemo, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Project Inquiry - Khanna Architects");
    const body = encodeURIComponent(
      `Hi Khanna Architects,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Message:\n${message}\n\n` +
        `Thanks,\n${name || ""}`
    );
    return `mailto:Contactskhanna@yahoo.com?subject=${subject}&body=${body}`;
  }, [name, email, phone, message]);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="grid gap-2">
        <label className="text-sm text-black/70">Name *</label>
        <input
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-black/70">Email address *</label>
        <input
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          placeholder="you@email.com"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-black/70">Phone number *</label>
        <input
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="+91 ..."
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-black/70">Message</label>
        <textarea
          className="min-h-[120px] w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project (location, plot size, timeline)..."
        />
      </div>

      <div className="flex items-start gap-2">
        <input required type="checkbox" className="mt-1" />
        <p className="text-xs text-black/60">
          I allow this website to store my submission so they can respond to my inquiry. *
        </p>
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90"
      >
        Submit
      </button>

      <p className="text-xs text-black/50">
        This will open your email app to send the message.
      </p>
    </form>
  );
}
