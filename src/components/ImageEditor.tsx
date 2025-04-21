import Image from "next/image";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const ImageEditor = ({
  onClose,
  prevUrlEditor,
  setting,
  setSetting,
}: {
  onClose: () => void;
  prevUrlEditor: string;
  setting: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
  };
  setSetting: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "square";
      sensitive: boolean;
    }>
  >;
}) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="sm:w-[700px] sm:h-[1000px] w-[400px] h-[600px] bg-neutral-900 rounded-2xl relative overflow-hidden border border-neutral-700 shadow-xl">
        <button
          title="CloseEditor"
          onClick={() => onClose()}
          className="absolute top-2 right-2 bg-gray-900/60 hover:bg-gray-900/80 text-white p-2 rounded-full text-xl transition-all duration-200 hover:scale-110 hover:rotate-90 flex items-center justify-center"
        >
          <IoCloseCircleOutline className="w-5 h-5" />
        </button>
        <div className="p-4 text-white">test</div>

        {/* Img Container */}
        <div className="  flex justify-center items-center relative">
          <Image
            src={prevUrlEditor}
            alt="media"
            width={500}
            height={500}
            className="rounded-lg object-contain max-h-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
