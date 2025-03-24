"use client";

import React, { useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Store,
  Calendar,
  Settings,
  Laptop,
  LogOut,
  Package,
  Wrench,
  Briefcase,
  ChevronFirst,
  ChevronLast,
} from "lucide-react";

// Update the context type to include the setExpanded function
interface SidebarContextType {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType>({
  expanded: true,
  setExpanded: () => {},
});

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);

  const sideBarRoutes = [
    { title: "HOME", url: "/artisan/home", icon: Home },
    { title: "SHOP", url: "/product/all", icon: Store },
    { title: "WORKSHOP", url: "/artisan/workshop/list", icon: Settings },
    { title: "EVENTS", url: "/events/all", icon: Calendar },
    { title: "INVENTORY", url: "/artisan/manage/inventory", icon: Laptop },
    { title: "ORDERS", url: "/artisan/manage/orders", icon: Package },
    { title: "JOB PORTAL", url: "/artisan/jobPortal/all", icon: Briefcase },
    { title: "RENTAL MACHINES", url: "/artisan/rentalMachines/all", icon: Wrench },
  ];

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <aside className={cn("h-screen sticky top-0", className)}>
        <nav className="h-full flex flex-col bg-blue-950 border-r border-blue-900">
          <div className="p-4 pb-2 flex justify-between items-center">
            <div className={cn("flex items-center gap-2", expanded ? "" : "hidden")}>
              <span className="text-white font-medium text-lg">Artisan Panel</span>
            </div>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white"
            >
              {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
            </button>
          </div>

          {/* Profile Section */}
          <div className="border-t border-b border-blue-900 p-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-semibold">
                KN
              </div>
              {expanded && (
                <div>
                  <h4 className="text-white font-semibold">Krishay Nair</h4>
                  <span className="text-blue-300 text-sm">krishay958@gmail.com</span>
                </div>
              )}
            </div>
            {expanded && (
              <div className="text-blue-300 text-xs mt-2">
                <p>Artisan ID: ART-2024-001</p>
                <p>Member since: March 2024</p>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <ul className="flex-1 px-3 py-4">
            {sideBarRoutes.map((route) => (
              <SidebarItem
                key={route.url}
                icon={route.icon}
                text={route.title}
                url={route.url}
                active={pathname === route.url}
              />
            ))}
          </ul>

          {/* Bottom Actions */}
          <div className="border-t border-blue-900 p-3">
            <SidebarItem
              icon={Settings}
              text="SETTINGS"
              url="/artisan/settings"
              active={pathname === "/artisan/settings"}
            />
            <button
              onClick={() => {/* Add logout logic */}}
              className="flex items-center gap-2 py-2.5 px-3 text-white hover:bg-blue-900 rounded-lg w-full"
            >
              <LogOut size={20} />
              {expanded && <span>LOGOUT</span>}
            </button>
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
};

// SidebarItem component
function SidebarItem({ 
  icon: Icon, 
  text, 
  url, 
  active 
}: { 
  icon: any; 
  text: string; 
  url: string; 
  active: boolean 
}) {
  const { expanded } = useContext(SidebarContext);
  
  return (
    <Link href={url}>
      <li
        className={cn(
          "relative flex items-center py-2.5 px-3 my-1",
          "font-medium rounded-lg cursor-pointer",
          "transition-colors group",
          active 
            ? "bg-[#FFAD60] text-blue-950" 
            : "text-white hover:bg-blue-900"
        )}
      >
        <Icon size={20} className={active ? "text-blue-950" : "text-white"} />
        {expanded && (
          <span className="ml-3 text-sm">
            {text}
          </span>
        )}
      </li>
    </Link>
  );
}

export default Sidebar;
