import React from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import image from "../../image/homeImg/960090c547af153fd56f4347f0a31e30.jpeg";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "../../link";

function Leader() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <section className="relative pt-[51px] bg-white flex justify-center items-center w-full h-auto ">
        <div className="static gap-[40px] flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[190px] at500:px-[72px] my-0 mx-auto">
          <div className=" flex flex-col at594:flex-row gap-[20px] at594:items-center justify-between w-full ">
            <div className="flex justify-center items-center h-[48px] w-full max-w-[322px] px-[20px] border-[1px] shadow-lg border-[#171B1E33] rounded-[8px] overflow-hidden">
              <input
                className="bg-none h-[48px] w-full focus:outline-none "
                type="text"
                name="search"
                placeholder="Search event name etc"
                id=""
              />
              <span className=" flex justify-center items-center gap-[10px] pl-[13px] border-l-[2px]  border-[#E1E6ED] text-[#8D12AB]">
                <FaSearch />
                Search
              </span>
            </div>
            <div>
              <select
                className="flex justify-center items-center h-[40px] px-[13px] border-[1px] shadow-lg border-[#171B1E33] text-[#8D12AB] rounded-[8px]"
                id="events"
                name="events"
              >
                <option value="All">All</option>
                <option value="Less">Less</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="flex gap-[50px] flex-col justify-center items-center w-full overflow-y-scroll h-[900px] ">
            <div className="flex gap-[50px] flex-col justify-center items-center w-full">
              <div
                data-aos="zoom-in"
                className="relative bg-white shadow-lg flex flex-col sm:flex-row justify-center items-center md:h-[384px] w-full h-auto rounded-[12px] overflow-hidden"
              >
                <div className="relative flex justify-start items-start h-auto w-full max:w-[603.26px]">
                  <LoadBlurHashImage
                    src={image}
                    blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                    className="w-full h-[516px] silver:w-[540px] object-cover "
                    alt="Discover Your Potential"
                  />
                </div>
                <div className="relative flex flex-col justify-center items-start sm:items-center gap-[20px] sm:gap-[22px] p-[20px] w-full ">
                  <div className="relative flex flex-col justify-center items-start gap-[20px] max-w-[300px]">
                    <div className="flex gap-[20px] flex-col justify-start items-start w-full">
                      <span className="text-[#353F50]">February, 2026</span>
                      <div>
                        <h5 className=" mb-[10px] text-[#111E2F]">
                          Couples Run
                        </h5>
                        <span className="text-[#4E5A6C]">Rumola Park</span>
                        <p className="text-[20px] leading-[24.8px] text-[#848F9F]">
                          PortHarcourt Nigeria
                        </p>
                      </div>
                    </div>
                    <Link to="/board">
                      <div className="flex group justify-start items-start w-full">
                        <span className=" flex justify-start items-center gap-[5px] group-hover:text-[#848F9F] text-[#8D12AB]">
                          View Leaderboard
                          <GoChevronRight className=" relative top-0 text-[#8D12AB] group-hover:right-[-8px] group-hover:text-[#848F9F] w-[20px]" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div
                data-aos="zoom-in"
                className="relative bg-white shadow-lg flex flex-col sm:flex-row justify-center items-center md:h-[384px] w-full h-auto rounded-[12px] overflow-hidden"
              >
                <div className="relative flex justify-start items-start h-auto w-full max:w-[603.26px]">
                  <LoadBlurHashImage
                    src={image}
                    blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                    className="w-full h-[516px] silver:w-[540px] object-cover "
                    alt="Discover Your Potential"
                  />
                </div>
                <div className="relative flex flex-col justify-center items-start sm:items-center gap-[20px] sm:gap-[22px] p-[20px] w-full ">
                  <div className="relative flex flex-col justify-center items-start gap-[20px] max-w-[300px]">
                    <div className="flex gap-[20px] flex-col justify-start items-start w-full">
                      <span className="text-[#353F50]">February, 2026</span>
                      <div>
                        <h5 className=" mb-[10px] text-[#111E2F]">
                          Couples Run
                        </h5>
                        <span className="text-[#4E5A6C]">Rumola Park</span>
                        <p className="text-[20px] leading-[24.8px] text-[#848F9F]">
                          PortHarcourt Nigeria
                        </p>
                      </div>
                    </div>
                    <Link to="/">
                      <div className="flex group justify-start items-start w-full">
                        <span className=" flex justify-start items-center gap-[5px] group-hover:text-[#848F9F] text-[#8D12AB]">
                          View Leaderboard
                          <GoChevronRight className=" relative top-0 text-[#8D12AB] group-hover:right-[-8px] group-hover:text-[#848F9F] w-[20px]" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                className="relative bg-white shadow-lg flex flex-col sm:flex-row justify-center items-center md:h-[384px] w-full h-auto rounded-[12px] overflow-hidden"
              >
                <div className="relative flex justify-start items-start h-auto w-full max:w-[603.26px]">
                  <LoadBlurHashImage
                    src={image}
                    blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                    className="w-full h-[516px] silver:w-[540px] object-cover "
                    alt="Discover Your Potential"
                  />
                </div>
                <div className="relative flex flex-col justify-center items-start sm:items-center gap-[20px] sm:gap-[22px] p-[20px] w-full ">
                  <div className="relative flex flex-col justify-center items-start gap-[20px] max-w-[300px]">
                    <div className="flex gap-[20px] flex-col justify-start items-start w-full">
                      <span className="text-[#353F50]">February, 2026</span>
                      <div>
                        <h5 className=" mb-[10px] text-[#111E2F]">
                          Couples Run
                        </h5>
                        <span className="text-[#4E5A6C]">Rumola Park</span>
                        <p className="text-[20px] leading-[24.8px] text-[#848F9F]">
                          PortHarcourt Nigeria
                        </p>
                      </div>
                    </div>
                    <Link to="/">
                      <div className="flex group justify-start items-start w-full">
                        <span className=" flex justify-start items-center gap-[5px] group-hover:text-[#848F9F] text-[#8D12AB]">
                          View Leaderboard
                          <GoChevronRight className=" relative top-0 text-[#8D12AB] group-hover:right-[-8px] group-hover:text-[#848F9F] w-[20px]" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                className="relative bg-white shadow-lg flex flex-col sm:flex-row justify-center items-center md:h-[384px] w-full h-auto rounded-[12px] overflow-hidden"
              >
                <div className="relative flex justify-start items-start h-auto w-full max:w-[603.26px]">
                  <LoadBlurHashImage
                    src={image}
                    blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                    className="w-full h-[516px] silver:w-[540px] object-cover "
                    alt="Discover Your Potential"
                  />
                </div>
                <div className="relative flex flex-col justify-center items-start sm:items-center gap-[20px] sm:gap-[22px] p-[20px] w-full ">
                  <div className="relative flex flex-col justify-center items-start gap-[20px] max-w-[300px]">
                    <div className="flex gap-[20px] flex-col justify-start items-start w-full">
                      <span className="text-[#353F50]">February, 2026</span>
                      <div>
                        <h5 className=" mb-[10px] text-[#111E2F]">
                          Couples Run
                        </h5>
                        <span className="text-[#4E5A6C]">Rumola Park</span>
                        <p className="text-[20px] leading-[24.8px] text-[#848F9F]">
                          PortHarcourt Nigeria
                        </p>
                      </div>
                    </div>
                    <Link to="/">
                      <div className="flex group justify-start items-start w-full">
                        <span className=" flex justify-start items-center gap-[5px] group-hover:text-[#848F9F] text-[#8D12AB]">
                          View Leaderboard
                          <GoChevronRight className=" relative top-0 text-[#8D12AB] group-hover:right-[-8px] group-hover:text-[#848F9F] w-[20px]" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leader;
