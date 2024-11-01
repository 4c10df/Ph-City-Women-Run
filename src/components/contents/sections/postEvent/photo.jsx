import React from "react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import image from "../../image/homeImg/960090c547af153fd56f4347f0a31e30.jpeg";
import logo from "../../image/logo/156a5363dc0856d3728fb5e10c7538f4.png";
import logo2 from "../../image/logo/TRADEMARKED PH CITY WOMEN PNG 1 3.png";
// import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "../../link";

function Photos() {

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-white flex justify-center items-center w-full h-auto ">
        <nav className="fixed top-[86px] z-[999] bg-[#F9FBFC] flex justify-center items-center h-[64px] w-full my-[16px]">
          <div className="relative flex justify-center items-center w-full 2xl:w-[1280px] px-[15px] py-[16px] at500:px-[72px] mx-auto">
            <div className="relative w-full flex md:flex-row justify-between items-center">
              <ul className="flex justify-between items-center space-x-4 w-full">
                <Link className="flex w-full " to="/post-events">
                  <li className="relative group flex gap-[10px] capitalize items-center text-[#05284C] py-[10px] pr-[10px]">
                    <FaArrowLeft className=" relative top-0 text-[#353F50] group-hover:text-[#8D12AB] w-[20px]" />
                    <span className=" text-[#353F50] group-hover:text-[#8D12AB]">
                      Back to all Gallery
                    </span>
                  </li>
                </Link>
                <Link className="flex w-full " to="/post-events">
                  <li className="relative flex gap-[10px] capitalize items-center text-[#05284C] py-[10px] pr-[10px]">
                    <span className=" text-[#8C12AB] hover:text-[#353F50]">
                      View Leaderboard
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <div className="static gap-[40px] flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[190px] at500:px-[72px] my-0 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-4 gap-x-3">
            <div className="relative flex justify-start items-start h-auto w-full overflow-hidden">
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-[303px] rounded-[24px] object-cover "
                alt="Discover Your Potential"
              />
            </div>
            <div className="relative flex justify-start items-start h-auto w-full overflow-hidden">
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-[303px] rounded-[24px] object-cover "
                alt="Discover Your Potential"
              />
            </div>
            <div className="relative flex justify-start items-start h-auto w-full overflow-hidden">
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-[303px] rounded-[24px] object-cover "
                alt="Discover Your Potential"
              />
            </div>
            <div className="relative flex justify-start items-start h-auto w-full overflow-hidden">
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-[303px] rounded-[24px] object-cover "
                alt="Discover Your Potential"
              />
            </div>
          </div>
          <div>
            <div>
              <div>
                <img className="h-auto w-[26.91px]" src={logo} alt="" />
                <h4>PH City Women’s Run</h4>

                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute z-0">
          <img
            className=" w-full object-cover z-0"
            src={shadowbackground}
            alt="background"
          />
        </div>
      </section>
    </>
  );
}

export default Photos;
