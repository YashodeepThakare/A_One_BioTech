import Hero from "@/Components/Home/hero";
import About from "@/Components/Home/about";
import Ecosystem from "@/Components/Home/ecosystem";
import BioTechLab from "@/Components/Home/biotechlab";
import Nursery from "@/Components/Home/nursery";
import Signature from "@/Components/Home/signature";
import Gallery from "@/Components/Home/gallery";
import Corona from "@/Components/Home/corona";
import Team from "@/Components/Home/Team";
import Faqs from "@/Components/Home/Faqs";
import Contact from "@/Components/Home/contact";
import Footer from "@/Components/Home/footer";

export const metadata = {
  title: "A-One Biotech | Engineering the Future of Green Life",
  description:
    "From advanced plant tissue culture to large-scale mass propagation and green infrastructure, A-One Biotech delivers innovative biotechnology solutions for a sustainable tomorrow.",
  keywords:
    "biotechnology, plant tissue culture, mass propagation, green infrastructure, nursery, ornamental plants, sustainable agriculture",
};

export default function Home() {
  return (
    <main className="w-full relative bg-white">
      <div className="w-full overflow-hidden flex flex-col min-h-screen">
        <Hero />
        <About />
        <Ecosystem />
        <BioTechLab />
        <Nursery />
        <Signature />
        <Gallery />
        <Corona />
        <Team />
        <Faqs />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
