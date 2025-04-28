import React from "react";
import ImageK from "./ImageK";
import Link from "next/link";

const Recommendations = () => {
  return (
    <div>
      <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4 ">
        {/* USER CARD */}
        <div className="flex items-center justify-between">
          {/* IMAGE AND USER INFO */}
          <div className="flex items-center gap-2">
            <div className="relative rounded-full overflow-hidden w-10 h-10">
              <ImageK
                path="general/avatar1.png"
                alt="John Doe"
                w="100"
                h="100"
                tr="true"
              />
            </div>
            <div className="">
              <h1 className="text-md font-bold">John Doe</h1>
              <span className="text-textGray text-sm">@johnDoe</span>
            </div>
          </div>
          {/* BUTTON */}
          <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between">
          {/* IMAGE AND USER INFO */}
          <div className="flex items-center gap-2">
            <div className="relative rounded-full overflow-hidden w-10 h-10">
              <ImageK
                path="general/avatar2.png"
                alt="John Doe"
                w="100"
                h="100"
                tr="true"
              />
            </div>
            <div className="">
              <h1 className="text-md font-bold">John Doe</h1>
              <span className="text-textGray text-sm">@johnDoe</span>
            </div>
          </div>
          {/* BUTTON */}
          <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
            Follow
          </button>
        </div>
        <div className="flex items-center justify-between">
          {/* IMAGE AND USER INFO */}
          <div className="flex items-center gap-2">
            <div className="relative rounded-full overflow-hidden w-10 h-10">
              <ImageK
                path="general/avatar3.png"
                alt="John Doe"
                w="100"
                h="100"
                tr="true"
              />
            </div>
            <div className="">
              <h1 className="text-md font-bold">John Doe</h1>
              <span className="text-textGray text-sm">@johnDoe</span>
            </div>
          </div>
          {/* BUTTON */}
          <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
            Follow
          </button>
        </div>
        <Link href="/" className="text-iconBlue">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Recommendations;
