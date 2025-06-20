import Image from "next/image";
import ServiceSection from "./section/ServiceSection";
import CoatOfArmSection from "./section/CoatOfArmSection";
import Section from "./component/Section";
import WhyChooseUs from "./section/WhyChooseUs";
import IntroduceSection from "./section/IntroduceSection";
import Hero from "./section/Hero";
import Navbar from "./component/Navbar";
import BlogSection from "./section/BlogSection";
import ClientFeedBackSection from "./section/ClientFeedBackSection";
import ReadyToWorkSection from "./section/ReadyToWorkSection";
import Footer from "./section/Footer";

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
