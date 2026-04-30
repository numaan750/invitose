import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { altFromSrcOrAlt } from "@/lib/altText";

const Home = ({ hero, country }) => {
  return (
    <section
      id="home"
      className="bg-[#FFFFFF] text-black min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="mycontainer flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 max-w-xl text-start md:text-left relative z-10 mt-5">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold leading-tight">
            {hero?.title}{" "}
            <span className="bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
              {hero?.subTitle}
            </span>
          </h1>

          <p className="text-black text-[18px] sm:text-[24px] leading-relaxed ">
            {hero?.description}
          </p>

          <div className="flex justify-start md:justify-start">
            <a
              href="https://apps.apple.com/us/app/inviteos-ai-invitation-maker/id6755988566"
              target="blank"
            >
              <button className="inline-flex cursor-pointer items-center justify-center gap-3 bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] text-white font-medium px-5 sm:px-2 py-2 rounded-full  w-fit transition-transform duration-300 hover:scale-105">
                <span className="text-[14px] sm:text-[16px] ml-3">
                  {hero?.buttonText}
                </span>

                <div className="bg-[#FFFFFF] rounded-full p-2 text-[#FF6B81] ml-3">
                  <FaArrowRight />
                </div>
              </button>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end relative z-10 ">
          <Image
            src={hero?.image}
            alt={altFromSrcOrAlt({
              alt: hero?.alt,
              src: hero?.image,
              locale: country,
            })}
            width={500}
            height={500}
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 500px"
            className="w-auto max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
