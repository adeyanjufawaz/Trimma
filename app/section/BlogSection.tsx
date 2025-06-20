import React from "react";
import BlogCard from "../component/BlogCard";

function BlogSection() {
  return (
    <div className="flex p-10 flex-col mt-4 text-white justify-center items-center text-center">
      <p className="tracking-wider  font-medium">WHAT’S TRENDING</p>
      <h2 className="font-semibold text-3xl mt-4">Latest Blogs & Posts</h2>
      <div className="flex gap-5 mt-12 flex-wrap">
        <BlogCard blogTitle="Upcoming Webinar:Digital Journalism in Africa" />
        <BlogCard blogTitle="Unlock the  edge of top-tier PR expertise." />
        <BlogCard blogTitle="Unlock the  edge of top-tier PR expertise." />
      </div>
    </div>
  );
}

export default BlogSection;
