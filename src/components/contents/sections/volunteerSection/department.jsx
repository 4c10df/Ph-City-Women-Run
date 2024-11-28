import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoChevronRight } from "react-icons/go";
import { BsAlarm } from "react-icons/bs";
import imageOne from "../../image/homeImg/ad392b203979406835370d3e44b10714.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";
import ScheduleCountdown from "../scheduleCount";
import { Link } from "react-router-dom";

function Department() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit, setPostLimit] = useState(6);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    volunteerDepartments {
    id
    slug
    title
    subtext
    date1
    date2
   
    coverImage {
      url
    }
    content
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.volunteerDepartments);
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
      <p className="h-[20vh] flex justify-center items-center leading-tight text-[20px] text-white"></p>
    );
  if (error)
    return (
      <p className="h-[30vh] flex justify-center items-center leading-tight text-[20px] text-white">
        Let's get you back online
      </p>
    );

  return (
    <>
      <section className=" relative flex flex-col justify-center items-start  h-auto w-full ">
        <div className="static auto-container flex flex-col justify-center items-center w-full py-[70px] at500:px-[72px] my-0 mx-auto">
          <div className="grid grid-cols-1 at500:grid-cols-2 sm:grid-cols-3 silver:grid-cols-4 w-full">
            {data.slice(0, postLimit).map((department) => (
              <div
                className="relative flex flex-col justify-end items-end bg-cover px-[20px] sm:px-[20px] py-[20px] h-auto w-full at500:rounded-[24px]"
                style={{
                  backgroundImage: `url(${department.coverImage.url})`,
                  backgroundColor: "#00000099",
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative flex gap-[20px]  justify-between items-end w-full  h-auto sm:h-[320px] ">
                  <h4 className="text-white !font-[146] leading-[24px] sm:leading-[32px] sm:text-[22px] ">
                    {department.title}
                  </h4>

                  <Link to={`/departments/${department.slug}`}>
                    <div className="flex h-auto  justify-center items-center  ">
                      <GoChevronRight className="flex rounded-[100px] h-[40px] bg-white justify-center items-center w-[40px]  text-[#1F2126]  " />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Department;
