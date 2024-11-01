import React, { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import background from "../../image/logo/af9f2983ca064a6bc0b8dd03a1b542df.png";
import image from "../../image/homeImg/1792b51136295dafce3f1c348d2f9d51.jpeg";
import image2 from "../../image/homeImg/3bb2c3f5d20885f4e7cf179881163371.jpeg";
import image3 from "../../image/homeImg/de5d84da3808f78d14951f122dcbf918.jpeg";
import shape1 from "../../image/shapes/Frame 11686560754.png";
import shape2 from "../../image/shapes/Frame 1686560676.png";

function TalkAbout() {
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
    <section className="relative flex flex-col justify-center items-center bg-white py-[35px]  w-full overflow-hidden">
      <div className="static gap-[20px] auto-container flex flex-col justify-center items-start w-full h-auto px-[15px] py-[10px] at500:px-[40px] md:px-[72px] my-0 mx-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex bg-[#8C12AB] pt-[10px] pb-[8px] pl-[8px] pr-[64px] flex-col justify-center items-start rounded-r-[8px]"
        >
          <h6 className="text-white !text-[20px]">Let’s Talk About</h6>
        </div>
        <div className="z-20 relative grid grid-cols-1 at500:grid-cols-2 silver:grid-cols-3 gap-x-2 gap-y-4 items-center w-full h-auto">
          <div className="flex gap-[10px] flex-col justify-center items-start w-full">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[164px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image2}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="txt6 !text-[24px] text-[#111E2F] ">
                Lifestyle
              </span>
            </div>
          </div>
          <div className="flex gap-[15px] flex-col justify-center items-start w-full">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[164px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="txt6 !text-[24px] text-[#111E2F] ">Health</span>
            </div>
          </div>
          <div className="flex gap-[15px] flex-col justify-center items-start w-full">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[164px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image3}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-auto object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex items-start">
              <span className="txt6 !text-[24px] text-[#111E2F] ">
                Wealth Creation
              </span>
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

export default TalkAbout;
