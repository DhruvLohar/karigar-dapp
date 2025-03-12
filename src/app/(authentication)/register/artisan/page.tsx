"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    state: "",
    indian: "Indian",
    city: "",
    district: "",
  });

  interface FormData {
    firstName: string;
    lastName: string;
    contactNumber: string;
    state: string;
    indian: string;
    city: string;
    district: string;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== "");
    if (!allFieldsFilled) {
      toast.error("Please fill in all fields before continuing.");
      return;
    }

    // Redirect to /artisan/home after successful registration
    router.push("/artisan/home");
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
        <h1 className="scroll-m-20 text-3xl mb-2 font-semibold tracking-tight lg:text-5xl">
          Personal Information
        </h1>
        <p className="text-md text-slate-500 mb-8">
          Fill correct details below to create your account in few seconds!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <Input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <Input
            placeholder="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />
          <div className="flex space-x-4">
            <Input
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Indian"
              name="indian"
              value={formData.indian}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="flex space-x-4">
            <Input
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
            <Input
              placeholder="District"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
            />
          </div>
          <Button className="w-full py-6 rounded-lg text-md mt-8" type="submit">
            Continue
          </Button>
        </form>
      </div>
    </main>
  );
}
