"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormDataType {
  firstName: string;
  lastName: string;
  contactNumber: string;
  state: string;
  indian: string;
  city: string;
  district: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    contactNumber: "",
    state: "",
    indian: "Indian",
    city: "",
    district: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
