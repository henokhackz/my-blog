import React from "react";
import Link from "next/link";
import { dummyTopics } from "@/constants";
const Topics = () => {
  return (
    <div className="text-white py-5 bg-gray-950 shadow-lg h-screen w-[250px] hidden md:flex flex-col max-h-screen overflow-auto rounded-md">
      <h1 className="text-lg font-bold mb-4 text-center border-b pb-2 border-gray-700">
        Recent Updates
      </h1>
      <div className="flex flex-col gap-4 px-4">
        {dummyTopics.map((topic) => (
          <div
            key={topic.id}
            className="bg-gray-800 p-4 rounded-md shadow-md hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-md font-semibold mb-2">{topic.title}</h2>
            <p className="text-xs mb-3">{topic.description}</p>
            <Link href={topic.link}>
              <p className="text-blue-400 hover:underline text-md">
                Read more...
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
