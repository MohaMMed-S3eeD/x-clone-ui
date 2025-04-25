import React from "react";
import Link from "next/link";
import ImageK from "./ImageK";

const MobileNavBar = () => {
  // Use only the most important navigation items for mobile
  const mobileMenuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Search",
      link: "/Explore",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notify",
      link: "/Notification",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/Profile",
      icon: "profile.svg",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-borderGray z-50">
      <div className="flex justify-around items-center h-16">
        {mobileMenuItems.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="flex flex-col items-center justify-center w-full h-full opacity-70 hover:opacity-100 transition-opacity"
          >
            <div className="w-6 h-6 mb-1">
              <ImageK
                path={`icons/${item.icon}`}
                alt={item.name}
                h="24"
                w="24"
              />
            </div>
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Floating Post Button */}
      <div className="absolute -top-14 right-5">
        <Link
          href="/compose/post"
          className="bg-iconBlue text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          aria-label="Create post"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavBar;