import Navbar from "./components/navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 ">
      <Navbar />
      <main className="relative z-10 mx-auto w-full px-4 py-20 sm:px-8 lg:px-16">
        <div className="px-0 sm:px-20 lg:px-30">
          <Hero />
        </div>
      </main>

      <div className="circle-designtop" />
      <div className="circle-designleft" />
      <div className="circle-designright" />
    </div>
  );
}
