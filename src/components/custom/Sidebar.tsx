"use client";

import React, { useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Home,
  Store,
  Calendar,
  Wrench,
  Settings,
  Laptop,
  ChevronFirst,
  ChevronLast,
  MoreVertical,
  Briefcase, // Add this import
} from "lucide-react";

const SidebarContext = createContext<{ expanded: boolean }>({ expanded: false });

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);

  const sideBarRoutes = [
    { title: "HOME", url: "/artisan/home", icon: Home, regex: /^\/$/ },
    { title: "SHOP", url: "/product/all", icon: Store, regex: /^\/shop$/ },
    // {
    //   title: "RENTAL MACHINES",
    //   url: "/artisan/rentalMachines/all",
    //   icon: Wrench,
    //   regex: /^\/artisan\/rentalMachines(?:\/.*)?$/,
    // },
    {
      title: "WORKSHOP",
      url: "/artisan/workshop/list",
      icon: Settings,
      regex: /^\/workshop(?:\/.*)?$/,
    },
    {
      title: "EVENTS",
      url: "/events/all",
      icon: Calendar,
      regex: /^\/events(?:\/.*)?$/,
    },
    {
      title: "INVENTORY",
      url: "/artisan/manage/inventory",
      icon: Laptop,
      regex: /^\/inventory(?:\/.*)?$/,
    },

    // {
    //   title: "JOB PORTAL",
    //   url: "/artisan/jobPortal/all",
    //   icon: Briefcase,
    //   regex: /^\/artisan\/jobPortal(?:\/.*)?$/,
    // },
  ];

  return (
    <aside
      className={cn(
        "border-r border-y border-outline py-8",
        "text-blue-950 h-screen transition-all duration-300",
        "flex flex-col sticky top-0 left-0", // Add sticky positioning
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex flex-col h-full bg-dori overflow-y-auto">
        {" "}
        {/* Allow vertical scrolling if needed */}{" "}
        {/* Add overflow-hidden here */}
        <div className="flex items-center justify-between px-4 pb-2">
          <Link href="/">
            <Image
              src="/img/ODOP1.png"
              width={expanded ? 100 : 0}
              height={10}
              className={`transition-all ${expanded ? "block" : "hidden"
                } cursor-pointer`}
              alt="Logo"
            />
          </Link>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 text-black hover:bg-white"
          >
            {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <nav className="flex-1 px-3">
            {sideBarRoutes.map((route, i) => (
              <SidebarItem
                key={i}
                icon={route.icon}
                text={route.title}
                url={route.url}
                active={!!pathname.match(route.regex)}
              />
            ))}
          </nav>
        </SidebarContext.Provider>
        {/* Profile section */}
        <div className="border-t flex p-3 items-center">
          <Image
            src="/artisanProfileImage1.png"
            alt="User"
            width={40} // Add this line
            height={40} // Add this line
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
              }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-blue-950">John Doe</h4>
              <span className="text-xs text-blue-950">john.doe@example.com</span>
            </div>
            <MoreVertical size={20} className="text-blue-950" />
          </div>
        </div>
      </div>
    </aside>
  );
}

import { LucideIcon } from 'lucide-react';

function SidebarItem({ icon: Icon, text, url, active }: { icon: LucideIcon; text: string; url: string; active: boolean }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link href={url}>
      <li
        className={cn(
          "relative flex items-center py-3 px-3 my-1 ",
          "font-medium rounded-md cursor-pointer",
          "transition-colors group",
          active ? "bg-[#FFAD60] text-blue-950" : "hover:bg-white/10 text-blue-950"
        )}
      >
        <div
          className={cn(
            "w-8 h-8 flex items-center justify-center",
            "transition-all duration-300",
            expanded ? "" : "w-10 h-10"
          )}
        >
          {Icon ? (
            <Icon size={expanded ? 24 : 28} className="text-blue-950" />
          ) : (
            <Home size={expanded ? 24 : 28} className="text-blue-950" />
          )}
        </div>
        <span
          className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
            }`}
        >
          {text}
        </span>
      </li>
    </Link>
  );
}
