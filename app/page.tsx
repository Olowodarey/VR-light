import Navbar from "./components/navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <Navbar />
      <main className="relative z-10 mx-auto w-full px-4 py-20 sm:px-8 lg:px-16">
        <div className="px-0 sm:px-2 lg:px-4">
          <Hero />
        </div>
      </main>

      

      <div className="circle-designtop" />
    </div>
  );
}
