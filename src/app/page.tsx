import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import MembershipCTASection from "@/components/sections/MembershipCTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      {/* <ActivitiesSection /> */}
      {/* <MembershipSection /> */}
      <MembershipCTASection />
      {/* <GallerySection /> */}
      <ContactSection />
    </div>
  );
}
