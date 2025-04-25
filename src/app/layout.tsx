import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";
import MobileNavBar from "@/components/MobileNavBar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MoSaeed X",
  description: "Next.js social media application project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          {/* Show LeftBar on tablets (md) and larger screens */}
          <div className="hidden md:block px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray pb-16 md:pb-0">
            {children}
          </div>
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1">
            <RightBar />
          </div>
        </div>

        {/* Mobile Navigation Bar - shown only on screens smaller than md */}
        <div className="md:hidden">
          <MobileNavBar />
        </div>
      </body>
    </html>
  );
}
