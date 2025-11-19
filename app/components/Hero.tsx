import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:px-0">
      <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
        <div>
          <h1 className="font-heading text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Explore
          </h1>
          <h1 className="font-heading text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Three-Dimensional 
          </h1>
          <h1 className="font-heading text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Visual
          </h1>
          <p className="max-w-xl  text-sm font-paragraph text-slate-200/80 sm:text-lg mt-10">
            With virtual technology you can see the digital world feel more real
            and you can play the game with a new style.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6">
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
              <div
                key={src}
                className="h-12 w-12 overflow-hidden rounded-full border border-slate-900"
              >
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

      <div className="flex flex-col items-center gap-0 lg:items-end lg:gap-0">
        <div className=" -ml-[-200px] sm:-ml-12 lg:ml-0">
          <Image
            src="/hero/star.png"
            alt="Hero"
            width={550}
            height={500}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="relative  right-3 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] lg:left-7 lg:w-[530px] lg:max-w-none">
          <Image
            src="/hero/vrboy.png"
            alt="Hero"
            width={550}
            height={500}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="w-full max-w-[260px] -mt-25 rounded-b-[200px] bg-[#534686] p-6 text-center sm:max-w-[320px] sm:-mt-20 md:max-w-[360px] lg:w-[450px] lg:max-w-none lg:-mt-[160px] h-[300px] lg:h-[450px]">
          <div className="flex h-full flex-col items-center pt-12 sm:pt-16 lg:pt-[120px]">
            <h2 className="font-heading mt-8 text-xl leading-tight text-white sm:mt-5 sm:text-3xl">
              Cinematic Virtual Reality
            </h2>
            <div className="mt-4 h-[2px] w-32 rounded-full bg-white/80 sm:w-40 lg:w-48 lg:mt-6" />
            <p className="mt-6 text-xs leading-relaxed text-white/80 sm:mt-8 sm:text-sm lg:mt-10">
              Let&apos;s be the best for more real and effective results and
              ready to explore the limitless world that we have prepared for
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
