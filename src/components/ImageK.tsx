import { Image, ImageKitProvider } from "@imagekit/next";

type ImageKProps = {
  path: string;
  w?: string;
  h?: string;
  alt: string;
  className?: string;
  tr?: string; // مثل "w-300,h-200"
};

export default function ImageK({
  path,
  w,
  h,
  alt,
  className,
  tr,
}: ImageKProps) {
  const endPoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string;

  const src = tr ? `${path}?tr=${tr}` : path;

  return (
    <ImageKitProvider urlEndpoint={endPoint}>
      <Image
        src={src}
        width={w ? parseInt(w) : 500}
        height={h ? parseInt(h) : 500}
        alt={alt}
        className={className}
      />
    </ImageKitProvider>
  );
}
