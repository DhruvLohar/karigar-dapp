"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    contactNumber: "",
  });

  interface FormInputEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement;
  }

  interface FormData {
    contactNumber: string;
  }

  const handleInputChange = (e: FormInputEvent): void => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {
    preventDefault: () => void;
  }

  const handleSubmit = (e: FormSubmitEvent): void => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
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
            alt="Authentication illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="w-2/3 bg-white rounded-l-3xl shadow-lg p-8 flex flex-col justify-center">
        <h1 className="scroll-m-20 text-3xl mb-2 font-semibold tracking-tight lg:text-5xl">
          Welcome Back
        </h1>
        <p className="text-md text-slate-500 mb-8">
          Enter your contact number to login to your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />
          <Link href={"/onboarding"}>
            <Button className="w-full py-6 rounded-lg text-md mt-8" type="submit">
              Login
            </Button>
          </Link>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">Or</p>
          <Button
            variant="outline"
            className="w-full py-6 rounded-lg text-md mt-4 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Sign up with Google
          </Button>
        </div>
      </div>
    </main>
  );
}
