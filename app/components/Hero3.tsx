import React from "react";
import Image from "next/image";
const Hero3 = () => {
  return (
    <section className="w-full">
      <div className="flex min-h-screen flex-col justify-center px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="font-heading text-xl leading-tight text-white sm:text-3xl">
          Mixed Reality Headsets
        </h2>
        <div className="mt-10 grid h-[50vh] w-full grid-cols-1 gap-6 lg:h-[50vh] lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-t-3xl">
            <Image
              src="/hero/vr31.png"
              alt="VR controller"
              fill
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 w-[65%] max-w-xs   bg-white/10 p-4 text-white shadow-xl backdrop-blur-xl sm:bottom-0 sm:left-0 sm:w-auto sm:max-w-sm sm:p-5 lg:p-6">
              <p className="font-heading text-xs font-bold uppercase  underline tracking-wide text-white/80 sm:text-sm">
                Metaverse
              </p>
              <p className="font-paragraph mt-2 text-[11px] leading-relaxed text-white/70 sm:text-xs">
                A network of 3D virtual worlds focused on social connection.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-t-3xl">
            <Image
              src="/hero/vr32.png"
              alt="VR controller"
              fill
              className="h-full w-full object-cover"
              priority
            />

            <div className="absolute bottom-0 left-0 w-[65%] max-w-xs   bg-white/10 p-4 text-white shadow-xl backdrop-blur-xl sm:bottom-0 sm:left-0 sm:w-auto sm:max-w-sm sm:p-5 lg:p-6">
              <p className="font-heading text-xs font-bold uppercase underline tracking-wide text-white/80 sm:text-sm">
                Aiot
              </p>
              <p className="font-paragraph mt-2 text-[11px] leading-relaxed text-white/70 sm:text-xs">
              AI and IoT are both emerging innovative technologies with a lot of potentials. 
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid h-[50vh] w-full grid-cols-1 gap-6 lg:h-[50vh] lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-t-3xl">
            <Image
              src="/hero/vr33.png"
              alt="VR controller"
              fill
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 w-[65%] max-w-xs   bg-white/10 p-4 text-white shadow-xl backdrop-blur-xl sm:bottom-0 sm:left-0 sm:w-auto sm:max-w-sm sm:p-5 lg:p-6">
              <p className="font-heading text-xs font-bold uppercase  underline tracking-wide text-white/80 sm:text-sm">
                Metaverse
              </p>
              <p className="font-paragraph mt-2 text-[11px] leading-relaxed text-white/70 sm:text-xs">
                A network of 3D virtual worlds focused on social connection.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-t-3xl">
            <Image
              src="/hero/vr34.png"
              alt="VR controller"
              fill
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 w-[65%] max-w-xs   bg-white/10 p-4 text-white shadow-xl backdrop-blur-xl sm:bottom-0 sm:left-0 sm:w-auto sm:max-w-sm sm:p-5 lg:p-6">
              <p className="font-heading text-xs font-bold uppercase  underline tracking-wide text-white/80 sm:text-sm">
                Metaverse
              </p>
              <p className="font-paragraph mt-2 text-[11px] leading-relaxed text-white/70 sm:text-xs">
                A network of 3D virtual worlds focused on social connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
