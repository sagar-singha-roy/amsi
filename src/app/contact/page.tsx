import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AMSI India",
  description:
    "Get in touch with the Asset Management Society, India for inquiries, membership, and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <ContactSection />
    </div>
  );
}
