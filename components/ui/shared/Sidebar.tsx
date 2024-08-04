import React from "react";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="hidden  w-[250px] min-h-full p-5 h-screen shadow-sm shadow-slate-400/40 flex-col md:flex justify-between items-center">
      <Image
        src="/assets/images/logo-no-background.png"
        alt="logo"
        height={20}
        width={128}
      />
      <div className="flex flex-col gap-2 w-full">
        {[2, 3, 3, 5, 2].map((_, index) => {
          return (
            <div
              key={index}
              className="p-2 text-white justify-center items-center w-full mx-auto"
            >
              <div>this is great</div>
            </div>
          );
        })}
      </div>
      <div>this is logout section </div>
    </div>
  );
};

export default Sidebar;
