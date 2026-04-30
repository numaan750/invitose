"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { altFromSrcOrAlt } from "@/lib/altText";
import { MdOutlineArrowOutward } from "react-icons/md";

const Magicalcore = ({ magicalCore, country }) => {
  const pathname = usePathname();

  return (
    <section
      id="features"
      className="bg-[#FFFFFF] text-black pt-8 md:pt-12 relative overflow-hidden"
    >
      <div className="mycontainer flex flex-col gap-8 md:gap-10 relative z-10">
        {/* <div className="absolute inset-0 w-full h-full z-0 opacity-30">
          <Image
            src="/home-images/Starts.png"
            alt={altFromSrcOrAlt({ alt: "Starts.png", locale: country })}
            fill
            className="object-cover"
          />
        </div> */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          <h2 className="text-[24px] sm:text-[30px] md:text-[40px] font-bold">
            {magicalCore?.title}
          </h2>
          <p className="text-[16px] sm:text-[18px] max-w-md sm:max-w-3xl text-black">
            {magicalCore?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {magicalCore?.features?.map((feature, index) => (
            <div
              key={index}
              className="relative w-full rounded-2xl overflow-hidden"
            >
              <a
                href="https://apps.apple.com/us/app/inviteos-ai-invitation-maker/id6755988566"
                target="blank"
              >
                <Image
                  src={feature.Imge}
                  alt={altFromSrcOrAlt({
                    alt: feature.alt,
                    src: feature.Imge,
                    locale: country,
                  })}
                  width={700}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="w-[200px] md:w-[320px] flex items-center justify-between bg-[#AABFFF33] backdrop-blur-md px-2 py-1 md:px-2 md:py-2 rounded-full">
                    <span className="text-white text-sm sm:text-lg font-medium pl-2">
                      {feature.text}
                    </span>

                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full ">
                      <MdOutlineArrowOutward className="text-white text-lg" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Magicalcore;
