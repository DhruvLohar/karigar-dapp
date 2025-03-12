"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ChatBotModal from "./ChatBotModal";
import {
  Menu,
  X,
  Bell,
  MessageCircle,
  Search,
  MapPin,
  ShoppingCart
} from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isArtisan, setIsArtisan] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const userName = "Mr. John Doe";

  const userLinks = [
    { name: "Home", url: "/" },
    { name: "My Profile", url: "/user" },
    { name: "Districts", url: "/districts/all" },
    { name: "Explore Products", url: "/product/all" },
    { name: "My Orders", url: "/order" },
    { name: "My Cart", url: "/cart" },
  ];

  const artisanLinks = [
    { name: "Home", url: "/" },
    { name: "My Profile", url: `/artisan/${userName}` },
    { name: "Bulk Order Request", url: "/artisan/manage/orders" },
    { name: "Inventory", url: "/artisan/manage/inventory" },
    { name: "WorkShops", url: "/workshop/all" },
    { name: "Job Portal", url: "/artisan/jobPortal/all" },
    { name: "Rental Machines", url: "/artisan/rentalMachines/all" },
  ];

  const links = isArtisan ? artisanLinks : userLinks;

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-2">
      <div className="container mx-auto">
        <div className="bg-white rounded-full shadow-lg">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/img/ODOP1.png"
                  alt="Dori Logo"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <nav className="hidden md:flex space-x-6">
                {links.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    className="text-blue-950 "
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex-1 mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center text-blue-950">
                <MapPin className="h-5 w-5 mr-1" />
                <span className="text-sm">Mumbai, India</span>
              </div>

              <Button
                onClick={() => setIsArtisan((prev) => !prev)}
                className="hidden md:block text-xs p-1 bg-white text-dori hover:bg-gray-100"
              >
                {isArtisan ? "User" : "Artisan"} View
              </Button>
              <Link href="/notification" className="text-blue-950 hover:text-gray-200">
                <Bell className="h-6 w-6" />
              </Link>

              <Link href="/cart" className="hidden md:block hover:text-gray-200">
                <ShoppingCart className="h-6 w-6 text-blue-950" />
              </Link>

              <button
                onClick={() => setOpen((prev) => !prev)}
                className="text-blue-950 md:hidden"
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 py-20 p-3 h-full w-full bg-dori z-10 ${open ? "" : "hidden"
          }`}
      >
        {links.map((link) => (
          <div
            className="hover:bg-dori/80 rounded-lg w-full p-3 flex justify-start mb-1"
            key={link.url}
          >
            <Link
              href={link.url}
              onClick={() => setOpen(false)}
              className="text-blue-950 text-2xl font-bold"
            >
              {link.name}
            </Link>
          </div>
        ))}
        <Button
          variant={isArtisan ? "default" : "secondary"}
          onClick={() => setIsArtisan((prev) => !prev)}
          className="mt-4 bg-blue-950 text-white hover:bg-gray-100"
        >
          Switch to {isArtisan ? "User" : "Artisan"} View
        </Button>
      </div>

      <ChatBotModal />
    </header>
  );
}
