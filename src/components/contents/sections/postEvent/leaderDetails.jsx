import React from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import image from "../../image/homeImg/960090c547af153fd56f4347f0a31e30.jpeg";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import background1 from "../../image/post-events/ac4e9348299687ea69a98404978d2d78.jpeg";
import background2 from "../../image/post-events/547c649df6b2674687554695947447d3.jpeg";
import background3 from "../../image/post-events/f7094ac8c29d11aedc940c1bd7cef5fd.jpeg";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "../../link";

function LeaderDetails() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-white flex justify-center items-center w-full h-auto ">
        <div className="static gap-[40px] flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] pt-[230px] pb-[70px] at500:px-[72px] my-0 mx-auto">
          <div className=" relative flex flex-col justify-center items-start w-full max-w-[985px]">
            <div className=" relative grid grid-cols-1 sm:grid-cols-2 silver:grid-cols-3 gap-x-4 gap-y-4 items-center w-full  ">
              <div className="relative flex px-[18px] py-[30px] gap-[20px] flex-col justify-center items-start w-full silver:max-w-[319px] overflow-hidden rounded-[12px] border-[1px] border-[#F3F5F6]">
                <div className="flex z-[30] p-[5px] justify-between items-end w-full">
                  <div className=" relative flex justify-start items-start h-auto">
                    <LoadBlurHashImage
                      src={image}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-[148px] silver:w-[148px] border-[2px] border-[#FFFFFF] rounded-[100%] object-cover  overflow-hidden "
                      alt="Discover Your Potential"
                    />
                  </div>
                  <div className="bg-[#FFFBEB] flex justify-center items-center  max-w-[105px] p-[10px] rounded-[6px]">
                    <span className="txt4 !leading-[20px] text-[#D97706]">
                      N 2,000,000
                    </span>
                  </div>
                </div>
                <div className="flex gap-[20px] flex-col w-full">
                  <div>
                    <span className="font-bold text-[24px] leading-[20px] text-[#111E2F]">
                      Joshua Samila
                    </span>
                    <p className="text-[16px] leading-[20px] text-[#7E8EA2]">
                      Nigerian
                    </p>
                  </div>
                  <ul className="flex justify-between w-full max-w-[234px]">
                    <li className="flex flex-col border-l-[2px] border-l-[#F3F5F6] pl-2">
                      <span className="font-bold text-[20px] leading-[20px] text-[#111E2F]">
                        47.5
                      </span>
                      <p className="text-[14px] leading-[24px] text-[#7E8EA2]">
                        Minutes
                      </p>
                    </li>
                    <li className="flex flex-col border-l-[2px] border-l-[#F3F5F6] pl-2">
                      <span className="font-bold text-[20px] leading-[20px] text-[#111E2F]">
                        47.5
                      </span>
                      <p className="text-[14px] leading-[24px] text-[#7E8EA2]">
                        Kilometres
                      </p>
                    </li>
                    <li className="flex flex-col border-l-[2px] border-l-[#F3F5F6] pl-2">
                      <span className="font-bold text-[20px] leading-[20px] text-[#111E2F]">
                        47.5
                      </span>
                      <p className="text-[14px] leading-[24px] text-[#7E8EA2]">
                        Km/hour
                      </p>
                    </li>
                  </ul>
                </div>
                <div className=" absolute flex justify-center items-center top-0 left-0 w-full  h-[122px]">
                  <div className="relative flex justify-center items-center w-full">
                    <LoadBlurHashImage
                      src={background1}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-[122px] silver:w-[319px] "
                      alt="Discover Your Potential"
                    />
                    <div className=" absolute flex justify-end items-end w-full p-[20px]">
                      <span className="text-[#FEF3C7] italic text-[32px] leading-[40px]">
                        1st
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex px-[18px] py-[30px] gap-[20px] flex-col justify-center items-start w-full silver:max-w-[319px] overflow-hidden rounded-[12px] border-[1px] border-[#F3F5F6]">
                <div className="flex z-[30] p-[5px] justify-between items-end w-full">
                  <div className=" relative flex justify-start items-start h-auto">
                    <LoadBlurHashImage
                      src={image}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-[148px] silver:w-[148px] border-[2px] border-[#FFFFFF] rounded-[100%] object-cover overflow-hidden  "
                      alt="Discover Your Potential"
                    />
                  </div>
                  <div className="bg-[#FFFBEB] flex justify-center items-center  max-w-[105px] p-[10px] rounded-[6px]">
                    <span className="txt4 !leading-[20px] text-[#D97706]">
                      N 2,000,000
                    </span>
                  </div>
                </div>
                <div className="flex gap-[20px] flex-col w-full">
                  <div>
                    <span className="font-bold text-[24px] leading-[20px] text-[#111E2F]">
                      Ogedegbe Anosi
                    </span>
                    <p className="text-[16px] leading-[20px] text-[#7E8EA2]">
                      Nigerian
                    </p>
                  </div>
                  <ul className="flex justify-between w-full max-w-[234px]">
                    <li className="flex flex-col border-l-[2px] border-l-[#F3F5F6] pl-2">
                      <span className="font-bold text-[20px] leading-[20px] text-[#111E2F]">
                        47.5
                      </span>
                      <p className="text-[14px] leading-[24px] text-[#7E8EA2]">
                        Minutes
                      </p>
                    </li>
                    <li className="flex flex-col border-l-[2px] border-l-[#F3F5F6] pl-2">
                      <span className="font-bold text-[20px] leading-[20px] text-[#111E2F]">
                        47.5
                      </span>
                      <p className="text-[14px] leading-[24px] text-[#7E8EA2]">
                        Kilometres
                      </p>
                    </li>
                    <li className="flex flex-col border-l-[2px] border-l-[#F3F5F6] pl-2">
                      <span className="font-bold text-[20px] leading-[20px] text-[#111E2F]">
                        47.5
                      </span>
                      <p className="text-[14px] leading-[24px] text-[#7E8EA2]">
                        Km/hour
                      </p>
                    </li>
                  </ul>
                </div>
                <div className=" absolute flex justify-center items-center top-0 left-0 w-full  h-[122px]">
                  <div className="relative flex justify-center items-center w-full">
                    <LoadBlurHashImage
                      src={background2}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-[122px] silver:w-[319px] "
                      alt="Discover Your Potential"
                    />
                    <div className=" absolute flex justify-end items-end w-full p-[20px]">
                      <span className="text-[#E1E6ED] italic text-[32px] leading-[40px]">
                        2nd
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex px-[18px] py-[30px] gap-[20px] flex-col justify-center items-start w-full silver:max-w-[319px] overflow-hidden rounded-[12px] border-[1px] border-[#F3F5F6]">
                <div className="flex z-[30] p-[5px] justify-between items-end w-full">
                  <div className=" relative flex justify-start items-start h-auto">
                    <LoadBlurHashImage
                      src={image}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-[148px] silver:w-[148px] border-[2px] border-[#FFFFFF] rounded-[100%] object-cover  overflow-hidden "
                      alt="Discover Your Potential"
                    />
                  </div>
                  <div className="bg-[#FFFBEB] flex justify-center items-center  max-w-[105px] p-[10px] rounded-[6px]">
                    <span className="txt4 !leading-[20px] text-[#D97706]">
                      N 2,000,000
                    </span>
                  </div>
                </div>
                <div className="flex gap-[20px] flex-col w-full">
                  <div>
                    <span className="font-bold text-[24px] leading-[20px] text-[#111E2F]">
                      Ogedegbe Anosi
                    </span>
                    <p className="text-[16px] leading-[20px] text-[#7E8EA2]">
                      Nigerian
                    </p>
                  </div>
                  <ul className="flex justify-between w-full max-w-[234px]">
                    <li className="flex flex-col border-l-[2px] border-l-[#F3F5F6] pl-2">
                      <span className="font-bold text-[20px] leading-[20px] text-[#111E2F]">
                        47.5
                      </span>
                      <p className="text-[14px] leading-[24px] text-[#7E8EA2]">
                        Minutes
                      </p>
                    </li>
                    <li className="flex flex-col border-l-[2px] border-l-[#F3F5F6] pl-2">
                      <span className="font-bold text-[20px] leading-[20px] text-[#111E2F]">
                        47.5
                      </span>
                      <p className="text-[14px] leading-[24px] text-[#7E8EA2]">
                        Kilometres
                      </p>
                    </li>
                    <li className="flex flex-col border-l-[2px] border-l-[#F3F5F6] pl-2">
                      <span className="font-bold text-[20px] leading-[20px] text-[#111E2F]">
                        47.5
                      </span>
                      <p className="text-[14px] leading-[24px] text-[#7E8EA2]">
                        Km/hour
                      </p>
                    </li>
                  </ul>
                </div>
                <div className=" absolute flex justify-center items-center top-0 left-0 w-full  h-[122px]">
                  <div className="relative flex justify-center items-center w-full">
                    <LoadBlurHashImage
                      src={background3}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-[122px] silver:w-[319px]  "
                      alt="Discover Your Potential"
                    />
                    <div className=" absolute flex justify-end items-end w-full p-[20px]">
                      <span className="text-[#FEF3C7] italic text-[32px] leading-[40px]">
                        3rd
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-[30px]">
              <hr className="bg-[#F3F5F6] w-full h-[2px]" />
            </div>
          </div>
          <div className="flex gap-[30px] flex-col justify-center items-start w-full">
            <h2>Leader Board</h2>
            <div className="flex justify-center items-center w-full">
              <table className="flex flex-col gap-[30px] justify-center items-center w-full">
                <thead className="w-full">
                  <tr>
                    <th>POS</th>
                    <th>Name</th>
                    <th>Time (Min)</th>
                    <th>Nationality</th>
                    <th>Run</th>
                    <th>Speed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Alfreds Futterkiste</td>
                    <td>23</td>
                    <td>Germany</td>
                    <td>500m</td>
                    <td>12km/h</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Centro comercial Moctezuma</td>
                    <td>25</td>
                    <td>Mexico</td>
                    <td>480m</td>
                    <td>11km/h</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Maria Anders</td>
                    <td>21</td>
                    <td>USA</td>
                    <td>550m</td>
                    <td>13km/h</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Francisco Chang</td>
                    <td>22</td>
                    <td>Brazil</td>
                    <td>470m</td>
                    <td>10km/h</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Antonio Moreno</td>
                    <td>24</td>
                    <td>Spain</td>
                    <td>490m</td>
                    <td>11km/h</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Thomas Hardy</td>
                    <td>23</td>
                    <td>UK</td>
                    <td>510m</td>
                    <td>12km/h</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Christina Berglund</td>
                    <td>26</td>
                    <td>Sweden</td>
                    <td>480m</td>
                    <td>10km/h</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Hanna Moctezuma</td>
                    <td>27</td>
                    <td>Mexico</td>
                    <td>470m</td>
                    <td>9km/h</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Elizabeth Brown</td>
                    <td>24</td>
                    <td>Canada</td>
                    <td>500m</td>
                    <td>11km/h</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Roland Mendel</td>
                    <td>22</td>
                    <td>Austria</td>
                    <td>450m</td>
                    <td>10km/h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LeaderDetails;
