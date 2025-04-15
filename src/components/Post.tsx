import React from "react";
import ImageK from "./ImageK";
import PostInfo from "./PostInfo";

const Post = () => {
  return (
    <div className="m-2 border-borderGray border-[1px]">
      <div className="flex gap-2 m-1">
        {/* avatar */}
        <div className=" relative rounded-full overflow-hidden ">
          <ImageK path="general/avatar.jpg" w="60" h="50" alt="avatar" />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Top  */}
          <div className="w-full flex justify-between">
            <div className="flex  flex-wrap gap-2 ">
              <h1 className=" text-md font-bold">Mohamed SAeed</h1>
              <span className="text-textGray">@bt3</span>
              <span className="text-textGray"> 2 hours ago</span>
            </div>
            {/* Bottom */}
            <PostInfo />
          </div>
          {/* Text */}
          <div className="text-slate-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            voluptas, quisquam dolores dolorem, accusantium dolore saepe illum,
            sapiente repudiandae incidunt voluptatem.
          </div>
          {/* Image */}
          <ImageK
            path="general/post.jpeg"
            w="600"
            h="600"
            alt="test"
            className="rounded-lg mt-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
