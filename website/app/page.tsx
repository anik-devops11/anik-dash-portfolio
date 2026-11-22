import HeroSection from "@/components/sections/HeroSection";
import IdentitySection from "@/components/sections/IdentitySection";
import MetricsSection from "@/components/sections/MetricsSection";
import FlagshipSection from "@/components/sections/FlagshipSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* 01: Hero / Overview */}
      <HeroSection />

      {/* 02: Identity & Dual Discipline */}
      <IdentitySection />

      {/* 03: Scale & Operational Impact */}
      <MetricsSection />

      {/* 04: Flagship Multi-Outlet Case Study */}
      <FlagshipSection />

      {/* 05: Career Evolution Timeline (2019-2026) */}
      <TimelineSection />

      {/* 06: Systems Topology & Capabilities Matrix */}
      <ArchitectureSection />

      {/* 07: Featured Production Projects */}
      <ProjectsSection />

      {/* 08: Verified Industry Credentials */}
      <CredentialsSection />

      {/* 09: Contact Terminal & Footer */}
      <ContactSection />
    </>
  );
}
