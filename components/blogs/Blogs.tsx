import Blog from "./Blog";
import { DUMMY_BLOGS } from "@/constants";

const Blogs = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-5 w-full mx-auto bg-slate-950 p-4  ">
      {DUMMY_BLOGS.map((blog) => {
        return <Blog blog={blog} key={blog.id} />;
      })}
    </div>
  );
};

export default Blogs;
