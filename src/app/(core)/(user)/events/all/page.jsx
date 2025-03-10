import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ImageCollage from "@/components/custom/ImageCollage";

const eventData = [
  {
    title: "Government Schemes Awareness Workshop",
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
  },
  {
    title: "Artisan Skill Development Program",
    description:
      "Enhance your craftsmanship skills and learn about new techniques supported by government training programs.",
    address: "Craft Excellence Center, Gandhi Nagar, Ahmedabad",
    date: "2024-03-20",
    event_level: "Intermediate",
    tags: ["skill development", "craftsmanship", "government training"],
    organizer: "Ministry of Skill Development and Entrepreneurship",
    price: 0,
    is_conducted_by_artisan: false,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
  {
    title: "Digital Marketing for Artisans Seminar",
    description:
      "Learn how to leverage digital platforms to showcase and sell your crafts, part of the Digital India initiative for artisans.",
    address: "Tech Hub, MG Road, Bangalore",
    date: "2024-04-10",
    event_level: "Beginner",
    tags: ["digital marketing", "e-commerce", "online presence"],
    organizer: "Ministry of Electronics and Information Technology",
    price: 0,
    is_conducted_by_artisan: false,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
  {
    title: "Artisan Rights and Intellectual Property Seminar",
    description:
      "Understand your rights as an artisan, including intellectual property protection and fair trade practices under government policies.",
    address: "District Court Complex, Jaipur",
    date: "2024-05-05",
    event_level: "All Levels",
    tags: ["legal rights", "intellectual property", "fair trade"],
    organizer: "Ministry of Commerce and Industry",
    price: 0,
    is_conducted_by_artisan: false,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
];
export default function AllEventView() {
  const userType = "User";

  if (userType !== "User") {
    return <div className="text-black">USER NAHI HAI TU BSDK</div>;
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white ">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-[#1A2B4A]">Upcoming Events</h1>
          <p className="text-gray-600 mt-2">
            Discover and participate in exciting artisan events
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((card, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="overflow-hidden p-3 ">
                <ImageCollage individualCardData={card} />
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold mb-2 truncate">
                  {card.title}
                </CardTitle>
                <p className="text-sm text-gray-500 mb-4">{card.date}</p>
                <CardDescription className="text-sm text-gray-600 mb-4">
                  {card.description.length > 100
                    ? `${card.description.substring(0, 100)}...`
                    : card.description}
                </CardDescription>
                <Link
                  // href={`/events/${card.title}`}
                  href={`/event1`}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Learn more
                </Link>
              </CardContent>
              <CardFooter className=" px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((badge, idx) => (
                    <Badge
                      key={idx}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
