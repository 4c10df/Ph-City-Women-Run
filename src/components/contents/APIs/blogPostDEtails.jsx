import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import copyLinkImg from "../image/icons/ic_round-insert-link.png";
import shareLink from "../image/icons/Group.png";
import LatestBlogs from "./latestBlog";
import BackNav from "../../navigation/backNav";

const BlogPostDetails = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copyMessage, setCopyMessage] = useState("");
  const [shareMessage, setShareMessage] = useState("");

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `
    query GetPostBySlug($slug: String!) {
  post(where: { slug: $slug }) {
    id
    title
    date
    excerpt
    content {
      html
    }
   
    coverImage {
      url
    }
  }
}

  `;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query,
          variables: { slug },
        });
        setPost(response.data.data.post);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err.response?.data || err);
        setError(err);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching post</p>;

  const handleCopyLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      setCopyMessage("Link copied");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Determine the correct suffix for the day
    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  };


  const handleShareLink = () => {
    const pageURL = window.location.href;
    const pageTitle = post.title; // Use the post title for sharing

    if (navigator.share) {
      navigator
        .share({
          title: pageTitle,
          url: pageURL,
        })
        .then(() => setShareMessage("sharing"))
        .catch(() => setShareMessage("Failed to share link"));
    } else {
      // Fallback for devices that do not support Web Share API
      setShareMessage("Sharing not supported on this device");
    }

    // Hide the message after 2 seconds
    setTimeout(() => setShareMessage(""), 2000);
  };

  return (
    <section className="relative bg-white flex justify-center items-center w-full h-auto overflow-hidden">
      <BackNav />
      <div className="relative flex flex-col justify-center items-center w-full">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1208px] px-[15px] pt-[230px] pb-[30px] at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col w-full">
            <div className="flex gap-[16px] flex-col justify-start items-start w-full mb-[30px]">
              <h1>{post?.title}</h1>
              <span className="text-[#7E8EA2] txt w-[400px]">
                {post.excerpt}
              </span>
            </div>
            <div className="static flex flex-col justify-center items-center w-full mb-[30px]">
              <div className="flex flex-col gap-[50px] ipx:flex-row justify-start items-start silver:justify-between w-full">
                <div className="flex flex-col gap-[20px] lg:flex-row justify-start items-start sm:justify-between w-[300px]">
                  <div className="flex flex-col gap-[12px]">
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] text-[#353F50]"
                    >
                      Written by
                    </span>
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] text-[#667085]"
                    ></span>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] text-[#353F50]"
                    >
                      Published on
                    </span>
                    <span
                      data-aos="fade-up"
                      className="txt4 leading-[28px] text-[#667085]"
                    >
                      {formatDate(post.date)}
                    </span>
                  </div>
                </div>
                <div className="w-full xl:w-[279px] flex flex-col gap-[20px] silver:flex-row ipx:justify-end ipx:items-end">
                  {/* Share button */}
                  <div
                    data-aos="fade-up"
                    className="flex flex-col gap-[15px] w-[109px] cursor-pointer px-[10px] py-[10px] border-[1px] h-[40px] border-solid border-[#667085] hover:rounded-[2px] rounded-[16px]"
                    onClick={handleShareLink}
                  >
                    <span className="flex justify-center gap-[8px]">
                      <img
                        src={shareLink}
                        className="w-[20px] h-[20px]"
                        alt="share-link"
                      />
                      <span className="text-[#667085] font-medium leading-[20px] text-[14px] transition-all duration-300 ease-in-out">
                        Share
                      </span>
                    </span>
                    {/* <span className="copy-message">{shareMessage}</span> */}
                  </div>

                  {/* Copy link button */}
                  <div
                    data-aos="fade-up"
                    className="flex flex-col gap-[15px] w-[129px] cursor-pointer px-[10px] py-[10px] border-[1px] h-[40px] border-solid border-[#667085] hover:rounded-[2px] rounded-[16px]"
                    onClick={handleCopyLink}
                  >
                    <span className="flex justify-center gap-[8px]">
                      <img
                        src={copyLinkImg}
                        className="w-[20px] h-[20px]"
                        alt="copy-link"
                      />
                      <span className="text-[#667085] font-medium leading-[20px] text-[14px] transition-all duration-300 ease-in-out">
                        Copy link
                      </span>
                    </span>
                    <span className="copy-message">{copyMessage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative flex flex-col justify-center items-center at500:bg-fixed !bg-no-repeat !bg-cover !bg-top !h-[474px] py-[90px] mb-[40px] w-full "
          style={{
            backgroundImage: `url(${post.coverImage.url})`,
          }}
        ></div>
        <div className="static flex flex-col justify-center items-center w-full  max-w-[1208px] px-[15px] py-[100px] at500:px-[72px] my-0 mx-auto">
          <div
            className="flex flex-col gap-[30px] "
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </div>
        <div className="relative flex flex-col justify-center items-center w-full">
          <div className="static flex gap-[30px] flex-col justify-center items-center w-full  max-w-[1280px] px-[15px] py-[100px] at500:px-[72px] my-0 mx-auto">
            <div className="flex flex-col w-full  ">
              <div className="flex sm:justify-end items-end w-full mb-[20px]">
                <ul className="flex gap-4">
                  <li data-aos="fade-up">
                    <a href="https://x.com/finchglow?mx=2">
                      <FaTwitter
                        size={20}
                        className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <a href="https://www.facebook.com/finchglowtravelsng">
                      <FaFacebook
                        size={20}
                        className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <a href="https://www.facebook.com/finchglowtravelsng">
                      <FaLinkedin
                        size={20}
                        className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <a href="https://www.instagram.com/finchglow/">
                      <FaEnvelope
                        size={20}
                        className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                  <li data-aos="fade-up">
                    <a href="https://www.youtube.com/@finchglow_travels">
                      <FaYoutube
                        size={20}
                        className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="h-[1px] w-full bg-[#E1E6ED]" />
            </div>
            <LatestBlogs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostDetails;
