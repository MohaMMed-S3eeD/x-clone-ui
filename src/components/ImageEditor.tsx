import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

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
  // Create a local copy of settings to work with
  const [localSetting, setLocalSetting] = useState(setting);
  // State to track whether sensitive content is being shown
  const [showSensitive, setShowSensitive] = useState(false);

  // Update local settings when parent settings change
  useEffect(() => {
    setLocalSetting(setting);
  }, [setting]);

  // Save changes and close editor
  const handleSave = () => {
    setSetting(localSetting);
    onClose();
  };

  // Cancel changes and close editor
  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="sm:w-[700px] w-[95%] max-h-[90vh] bg-neutral-900 rounded-2xl relative overflow-hidden border border-neutral-700 shadow-xl flex flex-col">
        <header className="border-b border-neutral-700/50 p-5 flex justify-between items-center">
          <h2 className="text-white font-medium text-lg uppercase tracking-wider">
            Image Editor
          </h2>
          <button
            title="Cancel"
            onClick={handleCancel}
            className="bg-gray-800/60 hover:bg-gray-700 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90 flex items-center justify-center"
            aria-label="Close editor"
          >
            <IoCloseCircleOutline className="w-5 h-5" />
          </button>
        </header>

        {/* Image Container */}
        <div className="flex-1 flex justify-center items-center p-4 overflow-hidden">
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src={prevUrlEditor}
              alt="Image preview"
              width={500}
              height={500}
              className={`rounded-lg shadow-lg transition-all duration-300 ${
                localSetting.type === "original"
                  ? "h-auto w-auto max-h-[60vh] max-w-full"
                  : localSetting.type === "square"
                  ? "aspect-square object-cover max-h-[60vh] max-w-full"
                  : "aspect-video object-cover max-h-[60vh] max-w-full"
              }`}
            />
            
            {/* Sensitive content overlay */}
            {localSetting.sensitive && !showSensitive && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg">
                <span className="text-white text-sm font-medium bg-neutral-800/80 px-4 py-2 rounded-lg mb-3">
                  Sensitive Content
                </span>
                <button
                  onClick={() => setShowSensitive(true)}
                  className="flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <IoEyeOutline className="w-4 h-4" />
                  View Content
                </button>
              </div>
            )}
            
            {/* Show "Hide Content" button when viewing sensitive content */}
            {localSetting.sensitive && showSensitive && (
              <button
                onClick={() => setShowSensitive(false)}
                className="absolute top-2 right-2 flex items-center gap-2 bg-neutral-800/80 hover:bg-neutral-700 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
              >
                <IoEyeOffOutline className="w-3.5 h-3.5" />
                Hide Content
              </button>
            )}
          </div>
        </div>

        {/* Settings Panel */}
        <div className="bg-neutral-800/90 backdrop-blur-md w-full p-5 border-t border-neutral-700 shadow-lg">
          <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-3">
            Image Settings
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
            <div className="sm:col-span-3">
              <p className="text-neutral-400 text-xs mb-2 font-medium">
                Format
              </p>
              <div className="flex items-center w-full bg-neutral-800/60 p-1 rounded-lg border border-neutral-700/50">
                {["original", "wide", "square"].map((type) => (
                  <button
                    key={type}
                    className={`flex-1 px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm ${
                      localSetting.type === type
                        ? "bg-blue-600 text-white shadow-md"
                        : "hover:bg-neutral-700 text-neutral-300"
                    }`}
                    onClick={() =>
                      setLocalSetting((prev) => ({ ...prev, type: type as "original" | "wide" | "square" }))
                    }
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="sm:col-span-1">
              <p className="text-neutral-400 text-xs mb-2 font-medium">
                Content Warning
              </p>
              <div className="flex items-center w-full bg-neutral-800/60 p-1 rounded-lg border border-neutral-700/50">
                <button
                  className={`w-full px-3 py-2 rounded-md transition-all duration-200 font-medium text-sm ${
                    localSetting.sensitive
                      ? "bg-red-600 text-white shadow-md"
                      : "hover:bg-neutral-700 text-neutral-300"
                  }`}
                  onClick={() => {
                    setLocalSetting((prev) => ({
                      ...prev,
                      sensitive: !prev.sensitive,
                    }));
                    setShowSensitive(false); // Hide content when marking as sensitive
                  }}
                >
                  {localSetting.sensitive ? "Sensitive" : "Not Sensitive"}
                </button>
              </div>
            </div>
          </div>
          
          {/* Footer with Save/Cancel buttons */}
          <div className="flex justify-end mt-6 pt-4 border-t border-neutral-700/50">
            <button
              onClick={handleCancel}
              className="px-4 py-2 mr-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full font-medium text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium text-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
