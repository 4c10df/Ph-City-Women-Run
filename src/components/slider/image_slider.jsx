import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GoArrowDown } from "react-icons/go";
import shape1 from "../slider/shapes/shape1.png";
import shape2 from "../slider/shapes/shape2.png";
import { useState, useEffect } from "react";
import axios from "axios";


const ImageSlider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  
 const hygraphEndpoint =
   "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

 const query = `{
  slider(where: {id: "cm2ls6fnn05sm07pqymj9i2bz"}) {
    title
    title2
    title3
    image1 {
      url
    }
    image2 {
      url
    }
    image3 {
      url
    }
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query: query,
        });
        setData(response.data.data.slider);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <p className="h-[100vh] flex justify-center items-center leading-tight text-[20px] text-white">
      Loading...
    </p>
  );
  if (error) return (
    <p className="h-[100vh] flex justify-center items-center leading-tight text-[20px] text-white">
      lets get you back online
    </p>
  );

  const slides = data
    ? [
        {
          image: data.image1.url,
          title: data.title,
        },
        {
          image: data.image2.url, // Correct syntax for the image
          title: data.title2,
        },
        {
          image: data.image3.url,
          title: data.title3,
        },
      ]
    : [];

  return (
    <div id="top" className="slider-container !w-full">
      <Fade>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="each-fade flex flex-col justify-center items-center !w-full "
          >
            <div
              className="image-container  w-full h-[lvh] md:h-screen"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: "#000000BF",
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh", // Adjust the height as needed
                width: "100%",
              }}
            >
              
              <div className="relative flex justify-between items-center w-full ">
                <div className="flex relative top-[89px] justify-start items-end h-[480.07px] w-full">
                  <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
                </div>
                <div className="flex relative top-[-6px] justify-end items-end h-[480.07px] w-full">
                  <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
                </div>
              </div>
            </div>

            <div className="auto-container absolute  flex justify-start items-start w-full  pr-[30px] sm:pr-0">
              {slide.title && (
                <div className=" bg-[#8D12AB] flex flex-col  justify-start items-start w-full max-w-[641px] py-[24px]">
                  <div className="auto-container flex flex-col justify-start items-start w-full  px-[30px]  at500:px-[48px] md:pl-[90px] my-0 mx-auto h-auto">
                    <h1
                      className="font-Geist text-left uppercase text-[#FFFFFF] text-[20px] leading-[24px] sm:text-[30px] sm:leading-[32px] silver:text-[48px] silver:leading-[72px]"
                      style={{ fontWeight: "800" }}
                    >
                      {slide.title}
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Fade>
      <div className="relative flex flex-col justify-center items-center w-full max-w-[1580px] px-[15px] at500:px-[40px] my-0 mx-auto z-[8]">
        <div className="relative w-full  z-[555] cursor-pointer ">
          <a href="#middle">
            <GoArrowDown className="text-[#8D12AB] hover:text-[#fff] absolute right-0 bottom-[50px]  w-[57.82px] h-[57.82px] object-cover cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
