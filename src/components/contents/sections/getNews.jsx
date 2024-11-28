import React from "react";
import { useEffect } from "react";
import shape1 from "../image/shapes/Frame-1.png";
import shape2 from "../image/shapes/Frame2.png";
import shape from "../image/shapes/Frame 11686560754.png";
import logo from "../image/logo/8e1d23d6755ed3efab7ae67d16b117c0.png";
import shadowbackground from "../image/homeImg/PH CITY WOMEN RUN.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../Button";

function LatestNews() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className=" relative flex justify-center items-center w-full h-auto ">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[70px] at500:px-[72px] my-0 mx-auto">
          <div
            data-aos="zoom-in"
            className="bg-[#7D1517] relative flex  justify-center items-center h-[307px] w-full rounded-[16px]  overflow-hidden"
          >
            <img className="w-full object-cover h-full" src={shape1} alt="" />
            <img className="w-full object-cover h-full" src={shape2} alt="" />
            <div className=" absolute flex gap-[20px] flex-col justify-center items-center w-full  px-[15px]">
              <span className="text-[#FFFFFF] text-center !text-[20px] at500:!text-[40px] txt9">
                GET THE LATEST NEWS
              </span>
              <p className="font-Galano text-[16px] text-center text-[#FFFFFF] leading-[24px]">
                In the event you have any questions, Kindy reach out to us and
                we will have this worked out for you
              </p>
              <div className="flex flex-col justify-center items-center at500:flex-row gap-3 w-full">
                <div className="flex w-full sm:w-[327px]">
                  <input
                    className="w-full h-[44px] rounded-[6px] border placeholder:italic placeholder:text-slate-400 shadow-sm px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    type="text"
                    placeholder="Enter email"
                  />
                </div>
                <div className="flex justify-start w-full at500:max-w-[142px]">
                  <Button size="cdn" className="">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNews;
