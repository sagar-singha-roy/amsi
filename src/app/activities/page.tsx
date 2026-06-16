import ActivitiesSection from "@/components/sections/ActivitiesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Management Activities | AMSI India",
  description:
    "Explore upcoming and past activities, workshops, training sessions, and educational programs organized by the Asset Management Society, India.",
};

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <ActivitiesSection />
    </div>
  );
}