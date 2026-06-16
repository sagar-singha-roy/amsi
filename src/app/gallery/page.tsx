import GallerySection from "@/components/sections/GallerySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | AMSI India",
  description:
    "Visual highlights of events, activities, and conferences organized by the Asset Management Society, India.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-20">
      <GallerySection />
    </div>
  );
}
