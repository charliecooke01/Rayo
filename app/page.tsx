import Hero from "@/components/homes/home-personal-portfolio/Hero";
import About from "@/components/homes/home-web-agency/About";
import Services from "@/components/homes/home-web-agency/Services";
import Blogs3 from "@/components/blogs/Blogs3";
import TechStacks from "@/components/homes/home-software-development-company/TechStacks";
import Projects from "@/components/homes/home-creative-design-studio/Projects";
import Footer1 from "@/components/footers/Footer1";
import MarqueeSection2 from "@/components/homes/home-1/MarqueeSection2";
import Partners from "@/components/other-pages/Partners";
import Cta from "@/components/common/Cta";
import PreviewPage from "./preview/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Preview || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MarqueeSection2 />
      <Partners />
      <Services />
      <Blogs3 />
      <TechStacks />
      <Projects />
      <About />
      <Cta />
      <Footer1 />
      {/* <PreviewPage /> */}
    </>
  );
}
