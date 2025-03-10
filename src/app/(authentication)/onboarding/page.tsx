"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OnBoarding() {
  const [selected, setSelected] = useState("user");

  return (
    <main className="h-screen flex flex-col items-center justify-around px-6">
      <Image
        src={"/odopLogo.png"}
        width={200}
        height={100}
        className="mb-8"
        alt="odopLogo"
      />

      <div className="w-full flex flex-col items-start">
        <h1 className="scroll-m-20 text-3xl mb-2 font-semibold tracking-tight">
          How do you want to join our platform?
        </h1>
        <p className="text-md text-slate-500 mb-8">
          We’ll personalize your experience accordingly, providing you the best
          for you!
        </p>

        <div
          className={cn(
            "border-2 rounded-lg mb-4 p-4",
            selected === "user" ? "border-primary" : "border-slate-300"
          )}
          onClick={() => setSelected("user")}
        >
          <div className="flex flex-col items-start">
            <h1 className="scroll-m-20 text-2xl mb-2 font-bold lg:text-3xl">
              User
            </h1>
            <p className="text-md text-slate-500">
              I’m here to buy products and explore the ODOP Platform
            </p>
          </div>
        </div>

        <div
          className={cn(
            "border-2 rounded-lg mb-4 p-4",
            selected === "artisan" ? "border-primary" : "border-slate-300"
          )}
          onClick={() => setSelected("artisan")}
        >
          <div className="flex flex-col items-start">
            <h1 className="scroll-m-20 text-2xl mb-2 font-bold lg:text-3xl">
              Artisan
            </h1>
            <p className="text-md text-slate-500">
              I’m here to list my unique product on the ODOP Platform and
              represent my district!
            </p>
          </div>
        </div>
      </div>

      <Link
        className="w-full"
        href={selected === "user" ? "/login" : "/register/artisan"}
      >
        <Button className="w-full py-8 text-lg mt-8">Create My Account</Button>
      </Link>
    </main>
  );
}
