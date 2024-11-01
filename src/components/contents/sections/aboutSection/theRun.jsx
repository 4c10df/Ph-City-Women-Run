import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegCalendar } from "react-icons/fa6";
import imageOne from "../../image/homeImg/1d5d5d58530a43a193941eb68bc83221.jpeg";
import location from "../../image/logo/route-svgrepo-com 1.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

function SpecificGoal() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const hygraphEndpoint =
     "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

   const query = `{
  theRun(where: {id: "cm2xc6ibs0mtc07pggca1ta4f"}) {
    id
    nameOfSection
    subtext3
    backgroundImage {
      url
    }
    date
    runType
  }
}`;

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.post(hygraphEndpoint, { query });
         setData(response.data.data.theRun);
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
       <p className="h-[20vh] w-full bg-slate-500 flex justify-center items-center leading-tight text-[20px] text-white">
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
    <>
      <section
        className="relative flex flex-col justify-center items-center w-full h-auto py-[100px]"
        style={{
          backgroundImage: `url(${data.backgroundImage.url})`,
          backgroundColor: "#00000073",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[110px] at500:px-[72px] my-0 mx-auto">
          <div className="flex justify-center  px-[20px] sm:px-[50px]  md:px-[40px] w-full max-w-[1121px] ">
            <div className="custom-blur-shadow flex gap-[20px] flex-col rounded-[24px] justify-between items-start silver:items-center w-full  py-[100px] px-[20px] sm:px-[50px] md:pl-[70px] md:pr-[40px] overflow-hidden">
              <div className="flex flex-col justify-center items-center silver:w-[716px]">
                <h2 className="text-[#FFFFFF] !text-[40px]">
                  {data.nameOfSection}
                </h2>
              </div>

              <div className="bg-white rounded-[12px] px-[24px] py-[12px] max-w-[493px]">
                <ul className="flex gap-[20px] flex-col at500:flex-row">
                  <li className="flex gap-[10px] justify-center items-center">
                    <FaRegCalendar className="text-[#5C176F]" size={24} />
                    <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                      {data.date}
                    </span>
                  </li>
                  <li className="flex gap-[10px] justify-center items-center">
                    <img className="w-[24px] h-auto" src={location} alt="" />
                    <span className="text-[#5C176F] text-[16px] leading-[24px] font-bold">
                      {data.runType}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecificGoal;
