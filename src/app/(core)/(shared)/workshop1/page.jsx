"use client";

import ImageCollage from "@/components/custom/ImageCollage";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Users,
  Tag,
  Info,
  Clock,
  User,
  Star,
} from "lucide-react";

const potteryWheelData = {
  title: "Traditional Pottery Techniques",
  description:
    "Learn the art of traditional pottery from a master artisan. This workshop covers various techniques, from hand-building to wheel throwing.",
  address: "Artisan Village, Jaipur, Rajasthan",
  date: "2024-03-15",
  workshop_level: "Beginner to Intermediate",
  tags: ["pottery", "traditional crafts", "handmade"],
  organizer: "Master Artisan Rajesh Kumar",
  price: 50,
  is_conducted_by_artisan: true,
  images: [
    "/districtArtisanImage1.png",
    "/districtArtisanImage2.png",
    "/districtArtisanImage3.png",
    "/districtArtisanImage4.png",
  ],
};

export default function PotteryWheelPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <ImageCollage individualCardData={potteryWheelData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold text-[#1A2B4A]">
            {potteryWheelData.title}
          </h1>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin size={20} />
            <p className="text-base">{potteryWheelData.address}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {potteryWheelData.tags.map((badge, index) => (
              <span
                key={badge + index}
                className="bg-blue-100 text-[#1A2B4A] text-sm font-medium px-3 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Calendar size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">Date</p>
                <p className="text-base text-gray-600">
                  {potteryWheelData.date}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">Duration</p>
                <p className="text-base text-gray-600">4 hours</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">Organizer</p>
                <p className="text-base text-gray-600">
                  {potteryWheelData.organizer}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <User size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">Capacity</p>
                <p className="text-base text-gray-600">20 participants</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Tag size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">
                  Workshop Level
                </p>
                <p className="text-base text-gray-600">
                  {potteryWheelData.workshop_level}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Info size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">Price</p>
                <p className="text-base text-gray-600">
                  ${potteryWheelData.price}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#1A2B4A] mb-4">
              Description
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {potteryWheelData.description}
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#1A2B4A] mb-4">
              What You&apos;ll Learn
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Advanced techniques in {potteryWheelData.tags[0]}</li>
              <li>Using specialized tools for {potteryWheelData.tags[0]}</li>
              <li>Creating complex designs and patterns</li>
              <li>
                Tips for selling your {potteryWheelData.tags[0]} creations
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-[#1A2B4A] mb-6">
              Workshop Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Calendar className="w-5 h-5 text-dori" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{potteryWheelData.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-5 h-5 text-dori" />
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">9:00 AM - 1:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-dori" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{potteryWheelData.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Tag className="w-5 h-5 text-dori" />
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">${potteryWheelData.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="w-5 h-5 text-dori" />
                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="font-medium text-green-600">8 spots left</p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-dori hover:bg-dori/90 text-white">
              Register Now
            </Button>
          </div>
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-[#1A2B4A] mb-4">
              {potteryWheelData.is_conducted_by_artisan
                ? "Instructor"
                : "Organizer"}
            </h3>
            <div className="flex items-center space-x-4">
              {potteryWheelData.is_conducted_by_artisan ? (
                <>
                  <img
                    src="/artisanProfileImage1.png"
                    alt="Instructor"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#1A2B4A]">
                      {potteryWheelData.organizer}
                    </p>
                    <p className="text-sm text-gray-600">Master Artisan</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-600">(5.0)</span>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <p className="font-medium text-[#1A2B4A]">
                    {potteryWheelData.organizer}
                  </p>
                  <p className="text-sm text-gray-600">
                    Government Organization
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
