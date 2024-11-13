import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Link from "../contents/link";
import "@fontsource/geist-sans";

const BackNav = () => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isAnyPage = pathname.includes("/posts/");
  const isleaderBoardPage = pathname.includes("/leaderBoards/");
  const isPhotoDetailsPage = pathname.includes("/photos/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      if (window.scrollY > lastScrollY) {
        setIsScrollingUp(false); // Scrolling down
      } else {
        setIsScrollingUp(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const currentPage = pathname === "/" ? "/" : pathname.substring(1);
    setActiveLink(currentPage);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-[156px] z-[99] bg-[#F9FBFC] flex justify-center items-center at500:h-[64px] w-full ${
        isScrollingUp
          ? "translate-y-0 transition-all duration-500 ease-out"
          : "-translate-y-full"
      }`}
    >
      <div className="relative flex justify-center items-center w-full auto-container px-[15px] py-[16px] at500:px-[72px] sm:px-[120px] mx-auto">
        <div className="relative w-full flex flex-col at500:flex-row justify-between items-start at500:items-center at500:space-x-4">
          <ul className="flex justify-end items-center space-x-4">
            <Link className="flex w-full " to="/news">
              <li
                className={`relative group flex gap-[5px] capitalize items-center group-hover:text-[#8D12AB] py-[10px] pr-[10px] ${
                  activeLink === "news"
                    ? "border-b-[4px] border-b-[#8D12AB]"
                    : ""
                } ${isAnyPage ? "" : "hidden"}`}
              >
                <FaArrowLeft className=" relative top-0 text-[#353F50] group-hover:text-[#8D12AB] w-[20px]" />
                <span className=" text-[#353F50] font-normal text-[14px] leading-[20px] group-hover:text-[#8D12AB]">
                  Back to All Stories
                </span>
              </li>
            </Link>
            <Link className="flex w-full " to="/post-events">
              <li
                className={`relative group flex gap-[10px] capitalize items-center text-[#05284C] py-[10px] pr-[10px] ${
                  activeLink === "post-events"
                    ? "border-b-[4px] border-b-[#8D12AB]"
                    : ""
                }  ${isleaderBoardPage ? "flex" : "hidden"}`}
              >
                <FaArrowLeft className=" relative top-0 text-[#353F50] group-hover:text-[#8D12AB] w-[20px]" />
                <span className=" text-[#353F50] font-normal text-[14px] leading-[20px] group-hover:text-[#8D12AB]">
                  Back to All Leaderboards
                </span>
              </li>
            </Link>

            <Link className="flex w-full " to="/gallery">
              <li
                className={`relative group flex gap-[10px] capitalize items-center text-[#05284C] py-[10px] pr-[10px]  ${
                  isPhotoDetailsPage ? "flex" : "hidden"
                }`}
              >
                <FaArrowLeft className=" relative top-0 text-[#353F50] group-hover:text-[#8D12AB] w-[20px]" />
                <span className=" text-[#353F50] font-normal text-[14px] leading-[20px] group-hover:text-[#8D12AB]">
                  Back to all Gallery
                </span>
              </li>
            </Link>
          </ul>
          
          <ul className="flex justify-end items-center ">
            <Link className="flex w-full " to="/gallery">
              <li
                className={`relative group flex capitalize items-center text-[#05284C] px-[20px] ${
                  isleaderBoardPage ? "" : "hidden"
                }`}
              >
                <span className=" text-[#8C12AB] font-semibold text-[14px] leading-[20px] hover:text-[#05284C]">
                  View Gallery
                </span>
              </li>
            </Link>
            <Link className="flex w-full " to="/post-Events">
              <li
                className={`relative group flex capitalize items-center text-[#05284C] px-[20px] ${
                  isPhotoDetailsPage ? "flex" : "hidden"
                }`}
              >
                <span className=" text-[#8C12AB] font-semibold text-[14px] leading-[20px] hover:text-[#05284C]">
                  View Leaderboard
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BackNav;
