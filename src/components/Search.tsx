import React from "react";
import ImageK from "./ImageK";

const Search = () => {
  return (
    <div className="bg-inputGray py-2 px-4 flex items-center gap-4 rounded-full  ">
      <ImageK path="icons/explore.svg" alt="" w="16" h="16" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none placeholder:text-textGray"
      />
    </div>
  );
};

export default Search;
