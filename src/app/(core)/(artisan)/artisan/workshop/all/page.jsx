import React from "react";
import DistrictSearch from "@/components/custom/DistrictSearch";
import { Button } from "@/components/ui/button";
import FilterSelect from "@/components/custom/Select";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ImageCollage from "@/components/custom/ImageCollage";
import {
  CalendarDays,
  MapPin,
  Calendar,
  Users,
  Tag,
  Clock,
} from "lucide-react";

const districtsList = [
  { value: "district1", label: "District 1" },
  { value: "district2", label: "District 2" },
  { value: "district3", label: "District 3" },
  { value: "district4", label: "District 4" },
  { value: "district5", label: "District 5" },
];

const cityList = [
  { value: "city1", label: "City 1" },
  { value: "city2", label: "City 2" },
  { value: "city3", label: "City 3" },
  { value: "city4", label: "City 4" },
  { value: "city5", label: "City 5" },
];

const stateList = [
  { value: "state1", label: "State 1" },
  { value: "state2", label: "State 2" },
  { value: "state3", label: "State 3" },
  { value: "state4", label: "State 4" },
  { value: "state5", label: "State 5" },
];

const workshopData = [
  {
    title: "Traditional Pottery Techniques",
    description:
      "Learn the art of traditional pottery from a master artisan. This workshop covers various techniques, from hand-building to wheel throwing.",
    address: "Artisan Village, Jaipur, Rajasthan",
    date: "2024-03-15",
    workshop_level: "Beginner to Intermediate",
    tags: ["pottery", "traditional crafts", "handmade"],
    organizer: "Master Artisan Rajesh Kumar",
    price: 3500,
    is_conducted_by_artisan: true,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
  {
    title: "Digital Marketing for Artisans",
    description:
      "Learn how to promote and sell your crafts online in this government-sponsored workshop for artisans.",
    address: "Digital Empowerment Center, New Delhi",
    date: "2024-05-20",
    workshop_level: "Beginner",
    tags: ["digital marketing", "e-commerce", "artisan empowerment"],
    organizer: "Ministry of Textiles, Government of India",
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
    title: "Digital Marketing for Artisans",
    description:
      "Learn how to promote and sell your crafts online in this government-sponsored workshop for artisans.",
    address: "Digital Empowerment Center, New Delhi",
    date: "2024-05-20",
    workshop_level: "Beginner",
    tags: ["digital marketing", "e-commerce", "artisan empowerment"],
    organizer: "Ministry of Textiles, Government of India",
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
    title: "Sustainable Crafts: Eco-friendly Materials and Techniques",
    description:
      "Discover how to incorporate sustainable practices and materials into your craft, led by an environmentally conscious artisan.",
    address: "Green Crafts Center, Pondicherry",
    date: "2024-06-05",
    workshop_level: "All Levels",
    tags: ["sustainable crafts", "eco-friendly", "innovation"],
    organizer: "Eco Artisan Collective",
    price: 4200,
    is_conducted_by_artisan: true,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
];

export default function AllWorkshopView() {
  const userType = "artisan";

  if (userType !== "artisan") {
    return <div className="text-black">ARTISAN NAHI HAI TU BSDK</div>;
  }

  // Add this new section for user's bookings
  const userBookings = [
    { title: "Workshop Title 1", date: "March 10, 2024", daysLeft: 3 },
    { title: "Workshop Title 1", date: "March 10, 2024", daysLeft: 3 },
  ];

  return (
    <main>
      <header className="text-center py-8 px-4">
        <h1 className="text-[#1A2B4A] text-4xl font-bold mb-2">Workshops</h1>
        <p className="text-[#6B7280] text-xl">
          Educating and Enhancing your Skills
        </p>
      </header>
      <section className="bg-[#C3C9D2] w-full rounded-3xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Your Bookings</h3>
        <div className="flex flex-wrap gap-4 justify-start">
          {userBookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-3xl shadow flex items-center justify-between w-full sm:w-[calc(50%-1rem)] lg:w-[calc(60%-1rem)] xl:w-[calc(35%-1rem)]"
            >
              <div className="flex-grow">
                <h4 className="font-semibold mb-2">{booking.title}</h4>
                <p className="text-sm text-gray-600 flex items-center mb-1">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  {booking.date}
                </p>
                <p className="text-sm text-gray-600">
                  {booking.daysLeft} Days Left
                </p>
              </div>
              <Button
                variant="outline"
                className="bg-[#1A2B4A] text-white hover:bg-sky-900 hover:text-white ml-4"
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-fit py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopData.map((card, index) => (
            <Link
              key={index}
              // href={`/artisan/workshop/${encodeURIComponent(card.title)}`}
              href={`/workshop1`}
              className="block"
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <ImageCollage individualCardData={card} />
                  <div className="p-4">
                    <CardTitle className="text-lg font-semibold text-[#1A2B4A] mb-2 hover:text-dori transition-colors duration-300">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-4">
                      {card.description.length > 80
                        ? `${card.description.substring(0, 80)}...`
                        : card.description}
                    </CardDescription>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1 flex-shrink-0" />
                        <span className="truncate">
                          {card.address.split(",")[0]}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1 flex-shrink-0" />
                        <span className="truncate">{card.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1 flex-shrink-0" />
                        <span>4 hours</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={14} className="mr-1 flex-shrink-0" />
                        <span className="truncate">{card.organizer}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Tag
                          size={14}
                          className="mr-1 text-dori flex-shrink-0"
                        />
                        <span className="font-semibold text-dori text-sm">
                          {card.price === 0 ? "Free" : `₹${card.price}`}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="bg-dori text-white hover:bg-dori/90 text-xs px-2 py-1"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-4 py-3 bg-gray-50">
                  <div className="flex flex-wrap gap-1">
                    {card.tags.slice(0, 3).map((badge, index) => (
                      <Badge
                        key={index}
                        className="px-1.5 py-0.5 text-[10px] bg-blue-100 text-blue-800"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
