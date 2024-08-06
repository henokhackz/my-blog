import Blogs from "@/components/blogs/Blogs";
import Topics from "@/components/Topics/Topics";
import CategoriesHeader from "@/components/ui/shared/CategoriesHeader";
export default function Home() {
  return (
    <div className="flex justify-between  items-start w-full p-5 bg-slate-950  ">
      <div className="flex flex-col gap-5 items-center justify-center ">
        <CategoriesHeader />
        <Blogs />
      </div>

      <div className="flex-end  hidden md:flex ">
        <Topics />
      </div>
    </div>
  );
}
