"use server";

import { imagekit } from "./utils";

export const shareAction = async (
  formData: FormData,
  setting: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const file = formData.get("file") as File;
  //   const desc = formData.get("desc") as string;
  //   console.log(file, desc);

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const transformation = ` ${
    setting.type === "square"
      ? "aspect-square object-cover w-[500px] h-[280px]"
      : setting.type === "wide"
      ? "aspect-video object-cover"
      : ""
  }`;
  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      transformation: {
        pre: transformation,
      },
      customMetadata: {
        sensitive: setting.sensitive,
      },
    },
    function (error, result) {
      if (error) {
        console.error("Error uploading file:", error);
      } else {
        console.log("File uploaded successfully:", result);
      }
    }
  );
};
