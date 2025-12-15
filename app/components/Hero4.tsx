import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    title: "starstarstar",
    quote:
      "I know in real-time where the money is spent, and I don't have to lend out the company's credit card anymore. What a relief!",
    name: "Denny Hilguston",
    handle: "@denny.hill",
    avatar: "/avatars/denny.png",
    gradient: "from-[#4F3C9A] to-[#2C174E]",
  },
  {
    id: 2,
    title: "starstarstar",
    quote:
      "VISUALS are much better. The improvements in optics and resolution add much more than a modern console generation leap.",
    name: "Vani Pandey",
    handle: "@vani.pandey",
    avatar: "/avatars/vani.png",
    gradient: "from-[#5F2AAE] to-[#30104F]",
  },
  {
    id: 3,
    title: "starstarstar",
    quote:
      "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
    name: "Milly Singh",
    handle: "@milly.singh",
    avatar: "/avatars/milly.png",
    gradient: "from-[#8B2AD3] to-[#311057]",
  },
];

const Hero4 = () => {
  return (
    <section className="relative w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="relative flex min-h-[420px] flex-col justify-between rounded-[32px] bg-gradient-to-b from-[#4F3C9A] to-[#2C174E] px-5 py-8 text-center text-white sm:px-10 sm:py-10 md:h-[420px]">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <span className="font-heading text-xs uppercase tracking-[0.4em] text-purple-300/70 sm:text-sm">
              Testimonials
            </span>
            <h2 className="font-heading text-2xl leading-tight sm:text-4xl lg:text-5xl">
              What our clients say
            </h2>
            <p className="max-w-2xl text-xs font-paragraph text-slate-200/80 sm:text-sm">
              See what our customer say about us. It really matter for us. How good
              or bad we will make it for evaluation to make EhyalLive better.
            </p>
          </div>

          <div className="mt-6 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.id}
                className={`relative flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-linear-to-br ${item.gradient} p-5 text-left shadow-[0_18px_40px_RGBA(58,36,115,0.35)] transition-transform duration-300 hover:-translate-y-2 sm:p-6`}
              >
                <div>
                  <p className="font-heading text-xs uppercase tracking-[0.35em] text-amber-300 sm:text-sm">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-100 sm:mt-4">
                    {item.quote}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-3 sm:mt-6">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-sm text-white">{item.name}</p>
                    <p className="text-xs text-pink-200">{item.handle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
