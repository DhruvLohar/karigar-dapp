"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OnBoarding() {
  const [selected, setSelected] = useState("user");

  return (
    <main className="h-screen flex">
      {/* Left section */}
      <div className="w-1/3 bg-slate-100 p-8 flex flex-col items-center justify-center">
        <h2 className="text-xl text-slate-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <div className="flex-grow flex items-center justify-center">
          <Image
            src="/reset-password.png"
            width={300}
            height={300}
            alt="Authentication illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="w-2/3 bg-white rounded-l-3xl shadow-lg p-8 flex flex-col justify-center">
        <h1 className="scroll-m-20 text-3xl mb-2 font-semibold tracking-tight lg:text-5xl text-[#1A2B4A]">
          How do you want to join our platform?
        </h1>
        <p className="text-md text-slate-500 mb-8">
          We&apos;ll personalize your experience accordingly, providing you the best
          for you!
        </p>

        <div className="space-y-4 mb-6">
          <div
            className={cn(
              "border-2 rounded-lg p-4 cursor-pointer",
              selected === "user" ? "border-primary" : "border-slate-300"
            )}
            onClick={() => setSelected("user")}
          >
            <h3 className="scroll-m-20 text-xl mb-2 text-[#1A2B4A] font-bold lg:text-3xl">
              User
            </h3>
            <p className="text-md text-slate-500">
              I&apos;m here to buy products and explore the ODOP Platform
            </p>
          </div>

          <div
            className={cn(
              "border-2 rounded-lg p-4 cursor-pointer",
              selected === "artisan" ? "border-primary" : "border-slate-300"
            )}
            onClick={() => setSelected("artisan")}
          >
            <h3 className="scroll-m-20 text-xl mb-2 text-[#1A2B4A] font-bold lg:text-3xl">
              Artisan
            </h3>
            <p className="text-md text-slate-500">
              I&apos;m here to list my unique product on the ODOP Platform and
              represent my district!
            </p>
          </div>
        </div>

        <Link
          className="w-full"
          href={selected === "user" ? "/register/user" : "/register/artisan"}
        >
          <Button className="w-1/2 py-5 text-lg">Create My Account</Button>
        </Link>
      </div>
    </main>
  );
}
