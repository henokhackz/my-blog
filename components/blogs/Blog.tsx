import React from "react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import BlogFooter from "./BlogFooter";

const Blog = ({ blog }: any) => {
  return (
    <div className="p-2 gap-2 justify-between items-between  flex flex-col rounded-lg w-full    transform-cpu  bg-slate-900 hover:bg-slate-950">
      <Image
        src={blog.imageUrl}
        alt="blog image"
        width={300}
        height={50}
        className="rounded-lg"
      />
      <h3 className="text-md text-white">{blog.title}</h3>
      <div className="my-1 text-white flex gap-2 justify-start items-center">
        <Avatar>
          <AvatarImage src={blog.imageUrl} sizes="sm" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>{blog.author}</p>
      </div>
      <p className="text-gray-500 text-xs ">
        {blog.date} by <span className="text-blue-800/50 ">{blog.author}</span>
      </p>
      <BlogFooter />
    </div>
  );
};

export default Blog;
