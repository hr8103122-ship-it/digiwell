import Announcements from "@/components/home/Announcements";
import Contact from "@/components/home/Contact";
import Courses from "@/components/home/Courses";
import DemoBanner from "@/components/home/DemoBanner";
import FAQ from "@/components/home/FAQ";
import Faculty from "@/components/home/Faculty";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";
import MainLayout from "@/components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <Courses />
      <WhyChoose />
      <Testimonials />
      <Faculty />
      <Gallery />
      <DemoBanner />
      <Announcements />
      <FAQ />
      <Contact />
    </MainLayout>
  );
}
