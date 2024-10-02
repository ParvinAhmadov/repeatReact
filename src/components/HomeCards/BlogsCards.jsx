import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomModal } from "../CustomModal";
import { getData } from "../../services/api";
import BlogsCardsDetail from "./CardDetail";

const BlogsCards = () => {
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData("/data")
      .then((response) => {
        console.log("Fetched data:", response);
        setBlogs(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div>
      <div>
        {blogs.length > 0 ? (
          blogs.map((data, idx) => (
            <div key={idx} className="mb-4">
              <h1 className="text-lg font-semibold">{data.title}</h1>
              <p>{data.description}</p>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleOpenModal(data)}
              >
                View Details
              </Button>
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>

      <CustomModal open={open} setOpen={handleCloseModal}>
        {selectedBlog && <BlogsCardsDetail blog={selectedBlog} />}
      </CustomModal>
    </div>
  );
};

export default BlogsCards;
