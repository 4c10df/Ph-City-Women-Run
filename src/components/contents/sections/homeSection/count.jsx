import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import imageTwo from "../../image/homeImg/dcc8aa87baa34c7dea8c7e8fa6006213.jpeg";
import Countdown from "../coutDown";
import Button from "../../Button";

function Thecount() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
  slider(where: {id: "cm2ls6fnn05sm07pqymj9i2bz"}) {
    
    schedule
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.slider);
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
    <section
      className="relative flex flex-col justify-center items-center bg-fixed bg-cover bg-blend-multiply bg-[#00000033] silver:h-[243px] w-full"
      style={{
        backgroundImage: `url(${imageTwo})`,
        // backgroundColor: "#00000033",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="static auto-container flex flex-col justify-center items-center w-full h-auto px-[15px] py-[10px] at500:px-[72px] my-0 mx-auto">
        <div className="bg-[#8D12AB] flex justify-center items-center rounded-[16px] silver:py-[4px] p-[15px] at500:px-[40px] w-full">
          <Countdown targetDate={data.schedule} />
        </div>
      </div>
    </section>
  );
}

export default Thecount;
