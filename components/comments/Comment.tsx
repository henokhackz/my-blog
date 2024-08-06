import { AiOutlineComment } from "react-icons/ai";
const Comment = () => {
  return (
    <div className="flex justify-start items-center ">
      <AiOutlineComment size={20} color="#444" className="" />
      <span className="ml-2 text-gray-600 text-xs">Leave a comment</span>
    </div>
  );
};

export default Comment;
