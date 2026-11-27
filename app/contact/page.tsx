import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact | DevNotes",
  description: "Send a message to the DevNotes team or suggest a topic for a new post.",
};

const subjects = ["Suggest a topic", "Write for us", "Report a mistake", "Other"];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="Contact Us" subtitle="Have a question or a topic idea? Send us a message." />
      <ContactForm subjects={subjects} />
    </div>
  );
}
