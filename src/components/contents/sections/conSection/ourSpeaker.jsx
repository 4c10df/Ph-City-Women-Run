import React, { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import background from "../../image/logo/af9f2983ca064a6bc0b8dd03a1b542df.png";
import image2 from "../../image/homeImg/ff35507ecf5d6578bf29dd77002b3986.jpeg";
import image1 from "../../image/homeImg/4c1a7a5b846411f6f0d07abdc75223fd.jpeg";
import image3 from "../../image/homeImg/3db7394b532e8e913066360b8185c781.jpeg";
import shape1 from "../../image/shapes/Frame 11686560754.png";
import shape2 from "../../image/shapes/Frame 1686560676.png";

function OurSpeakers() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  homepage(where: {id: "cm2lshq67068l07pnzywod0ju"}) {
    
    runner
    registeredAthletes
    yearsOfRunning
    kilometersCovered
    subtext1
    subtext2
    subtext3
    subtext4
    subtitle1
    subtitle2
    subtitle3
    subtitle4
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.homepage);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  if (loading)
    return (
      <p className="h-[20vh] flex justify-center items-center leading-tight text-[20px] text-white">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
        Let's get you back online
      </p>
    );

  return (
    <section className="relative flex flex-col justify-center items-center  bg-white py-[35px]  w-full overflow-hidden">
      <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[40px] md:px-[72px] my-0 mx-auto">
        <div className="flex gap-[20px] z-20 flex-col  justify-between items-center w-full ">
          <div className="flex gap-[10px] flex-col justify-center items-start w-full ">
            <h2 className="text-[#1F2126] !text-[40px]">
              Who will be Speaking
            </h2>
          </div>
          <div className="grid grid-cols-1 at500:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-y-3 gap-x-2">
            <div
              style={{
                backgroundImage: `url(${image1})`,

                backgroundSize: "cover",
                backgroundPosition: "-101px",
              }}
              data-aos="zoom-in"
              className="flex gap-[10px]  flex-col justify-end rounded-[12px]  h-[499px] overflow-hidden w-full"
            >
              <div className="flex gradient-border p-[20px] flex-col ">
                <div className="max-w-[251px]">
                  <h6 className="text-[#E5E7EB] !text-[24px] !font-semibold">
                    Savanah Adekunle
                  </h6>
                  <span className="text-[#E5E7EB] text-[16px] leading-[24px]">
                    Fitness Instructor
                  </span>
                </div>
                <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px]">
                  topic
                </span>
                <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px] ">
                  Running into conclusions for women
                </span>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${image2})`,

                backgroundSize: "cover",
                backgroundPosition: "-298px",
              }}
              data-aos="zoom-in"
              className="flex gap-[10px]  flex-col justify-end rounded-[12px]  h-[499px] overflow-hidden w-full"
            >
              <div className="flex gradient-border1 p-[20px] flex-col ">
                <div className="max-w-[251px]">
                  <h6 className="text-[#E5E7EB] !text-[24px] !font-semibold">
                    Savanah Adekunle
                  </h6>
                  <span className="text-[#E5E7EB] text-[16px] leading-[24px]">
                    Fitness Instructor
                  </span>
                </div>
                <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px]">
                  topic
                </span>
                <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px] ">
                  Running into conclusions for women
                </span>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${image1})`,

                backgroundSize: "cover",
                backgroundPosition: "-101px",
              }}
              data-aos="zoom-in"
              className="flex gap-[10px]  flex-col justify-end rounded-[12px]  h-[499px] overflow-hidden w-full"
            >
              <div className="flex gradient-border p-[20px] flex-col ">
                <div className="max-w-[251px]">
                  <h6 className="text-[#E5E7EB] !text-[24px] !font-semibold">
                    Savanah Adekunle
                  </h6>
                  <span className="text-[#E5E7EB] text-[16px] leading-[24px]">
                    Fitness Instructor
                  </span>
                </div>
                <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px]">
                  topic
                </span>
                <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px] ">
                  Running into conclusions for women
                </span>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${image3})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              data-aos="zoom-in"
              className="flex gap-[10px]  flex-col justify-end rounded-[12px]  h-[499px] overflow-hidden w-full"
            >
              <div className="flex gradient-border1 p-[20px] flex-col ">
                <div className="max-w-[251px]">
                  <h6 className="text-[#E5E7EB] !text-[24px] !font-semibold">
                    Savanah Adekunle
                  </h6>
                  <span className="text-[#E5E7EB] text-[16px] leading-[24px]">
                    Fitness Instructor
                  </span>
                </div>
                <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px]">
                  topic
                </span>
                <span className="text-[#E5E7EB] text-[16px] leading-[24px] max-w-[251px] ">
                  Running into conclusions for women
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" absolute flex justify-center items-center   w-full auto-container">
        <img
          className="z-0 relative right-[64px] w-[399px] h-auto object-cover opacity-[18%]"
          src={background}
          alt=""
        />
      </div>

      <div className="auto-container absolute top-[89px] flex justify-between items-center w-full ">
        <div className="flex relative  right-[38px] justify-start items-end h-auto w-full">
          <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
        </div>
        <div className="flex relative top-[-248px]  justify-center items-center h-auto w-full">
          <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
        </div>
        <div className="flex relative bottom-[38px]   justify-end items-end h-auto w-full">
          <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
        </div>
      </div> */}
    </section>
  );
}

export default OurSpeakers;
