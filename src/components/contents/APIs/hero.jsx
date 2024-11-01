import React, { useState, useEffect } from "react";
import axios from "axios";

const HygraphFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your Hygraph endpoint
  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  // Query to fetch all posts with the necessary fields
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
      author {
        name
      }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query: query,
        });
        setData(response.data.data.posts); // Set the fetched posts to state
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-[8px] silver:w-[357px]"
          >
            <h6 data-aos="fade-up" className="text-[#353F50]">
              {post.title}
            </h6>

            <p>
              <strong>Slug:</strong> {post.slug}
            </p>
            <p>
              <strong>Date:</strong> {new Date(post.date).toDateString()}
            </p>
            <p>{post.excerpt}</p>
            {post.coverImage && (
              <img
                src={post.coverImage.url}
                alt={post.coverImage.fileName}
                style={{ width: "200px", height: "auto" }}
              />
            )}
            <p>
              <strong>Author:</strong> {post.author?.name}
            </p>
            {/* <div dangerouslySetInnerHTML={{ __html: post.content.html }} /> */}
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default HygraphFetch;
