import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Link from "../contents/link";
import "@fontsource/geist-sans";

const BackNav = ({ openOverlay }) => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const isAnyPage = pathname === "/posts/${post.slug}";
  const isleaderBoardPage = pathname === "/board";
  const isGalleryPage = pathname === "/gallery";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentPage = pathname === "/" ? "/" : pathname.substring(1);
    setActiveLink(currentPage);
  }, [pathname]);

  return (
    <nav className="fixed top-[86px] z-[999] bg-[#F9FBFC] flex justify-center items-center h-[64px] w-full my-[16px]">
      <div className="relative flex justify-center items-center w-full 2xl:w-[1280px] px-[15px] py-[16px] at500:px-[72px] mx-auto">
        <div className="relative w-full flex md:flex-row justify-between items-center">
          {/* Desktop Menu */}
          <ul className="flex justify-end items-center space-x-4">
            <Link className="flex w-full " to="/news">
              <li
                className={`relative group flex gap-[5px] capitalize items-center group-hover:text-[#8D12AB] py-[10px] pr-[10px] ${
                  activeLink === "news"
                    ? "border-b-[4px] border-b-[#8D12AB]"
                    : ""
                } ${isleaderBoardPage | isGalleryPage ? "hidden" : ""}`}
              >
                <FaArrowLeft className=" relative top-0 text-[#353F50] group-hover:text-[#8D12AB] w-[20px]" />
                <span className=" text-[#353F50] group-hover:text-[#8D12AB]">
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
                <span className=" text-[#353F50] group-hover:text-[#8D12AB]">
                  Back to All Leaderboards
                </span>
              </li>
            </Link>
            <Link className="flex w-full " to="/post-events">
              <li
                className={`relative group flex gap-[10px] capitalize items-center text-[#05284C] py-[10px] pr-[10px] ${
                  activeLink === "post-events"
                    ? "border-b-[4px] border-b-[#8D12AB]"
                    : ""
                }  ${isGalleryPage ? "flex" : "hidden"}`}
              >
                <FaArrowLeft className=" relative top-0 text-[#353F50] group-hover:text-[#8D12AB] w-[20px]" />
                <span className=" text-[#353F50] group-hover:text-[#8D12AB]">
                  Gallery
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
