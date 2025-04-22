"use server";
import ImageKit from "imagekit";
const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
});
export const shareAction = async (formData: FormData) => {
  const file = formData.get("file") as File;
  //   const desc = formData.get("desc") as string;
  //   console.log(file, desc);

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  console.log("formData is : -------- ",formData);
  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      transformation: {
        pre: "w-600",
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
