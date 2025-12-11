import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 ">
      <Navbar />
      <main className="relative z-10 mx-auto w-full px-4 py-20 sm:px-8 lg:px-16">
        <div className="px-0 sm:px-20 lg:px-30">
          <Hero />
          <Hero2 />
          <Hero3 />
          <Hero4 />
        </div>
      </main>

      <div className="circle-designtop" />
      <div className="circle-designleft" />
     
    </div>
  );
}
