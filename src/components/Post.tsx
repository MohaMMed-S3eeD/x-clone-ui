import React from "react";
import ImageK from "./ImageK";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/utils";
import Image from "next/image";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}
const Post = async ({ fileIdP }: { fileIdP: string }) => {
  //  FETCH POST MEDIA

  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails(fileIdP);

  console.log(fileDetails);
  return (
    <div className="m-2 border-borderGray border-[1px]">
      <div className="flex gap-2 m-1">
        {/* avatar */}
        <div className=" relative rounded-full xsm:rounded-lg overflow-hidden w-12 h-12 sm:w-14 sm:h-14 sm:rounded-full flex justify-center items-center ">
          <ImageK path="general/avatar.jpg" w="60" h="50" alt="avatar" />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2 mr-3 mt-1">
          {/* Top  */}
          <div className="w-full flex justify-between ">
            <div className="flex items-center flex-wrap gap-2 ">
              <h1 className="text-md font-bold">Mohamed SAeed</h1>
              <span className="sm:text-md text-xs text-textGray">
                @bt3 2 hours ago
              </span>
            </div>
            {/* Bottom */}
            <PostInfo />
          </div>
          {/* Text */}
          <div className="text-slate-400 text-sm sm:line-clamp-3 line-clamp-1 ">
            ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            voluptas, quisquam dolores dolorem, accusantium dolore saepe illum,
            sapiente repudiandae incidunt voluptatem.
          </div>
          {/* Image */}
          {/* <ImageK
            path="general/post.jpeg"
            w="600"
            h="600  "
            alt="test"
            className="rounded-lg mt-2 "
          /> */}

          {fileDetails && fileDetails.fileType == "image" && (
            <Image
              src={fileDetails.url}
              width={fileDetails.width}
              height={fileDetails.height}
              className={`${
                fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
              }rounded-lg mt-2 overflow-hidden min-w-full max-h-[450px] object-cover`}
              alt={fileDetails.fileType}
            />
          )}
          {fileDetails && fileDetails.fileType == "non-image" && (
            <div className="video-container relative rounded-lg mt-2 overflow-hidden">
              <video
                className="w-full max-h-[400px] object-contain rounded-lg"
                controls
                preload="metadata"
                playsInline
                width={fileDetails.width}
                height="auto"
              >
                <source src={fileDetails.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <PostInteractions
            likes={100}
            retweets={150}
            comments={200}
            views={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
