import React from "react";
import { useEffect } from "react";
import logoOne from "../../image/logo/c1d692ddb15406642e43a33e0fc1c23e.png";
import logoTwo from "../../image/logo/47c6482ff55474d3e027fa9031665023.png";
import logoThree from "../../image/logo/b0b1af108d2e2689d1d674880fbe5c77.png";
import logofour from "../../image/logo/9ab71b9b81bed1d6a8cf79dfc1eb4cce.png";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shape2 from "../../image/shapes/Frame 11686560754.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Button from "../../Button";

function PartnersSection() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-[#F9FBFC] flex justify-center items-center w-full h-auto sm:h-[342px] overflow-hidden">
        <div className="static gap-[24px] flex flex-col justify-center items-start w-full max-w-[1280px] px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <h4 className=" text-[#111E2F] !leading-[52px]">
            Strategic Partners
          </h4>
          <div className=" grid grid-cols-1 md:grid-cols-2 items-center w-full gap-x-5 gap-y-5">
            <img
              className="h-[64px] w-[228.57px] object-contain"
              src={logoOne}
              alt=""
            />
            <img
              className="h-[64px] w-[54.36px] object-contain"
              src={logoTwo}
              alt=""
            />
            <img
              className="h-[64px] w-[130.03px] object-contain"
              src={logoThree}
              alt=""
            />
            <img
              className="h-[56px] w-[253.73px] object-contain"
              src={logofour}
              alt=""
            />
          </div>

          <img
            className=" absolute left-0 top-[26px] h-[480.07px] w-[150.41px] object-contain"
            src={shape1}
            alt="shape"
          />
          <div className=" absolute  top-[265px] flex justify-end items-end sm:w-[700px]">
            <img
              className="  h-[480.07px] w-[150.41px] object-contain"
              src={shape2}
              alt="shape"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnersSection;
