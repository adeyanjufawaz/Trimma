import Image from "next/image";
import ServiceSection from "./pages/homepage/section/ServiceSection";
import CoatOfArmSection from "./pages/homepage/section/CoatOfArmSection";
import Section from "./component/homepage/Section";
import WhyChooseUs from "./pages/homepage/section/WhyChooseUs";
import IntroduceSection from "./pages/homepage/section/IntroduceSection";
import Hero from "./pages/homepage/section/Hero";
import BlogSection from "./pages/homepage/section/BlogSection";
import ClientFeedBackSection from "./pages/homepage/section/ClientFeedBackSection";
import ReadyToWorkSection from "./pages/homepage/section/ReadyToWorkSection";
import Footer from "./pages/homepage/section/Footer";
import Navbar from "./component/homepage/Navbar";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col justify-center items-center">
        <Section>
          <Navbar />
        </Section>

        <Section bgColor="bg-[#CBDCEB]">
          <Hero />
        </Section>

        <Section>
          <CoatOfArmSection />
        </Section>

        <Section bgColor="bg-offwhite">
          <ServiceSection />
        </Section>

        <Section>
          <WhyChooseUs />
        </Section>

        <Section>
          <IntroduceSection />
        </Section>

        <Section bgColor="bg-pry-light">
          <BlogSection />
        </Section>

        <Section>
          <ClientFeedBackSection />
        </Section>

        <Section>
          <ReadyToWorkSection />
        </Section>

        <Section>
          <Footer/>
        </Section>
      </main>
    </div>
  );
}
