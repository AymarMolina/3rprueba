import ClientsSection from "@/components/layout/ClientSection";
import ContactForm from "@/components/layout/ContactForm";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import FeaturesSection from "@/components/sections/servicios/featuresSection";
import HeroServicios from "@/components/sections/servicios/heroServicios";
import ServiceAbout from "@/components/sections/servicios/serviciesAbout";
import MoreServicesSection from "@/components/sections/servicios/MoreServicesSection";
import { buildSpeakableWebPage } from "@/lib/seoSchemas";

export default async function Servicios({ params }: { params: any }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const speakableSchema = buildSpeakableWebPage({
    locale,
    path: "/servicios",
    nameEs: "Servicios de Marketing Digital — 3R Core",
    nameEn: "Digital Marketing Services — 3R Core",
    cssSelector: ["h1", "h2"],
  });

  // H1 oculto del índice de servicios (antes vivía en el layout y duplicaba
  // el H1 de cada página de servicio).
  const hiddenH1 = isEn
    ? 'Digital marketing services in Lima, Peru: branding, social media, Google Ads, SEO and web development'
    : 'Servicios de marketing digital en Lima, Perú: branding, redes sociales, Google Ads, SEO y desarrollo web';

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <h1 className="sr-only">{hiddenH1}</h1>
      <ServiceAbout></ServiceAbout>
      <FeaturesSection></FeaturesSection>
      <MoreServicesSection />
      <ProjectsSection/>
      <ClientsSection/>
      <ContactForm></ContactForm>

    </main>
  );
}