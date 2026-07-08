import ClientsSection from "@/components/layout/ClientSection";
import ContactForm from "@/components/layout/ContactForm";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import FeaturesSection from "@/components/sections/servicios/featuresSection";
import HeroServicios from "@/components/sections/servicios/heroServicios";
import ServiceAbout from "@/components/sections/servicios/serviciesAbout";
import MoreServicesSection from "@/components/sections/servicios/MoreServicesSection";

export default function Servicios() {
  return (
    <main>
      <ServiceAbout></ServiceAbout>
      <FeaturesSection></FeaturesSection>
      <MoreServicesSection />
      <ProjectsSection/>
      <ClientsSection/>
      <ContactForm></ContactForm>

    </main>
  );
}