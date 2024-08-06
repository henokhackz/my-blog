import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import Comment from "../comments/Comment";

const BlogFooter = () => {
  return (
    <div className="flex w-full rounded bg-slate-950/20 justify-between ">
      <div className="flex justify-center items-center text-gray-600">
        <AiOutlineLike size={20} />
        <span className="text-xs ">Like</span>
      </div>
      <div className="flex justify-between items-center text-white">
        <Comment />
      </div>
    </div>
  );
};

export default BlogFooter;
