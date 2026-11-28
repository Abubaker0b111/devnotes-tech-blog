"use client";

import { useState } from "react";
import Button from "./Button";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

interface ContactFormProps {
  subjects: string[];
}

const emptyForm: FormData = { name: "", email: "", subject: "", message: "" };

export default function ContactForm({ subjects }: ContactFormProps) {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedName, setSubmittedName] = useState("");

  function handleChange(field: keyof FormData, value: string) {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  }

  function inputClass(hasError: boolean): string {
    const border = hasError ? "border-red-500" : "border-slate-300";
    return `w-full rounded-lg border bg-white px-3 py-2 text-sm ${border}`;
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (form.subject === "") {
      newErrors.subject = "Please choose a subject.";
    }
    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSubmittedName(form.name.trim());
    setForm(emptyForm);
  }

  if (submittedName) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6">
        <h2 className="text-xl font-semibold text-green-800">Message sent!</h2>
        <p className="mt-2 text-green-700">
          Thank you, {submittedName}. We will get back to you soon.
        </p>
        <div className="mt-4">
          <Button label="Send another message" variant="secondary" onClick={() => setSubmittedName("")} />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6">
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={inputClass(!!errors.name)}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputClass(!!errors.email)}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1 block text-sm font-medium text-slate-700">
          Subject
        </label>
        <select
          id="contact-subject"
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={inputClass(!!errors.subject)}
        >
          <option value="">Select a subject</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={inputClass(!!errors.message)}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <div>
        <Button label="Send Message" type="submit" />
      </div>
    </form>
  );
}
