import AboutSection from "@/components/sections/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AMSI India",
  description:
    "Learn about the journey of Asset Management Society, India (AMSI), our vision, mission, and international recognition.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutSection />
    </div>
  );
}