import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
        <div className="space-y-6">
         
         <h1 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
           Let&apos;s Explore Three-Dimensional Visual
         </h1>
         <p className="max-w-xl font-paragraph text-slate-200/80 sm:text-lg">
           With virtual technology you can see the digital world feel more real and you can play the
           game with a new style.
         </p>
       </div>

       <div className="flex flex-wrap items-center gap-4 sm:gap-6">
         <button className="rounded-lg bg-linear-to-r from-pink-500 to-purple-500 px-6 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(225,29,72,0.35)] transition-transform duration-300 hover:scale-[1.03]">
           Get it Now
         </button>
         <button className="rounded-lg border border-white/15 px-6 py-2 text-sm font-semibold text-white transition hover:border-pink-400 hover:text-pink-400">
           Explore Device
         </button>
       </div>

       <div className="flex flex-wrap items-center gap-4">
         <div className="flex -space-x-3">
           {[
             "/hero/Ellipse 1.png",
             "/hero/Ellipse 2.png",
             "/hero/Ellipse 3.png",
             "/hero/Ellipse 4.png",
           ].map((src, index) => (
             <div key={src} className="h-12 w-12 overflow-hidden rounded-full border border-slate-900">
               <Image
                 src={src}
                 alt={`Community member ${index + 1}`}
                 width={48}
                 height={48}
                 className="h-full w-full object-cover"
                 priority
               />
             </div>
           ))}
         </div>
         <p className="text-sm text-slate-200/80">
           <span className="text-white">400k+</span> people online
         </p>
       </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;