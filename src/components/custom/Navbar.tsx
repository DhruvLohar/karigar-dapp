"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CartModal from "./ChatBotModal";
import { Menu, X, Bell, BotMessageSquare } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isArtisan, setIsArtisan] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
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
    // { name: "My Products", url: "/" },
    { name: "Bulk Order Request", url: "/artisan/manage/orders" },
    { name: "Inventory", url: "/artisan/manage/inventory" },
    { name: "WorkShops", url: "/workshop/all" },
    { name: "Job Portal", url: "/artisan/jobPortal/all" },
    { name: "Rental Machines", url: "/artisan/rentalMachines/all" },
    // { name: "Inter District Collab", url: "/" },
    // { name: "Chat Bot", url: "/" },
  ];

  const links = isArtisan ? artisanLinks : userLinks;

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartOpen]);

  return (
    <>
      <div
        className={`w-full h-full flex justify-between items-center px-3 md:px-10 py-3 sticky top-0 bg-white z-20`}
      >
        <Link href={"/"}>
          <Image
            src="/img/ODOP1.png"
            height={100}
            width={100}
            alt="ODOP Logo"
          />
        </Link>
        <div className="hidden md:flex space-x-4 w-full justify-center pl-8">
          {links.map((link) => (
            <Link href={link.url} key={link.url} className="text-black text-sm">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <Button
            onClick={() => setIsArtisan((prev) => !prev)}
            className="hidden md:block text-xs p-1"
          >
            go to {isArtisan ? "User" : "Artisan"} View
          </Button>
          <div className="text-black px-3" onClick={() => setCartOpen(true)}>
            <BotMessageSquare />
          </div>
          <Link href={"/notification"} className="text-black text-lg">
            <Bell />
          </Link>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="ml-4 text-black md:hidden"
          >
            {open ? <X color="#000000" /> : <Menu />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 py-20 p-3 h-full w-full bg-black z-10 ${open ? "" : "hidden"
          }`}
      >
        {links.map((link) => (
          <div
            className="hover:bg-slate-950 rounded-lg w-full p-3 flex justify-start mb-1"
            key={link.url}
          >
            {" "}
            <Link
              href={link.url}
              onClick={() => setOpen(false)}
              className="text-white text-2xl font-bold"
            >
              {link.name}
            </Link>
          </div>
        ))}
        <Button onClick={() => setIsArtisan((prev) => !prev)}>
          {isArtisan ? "Users" : "Artisans"} View
        </Button>
      </div>
      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
