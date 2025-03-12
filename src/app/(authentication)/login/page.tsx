"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// List of authenticated users
// TODO: Add more authenticated users as needed
const AUTHORIZED_EMAILS = [
  "krishay958@gmail.com",
  // Add more emails here
];

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });

  interface FormInputEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement;
  }

  interface FormData {
    email: string;
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
    
    if (AUTHORIZED_EMAILS.includes(formData.email.toLowerCase())) {
      // Successful login
      toast.success("Login successful!");
      router.push("/artisan/home"); // or wherever you want to redirect after login
    } else {
      // Unauthorized email
      toast.error("Unauthorized email address. Please try again.");
    }
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
          Enter your email to login to your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Button className="w-full py-6 rounded-lg text-md mt-8" type="submit">
            Login
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">Don't have an account?</p>
          <Link href="/onboarding" className="w-full">
            <Button
              variant="outline"
              className="w-full py-6 rounded-lg text-md mt-4"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
