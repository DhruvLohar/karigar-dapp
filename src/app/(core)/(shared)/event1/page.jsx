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

const eventData = {
  title: "Government Schemes Awareness",
  description:
    "Learn about the latest government initiatives and schemes to support artisans, including financial assistance and market access programs.",
  address: "Community Hall, Sector 12, New Delhi",
  date: "2024-02-15",
  event_level: "All Levels",
  tags: ["government schemes", "financial aid", "market access"],
  organizer: "Ministry of Textiles",
  price: 0,
  is_conducted_by_artisan: false,
  images: [
    "/districtArtisanImage1.png",
    "/districtArtisanImage2.png",
    "/districtArtisanImage3.png",
    "/districtArtisanImage4.png",
  ],
};

export default function Event1View() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <ImageCollage individualCardData={eventData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold text-[#1A2B4A]">
            {eventData.title}
          </h1>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin size={20} />
            <p className="text-base">{eventData.address}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {eventData.tags.map((badge, index) => (
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
                <p className="text-base text-gray-600">{eventData.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">Duration</p>
                <p className="text-base text-gray-600">3 hours</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">Organizers</p>
                <p className="text-base text-gray-600">{eventData.organizer}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <User size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">Capacity</p>
                <p className="text-base text-gray-600">30 participants</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Tag size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">
                  Event Level
                </p>
                <p className="text-base text-gray-600">
                  {eventData.event_level}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Info size={24} className="text-[#1A2B4A]" />
              <div>
                <p className="text-sm font-medium text-[#1A2B4A]">Price</p>
                <p className="text-base text-gray-600">${eventData.price}</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#1A2B4A] mb-4">
              Description
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {eventData.description}
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#1A2B4A] mb-4">
              What You&apos;ll Learn
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Fundamental techniques of {eventData.tags[0]}</li>
              <li>Tools and materials used in {eventData.tags[0]}</li>
              <li>Safety precautions and best practices</li>
              <li>Creating your first {eventData.tags[0]} project</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#1A2B4A] mb-4">
              Event Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-[#1A2B4A] w-24 font-medium">Date:</span>
                <span className="text-[#4A5568]">{eventData.date}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#1A2B4A] w-24 font-medium">Time:</span>
                <span className="text-[#4A5568]">10:00 AM - 1:00 PM</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#1A2B4A] w-24 font-medium">
                  Location:
                </span>
                <span className="text-[#4A5568] flex-1">
                  {eventData.address}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-[#1A2B4A] w-24 font-medium">Price:</span>
                <span className="text-[#4A5568]">${eventData.price}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#1A2B4A] w-24 font-medium">
                  Availability:
                </span>
                <span className="text-green-600 font-medium">
                  15 spots left
                </span>
              </div>
            </div>
            <Button className="w-full mt-6 bg-dori hover:bg-dori/90">
              Register Now
            </Button>
          </div>
          <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#1A2B4A] mb-4">
              Instructor
            </h3>
            <div className="flex items-center space-x-4">
              <img
                src="/artisanProfileImage1.png"
                alt="Instructor"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-medium text-[#1A2B4A]">Jane Doe</p>
                <p className="text-sm text-gray-600">Master Artisan</p>
                <div className="flex items-center mt-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">(4.9)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
