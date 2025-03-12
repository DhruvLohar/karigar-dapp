"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function ForgotPassword() {
  interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {
    preventDefault: () => void;
  }

  const handleSubmit = (e: FormSubmitEvent): void => {
    e.preventDefault();
    // Add your forgot password logic here
  };

  return (
    <main className="h-screen flex">
      {/* Left section */}
      <div className="w-1/3 bg-slate-100 p-8 flex flex-col items-center justify-center">
        <h2 className="text-xl text-slate-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <div className="flex-grow flex items-center justify-center">
          <Image
            src="/security-shield.png"
            width={300}
            height={300}
            alt="Reset password illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="w-2/3 bg-white rounded-l-3xl shadow-lg p-8 flex flex-col justify-center">
        <h1 className="scroll-m-20 text-3xl mb-2 font-semibold tracking-tight lg:text-5xl text-[#1A2B4A]">
          Forgot Password
        </h1>
        <p className="text-md text-slate-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter registered email here"
            className="py-6 text-lg"
            required
          />
          <Button type="submit" className="w-1/2 py-6 text-lg">
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}
