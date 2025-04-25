import Feed from "@/components/Feed";
import ImageK from "@/components/ImageK";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <ImageK path="icons/back.svg" alt="back" w="20" h="20" />
        </Link>
        <h1 className="font-bold text-lg">MoSaeed Dev</h1>
      </div>
      {/* INFO */}
      <div className="">
        {/* COVER & AVATAR CONTAINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
            <ImageK
              path="/general/cover.jpg?updatedAt=1745553175640"
              alt=""
              w="600"
              h="200"
              tr="true"
            />
          </div>
          {/* AVATAR */}
          <div className="w-1/4 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-2/3">
            <ImageK
              path="general/avatar.jpg"
              alt=""
              w="100"
              h="100"
              tr="true"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageK path="icons/more.svg" alt="more" w="20" h="20" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageK path="icons/explore.svg" alt="more" w="20" h="20" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageK path="icons/message.svg" alt="more" w="20" h="20" />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME & HANDLE */}
          <div className="">
            <h1 className="text-2xl font-bold">MoSaeed Dev</h1>
            <span className="text-textGray text-sm">@moSaeedWebDev</span>
          </div>
          {/* JOB & LOCATION & DATE */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <ImageK
                path="icons/userLocation.svg"
                alt="location"
                w="20"
                h="20"
              />
              <span>EGY</span>
            </div>
            <div className="flex items-center gap-2">
              <ImageK path="icons/date.svg" alt="date" w="20" h="20" />
              <span>Joined May 2021</span>
            </div>
          </div>
          {/* FOLLOWINGS & FOLLOWERS */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* FEED */}
      <Feed />
    </div>
  );
};

export default page;
