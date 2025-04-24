import React from "react";
import Search from "./Search";
import Recommendations from "./Recommendations";
import PopularTags from "./PopularTags";
import Link from "next/link";

const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-screen overflow-y-auto hide-scrollbar px-4 ">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="flex flex-wrap gap-x-3 text-textGray text-sm underline ">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
      </div>
      <span className=" flex justify-center items-center  text-textGray text-sm ">
        © 2025 L Corp.
      </span>
    </div>
  );
};

export default RightBar;
