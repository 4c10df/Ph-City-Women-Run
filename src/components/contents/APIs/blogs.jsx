import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "../../slider/swiper/pagination.css";
import "./postBlog.css";
import "swiper/css";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "../link";
import Loading from "./loading";

const Blogs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit, setPostLimit] = useState(6);

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    posts {
      id
      title
      slug
      date
      excerpt
      coverImage {
        url
        fileName
      }
      content {
        html
      }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query: query,
        });
        setData(response.data.data.posts);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error fetching data</p>;

  const chunkPosts = (posts, size) => {
    const chunks = [];
    for (let i = 0; i < posts.length; i += size) {
      chunks.push(posts.slice(i, i + size));
    }
    return chunks;
  };

  const groupedPosts = chunkPosts(data.slice(0, postLimit), 6);

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

  return (
    <section className="relative flex justify-center flex-col items-center w-full h-auto overflow-hidden">
      <div className="blog-container w-full flex flex-col justify-start items-start overflow-hidden">
        <Swiper
          className="relative flex flex-col !overflow-hidden !h-auto"
          style={{ width: "100%" }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={25}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-blogSlider",
            prevEl: ".swiper-button-prev-blogSlider",
          }}
        >
          {groupedPosts.map((group, index) => (
            <SwiperSlide
              key={index}
              className="!flex !justify-start !items-center !w-full z-[4]"
            >
              <div className="flex flex-col gap-[20px]">
                <div className="grid grid-cols-1 at500:grid-cols-2 silver:grid-cols-3 items-start gap-x-5 gap-y-5">
                  {group.slice(0, 3).map((post) => (
                    <div
                      key={post.id}
                      className="flex gap-[16px] flex-col justify-center items-start w-full"
                    >
                      {post.coverImage && (
                        <img
                          className="h-[220px] w-full rounded-[8px] object-cover"
                          src={post.coverImage.url}
                          alt={post.coverImage.fileName}
                        />
                      )}
                      <Link to={`/posts/${post.slug}`}>
                        <div className="flex flex-col gap-[8px] silver:w-[357px]">
                          <h6 className="text-[#353F50]">{post.title}</h6>
                          <span className="text-[#7E8EA2] txt">
                            {post.excerpt}
                          </span>
                          <span className="text-[#7E8EA2] leading-[18.9px] text-[14px]">
                            {formatDate(post.date)}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="sm:grid grid-cols-1 at500:grid-cols-2 silver:grid-cols-3 items-start gap-x-5 gap-y-5 hidden">
                  {group.slice(3, 6).map((post) => (
                    <div
                      key={post.id}
                      className="flex gap-[16px] flex-col justify-center items-start w-full"
                    >
                      {post.coverImage && (
                        <img
                          className="h-[220px] w-full rounded-[8px] object-cover"
                          src={post.coverImage.url}
                          alt={post.coverImage.fileName}
                        />
                      )}
                      <Link to={`/posts/${post.slug}`}>
                        <div className="flex flex-col gap-[8px] silver:w-[357px]">
                          <h6 className="text-[#353F50]">{post.title}</h6>
                          <span className="text-[#7E8EA2] txt">
                            {post.excerpt}
                          </span>
                          <span className="text-[#7E8EA2] leading-[18.9px] text-[14px]">
                            {formatDate(post.date)}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Navigation buttons */}
      <div className="relative flex !items-end !justify-end w-full gap-2 max-w-[1280px] px-[15px] at500:px-[10px] py-[20px] md:py-[40px] my-0 mx-auto">
        <div className="p-2">
          <FaArrowLeft className="swiper-button-prev-blogSlider relative top-0 text-[#8D12AB] hover:text-[#05284C] w-[20px]" />
        </div>
        <div className="p-2">
          <FaArrowRight className="swiper-button-next-blogSlider relative text-[#8D12AB] top-0 hover:text-[#05284C] w-[20px]" />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
