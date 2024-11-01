import React from "react";
import { useEffect } from "react";
import { BsAlarm } from "react-icons/bs";
import imageOne from "../../image/homeImg/d77978a2e5ff892c935ba1afb6e31a5e.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

function ScheduleHeroSection() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className=" relative  pt-[151px] flex flex-col justify-center items-start h-auto  w-full ">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] py-[110px] at500:px-[72px] my-0 mx-auto">
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
            <div className="relative flex gap-[10px] flex-col justify-start items-start h-auto sm:h-[320px]  w-full md:w-[456px]">
              <h4 className="text-white !font-[800] ">Who is Talking?</h4>
              <span className="font-[84] text-[#E1E6ED] text-[16px] leading-[24px]">
                Meet some of the speakers who will take the stage at Conference.
                Envision yourself immersed in new ideas and perspectives,
                sparking your imagination with new possibilities for the future.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScheduleHeroSection;
