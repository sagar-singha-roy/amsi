import MembershipSection from "@/components/sections/MembershipSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMSI Membership | Join Our Community",
  description:
    "Join the Asset Management Society, India. Explore membership classes, benefits, and fee structures for students, individuals, and corporations.",
};

export default function MembershipPage() {
  return (
    <div className="min-h-screen pt-20">
      <MembershipSection />
    </div>
  );
}