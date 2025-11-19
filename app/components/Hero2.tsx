import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-0">
      <div className="flex flex-col-reverse items-center gap-12 text-center lg:flex-row lg:items-start lg:text-left lg:gap-30">
        <div className="flex flex-wrap justify-center gap-10 lg:flex-nowrap lg:justify-start">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[180px] xl:w-[350px]">
            <Image
              src="/hero/v3.png"
              alt="Hero"
              width={600}
              height={440}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="mt-10 w-full max-w-xs sm:mt-12 sm:max-w-sm md:max-w-md lg:mt-[200px] lg:w-[180px] xl:w-[350px]">
            <Image
              src="/hero/v4.png"
              alt="Hero"
              width={600}
              height={440}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-6 text-center lg:mt-[300px] lg:items-start lg:gap-8 lg:text-left lg:pl-50">
          <h1 className="font-heading text-3xl leading-tight text-white text-center sm:text-5xl lg:text-5xl">
            New Experience In Playing Game
          </h1>
          <p className="mt-6 max-w-xl text-base font-paragraph text-slate-200/80 sm:text-lg lg:mt-10">
            You can try playing the game with a new style and of course a more
            real feel, like you are the main character in your game and
            adventure in this new digital world.
          </p>

          <button className="mt-6 self-center rounded-lg bg-linear-to-r from-pink-500 to-purple-500 px-6 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(225,29,72,0.35)] transition-transform duration-300 hover:scale-[1.03] lg:mt-8 lg:self-center">
            Get it Now
          </button>
        </div>
      </div>
      <div className="mt-16 flex w-full justify-center">
        <div
          className="flex w-full max-w-8xl flex-col-reverse items-center gap-6 rounded-[28px] border border-purple-400/50 bg-linear-to-r from-[#4f3c9a]/80 to-[#5c46b4]/80 p-6 text-center shadow-[0_18px_40px_rgba(58,36,115,0.35)] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8 sm:text-left"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 44px) 0, 100% 28px, 100% 100%, 0 100%)",
          }}
        >
          <div className="max-w-md">
            <h3 className="font-heading text-xl leading-snug text-white sm:text-2xl lg:text-[28px]">
              Awesome experiences with virtual reality world
            </h3>
          </div>

          <div className="shrink-0">
            <Image
              src="/hero/board.png"
              alt="VR controller"
              width={160}
              height={120}
              className="h-24 w-32 rounded-2xl border border-white/20 object-cover sm:h-28 sm:w-40"
              priority
            />
          </div>
        </div>
      </div>
      <div className="circle-designright" />
    </section>
  );
};

export default Hero2;
