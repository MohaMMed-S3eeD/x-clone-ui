import React from "react";
import ImageK from "./ImageK";

const Share = () => {
  const iconButtons = [
    { path: "icons/image.svg", alt: "Image" },
    { path: "icons/gif.svg", alt: "GIF" },
    { path: "icons/poll.svg", alt: "Poll" },
    { path: "icons/emoji.svg", alt: "Emoji" },
    { path: "icons/schedule.svg", alt: "Schedule" },
    { path: "icons/location.svg", alt: "Location" },
  ];

  return (
    <div className="flex justify-start w-full p-2 border-b-[1px] border-borderGray">
      <div className="relative flex justify-start items-center w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full xsm:rounded-lg sm:rounded-full">
        <ImageK path="general/avatar.jpg" w="60" h="50" alt="avatar" />
      </div>

      <div className="w-full m-2">
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="w-full bg-transparent outline-none text-md placeholder:text-textGray"
        />

        <div className="pl-1 text-sm font-medium text-blue-400 cursor-pointer">
          Reply on public
        </div>

        <hr className="my-2 border-borderGray" />

        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-center items-center gap-6">
            {iconButtons.map((icon) => (
              <ImageK
                key={icon.alt}
                path={icon.path}
                alt={icon.alt}
                w="20"
                h="20"
                className="cursor-pointer"
              />
            ))}
          </div>

          <button className="px-4 py-1 font-bold text-black bg-white rounded-full">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
