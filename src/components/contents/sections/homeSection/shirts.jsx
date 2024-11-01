import React from "react";
import { useEffect } from "react";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
} from "react-icons/tb";
import imageOne from "../../image/homeImg/a011595e6083594c8f66c18651dfd68d.gif";
import shape1 from "../../image/shapes/Frame 11686560754.png";
import shape2 from "../../image/shapes/Frame 1686560676.png";
import logo from "../../image/logo/8e1d23d6755ed3efab7ae67d16b117c0.png";
import background from "../../image/homeImg/25dbce15b67310bc5bdc3dd552a7b6a2.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";
import ShirtSlider from "../../../slider/shirtSlide";

function ShirtsSection() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className=" relative bg-[#1F2126] flex flex-col justify-center items-center px-[20px] sm:px-[50px] h-auto w-full ">
        <div className="auto-container absolute top-[89px] flex justify-between items-center w-full overflow-hidden">
          <div className="flex relative bottom-[-301px] right-[38px] justify-start items-end h-auto w-full">
            <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative  justify-center items-center h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
          <div className="flex relative bottom-[-38px] left-[-61px]  justify-end items-end h-auto w-full">
            <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
          </div>
        </div>

        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px]  py-[50px] at500:px-[72px] my-0 mx-auto">
          <div className="relative z-10 flex flex-col justify-center items-start w-full  ">
            <div className="flex gap-[50px] z-20 flex-col lg:flex-row justify-between items-center w-full ">
              <div className="flex gap-[4px] flex-col justify-center items-start w-full ">
                <h1 className="text-white text-center lg:text-left">
                  Running Shirts Available
                </h1>
                <span className="font-[84] text-[16px] text-[#F9FBFC] leading-[24px] text-center lg:text-left lg:max-w-[376px]">
                  Just filling in some content till I decide what I want to fill
                  Into this space in THE mean time lets hold on to this text.
                  feeling like I have the masterplan you know
                </span>
              </div>
              <div className="flex justify-center items-center w-full ">
                <ShirtSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShirtsSection;
