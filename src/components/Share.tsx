"use client";
import React, { useState } from "react";
import ImageK from "./ImageK";
import { shareAction } from "@/actions";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [showSensitive, setShowSensitive] = useState(false);
  const [setting, setSetting] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });
  const iconButtons = [
    { path: "icons/gif.svg", alt: "GIF" },
    { path: "icons/poll.svg", alt: "Poll" },
    { path: "icons/emoji.svg", alt: "Emoji" },
    { path: "icons/schedule.svg", alt: "Schedule" },
    { path: "icons/location.svg", alt: "Location" },
  ];
  const [file, setFile] = useState<File | null>(null);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };
  const prevUrl = file ? URL.createObjectURL(file!) : null;

  React.useEffect(() => {
    if (!setting.sensitive) {
      setShowSensitive(false);
    }
  }, [setting.sensitive]);
  console.log(file, "file");
  return (
    <form
      action={(formData) => shareAction(formData, setting)}
      className="flex justify-start w-full p-2 border-b-[1px] border-borderGray"
    >
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

        {file?.type == "image/png" && prevUrl && (
          <div className="relative">
            <Image
              src={prevUrl}
              alt="media"
              width={600}
              height={600}
              className={`rounded-lg mt-2 overflow-hidden ${
                setting.type === "square"
                  ? "aspect-square object-cover"
                  : setting.type === "wide"
                  ? "aspect-video object-cover"
                  : "max-h-[500px] object-contain"
              }`}
            />
            {setting.sensitive && !showSensitive && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg">
                <span className="text-white text-sm font-medium bg-neutral-800/80 px-4 py-2 rounded-lg mb-3">
                  Sensitive Content
                </span>
                <button
                  type="button"
                  onClick={() => setShowSensitive(true)}
                  className="flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <IoEyeOutline className="w-4 h-4" />
                  View Content
                </button>
              </div>
            )}
            {setting.sensitive && showSensitive && (
              <button
                type="button"
                onClick={() => setShowSensitive(false)}
                className="absolute bottom-4 right-1 flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors z-10"
              >
                <IoEyeOffOutline className="w-3.5 h-3.5" />
                Hide Content
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsEditorOpen(true)}
              className="absolute top-2 left-2 bg-gray-900/60 hover:bg-gray-900/80 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors z-10"
            >
              Edit
            </button>
            <button
              type="button"
              title="Remove image"
              onClick={() => {
                setFile(null);
              }}
              className={`absolute ${
                setting.sensitive && showSensitive ? "top-2" : "top-2"
              } right-2 bg-gray-900/60 hover:bg-gray-900/80 text-white p-2 rounded-full text-xl transition-all duration-200 hover:scale-110 hover:rotate-90 flex items-center justify-center z-10`}
            >
              <IoCloseCircleOutline className="w-5 h-5" />
            </button>
          </div>
        )}
        {prevUrl && isEditorOpen && (
          <ImageEditor
            prevUrlEditor={prevUrl}
            onClose={() => {
              setIsEditorOpen(false);
            }}
            setting={setting}
            setSetting={setSetting}
          />
        )}

        {
          file?.type == "video/mp4" && prevUrl && (
            <div className="relative">
              <video
                src={prevUrl}
                controls
                className={`rounded-lg mt-2 overflow-hidden w-full ${
                  setting.type === "square"
                    ? "aspect-square object-cover"
                    : setting.type === "wide"
                    ? "aspect-video object-cover"
                    : "max-h-[500px] object-contain"
                }`}
              />
              {setting.sensitive && !showSensitive && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg">
                  <span className="text-white text-sm font-medium bg-neutral-800/80 px-4 py-2 rounded-lg mb-3">
                    Sensitive Content
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowSensitive(true)}
                    className="flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <IoEyeOutline className="w-4 h-4" />
                    View Content
                  </button>
                </div>
              )}
              {setting.sensitive && showSensitive && (
                <button
                  type="button"
                  onClick={() => setShowSensitive(false)}
                  className="absolute bottom-4 right-1 flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors z-10"
                >
                  <IoEyeOffOutline className="w-3.5 h-3.5" />
                  Hide Content
                </button>
              )}
              <button
                type="button"
                title="Remove video"
                onClick={() => {
                  setFile(null);
                }}
                className="absolute top-2 right-2 bg-gray-900/60 hover:bg-gray-900/80 text-white p-2 rounded-full text-xl transition-all duration-200 hover:scale-110 hover:rotate-90 flex items-center justify-center z-10"
              >
                <IoCloseCircleOutline className="w-5 h-5" />
              </button>
            </div>
          )
        }

        <div className="pl-1 text-xs font-medium text-blue-400 cursor-pointer flex items-center gap-1 mt-2">
          <FaEarthAmericas />
          Who can reply?
        </div>

        <hr className="my-2 border-borderGray" />

        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-center items-center gap-6">
            <input
              name="file"
              type="file"
              id="file"
              className="hidden"
              onChange={handleFile}
            />
            <label htmlFor="file" className="flex items-center gap-2">
              <span className="sr-only">Upload an image</span>
              <ImageK
                path="icons/image.svg"
                alt="Upload image icon"
                w="20"
                h="20"
                className="cursor-pointer"
              />
            </label>
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
    </form>
  );
};

export default Share;
