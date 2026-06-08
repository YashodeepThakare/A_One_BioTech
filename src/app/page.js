import Hero from "@/Components/Home/hero";
import About from "@/Components/Home/about";
import Ecosystem from "@/Components/Home/ecosystem";
import BioTechLab from "@/Components/Home/biotechlab";
import Nursery from "@/Components/Home/nursery";

export const metadata = {
  title: "A-One Biotech | Engineering the Future of Green Life",
  description:
    "From advanced plant tissue culture to large-scale mass propagation and green infrastructure, A-One Biotech delivers innovative biotechnology solutions for a sustainable tomorrow.",
  keywords:
    "biotechnology, plant tissue culture, mass propagation, green infrastructure, nursery, ornamental plants, sustainable agriculture",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Ecosystem />
      <BioTechLab />
      <Nursery />
    </main>
  );
}
