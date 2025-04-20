"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

// تعريف واجهة للـ props التي سيستقبلها المكون
interface PostInteractionsProps {
  likes: number;
  retweets: number;
  comments: number;
  views: number;
}

// استخدم الواجهة لتحديد نوع الـ props
const PostInteractions = ({
  likes,
  retweets,
  comments,
  views,
}: PostInteractionsProps) => {
  return (
    <div className="flex justify-between items-center m-2 ">
      <div className="flex justify-center items-center gap-4 text-textGray pr-2 ">
        <div className=" flex justify-center items-center gap-1 cursor-pointer  hover:text-iconPink">
          <FaRegHeart />
          {likes} {/* استخدم الـ prop هنا */}
        </div>
        <div className="flex justify-center items-center gap-1 cursor-pointer hover:text-iconBlue">
          <AiOutlineRetweet />
          {retweets} {/* استخدم الـ prop هنا */}
        </div>
        <div className=" flex justify-center items-center gap-1 cursor-pointer hover:text-iconGreen">
          <FaRegComment />
          {comments} {/* استخدم الـ prop هنا */}
        </div>
        <div className=" justify-center items-center gap-1  flex cursor-pointer hover:text-iconBlue">
          <FaEye />
          {views} {/* استخدم الـ prop هنا */}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 text-textGray ">
        <div className=" cursor-pointer hover:text-iconBlue">
          <FaShare />
        </div>
        <div className=" cursor-pointer hover:text-iconBlue">
          <FaRegBookmark />
        </div>
      </div>
    </div>
  );
};

export default PostInteractions;
