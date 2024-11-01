import React from "react";
import { useEffect } from "react";
import { BsAlarm } from "react-icons/bs";
import imageOne from "../../image/homeImg/d77978a2e5ff892c935ba1afb6e31a5e.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className=" relative  pt-[151px] flex flex-col justify-center items-start  h-auto w-full ">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px]  pt-[110px] pb-[20px] at500:px-[72px] my-0 mx-auto">
          <div
            className="relative flex flex-col justify-center items-start bg-cover px-[20px] sm:px-[50px] py-[100px] h-auto w-full at500:rounded-[24px]"
            style={{
              backgroundImage: `url(${imageOne})`,
              backgroundColor: "#00000099",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex gap-[40px] flex-col justify-start items-start w-full  h-auto sm:h-[320px] md:w-[456px]">
              <h4 className="text-white !font-[800] ">
                Take Centre Stage at PHCWR Conference
              </h4>
              <div className="flex flex-col gap-[8px] justify-center items-start bg-white max-w-[163px] rounded-[12px] py-[12px] px-[24px]">
                <div className="flex gap-[10px] justify-center items-center">
                  <BsAlarm size={24} className="text-[#5C176F]" />
                  <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                    9: 00 AM
                  </span>
                </div>
              </div>
              <div className="flex justify-start w-full at500:w-[201px]">
                <Button size="play" className="">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
