import React from "react";
import Link from "next/link";
import {
  ShoppingBag,
  School,
  CalendarDays,
  MapPin,
  Calendar,
  Users,
  Tag,
  Clock,
  BookImage,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ImageCollage from "@/components/custom/ImageCollage";
import ChatBotModal from "@/components/custom/ChatBotModal";

export default function ArtisanHomePage() {
  const userBookings = [
    {
      title: "Traditional Pottery Workshop",
      date: "March 10, 2024",
      daysLeft: 3,
    },
    { title: "Digital Marketing Seminar", date: "April 5, 2024", daysLeft: 15 },
  ];

  const featuredWorkshops = [
    {
      title: "Traditional Pottery Techniques",
      description:
        "Learn the art of traditional pottery from a master artisan.",
      address: "Artisan Village, Jaipur, Rajasthan",
      date: "2024-03-15",
      organizer: "Master Artisan Rajesh Kumar",
      price: 3500,
      tags: ["pottery", "traditional crafts", "handmade"],
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
        "Learn how to promote and sell your crafts online in this government-sponsored workshop.",
      address: "Digital Empowerment Center, New Delhi",
      date: "2024-05-20",
      organizer: "Ministry of Textiles, Government of India",
      price: 0,
      tags: ["digital marketing", "e-commerce", "artisan empowerment"],
      images: [
        "/districtArtisanImage1.png",
        "/districtArtisanImage2.png",
        "/districtArtisanImage3.png",
        "/districtArtisanImage4.png",
      ],
    },
    {
      title: "Geographical Indication Workshop",
      description:
        "Learn about the importance of Geographical Indication for your crafts.",
      address: "Artisan Hub, New Delhi",
      date: "2024-03-15",
      organizer: "Ministry of Textiles, Government of India",
      price: 0,
      tags: ["Geographical Indication", "Crafts", "Handmade"],
      images: [
        "/districtArtisanImage1.png",
        "/districtArtisanImage2.png",
        "/districtArtisanImage3.png",
        "/districtArtisanImage4.png",
      ],
    },
  ];

  const featuredMachines = [
    {
      id: 1,
      name: "Industrial Pottery Wheel",
      location: "Jaipur, Rajasthan",
      price: 200,
      imageUrl: "/districtArtisanImage1.png",
      description: "High-quality pottery wheel for professional use",
      tags: ["Pottery", "Jaipur", "Rajasthan"],
    },
    {
      id: 2,
      name: "Wood Carving Tools Set",
      location: "Saharanpur, Uttar Pradesh",
      price: 150,
      imageUrl: "/districtArtisanImage2.png",
      description: "Complete set of wood carving tools for intricate designs",
      tags: ["Wood Craft", "Saharanpur", "Uttar Pradesh"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-8 text-dori">Welcome, Artisan!</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-dori/80">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickLink href="/artisan/shop" icon={<ShoppingBag />}>
            My Shop
          </QuickLink>
          <QuickLink href="/artisan/brochure" icon={<BookImage />}>
            Create Brochure
          </QuickLink>
          <ChatBotModal />
          <QuickLink
            href="/artisan/workshop/list"
            icon={<School />}
          >
            Initiate Workshop
          </QuickLink>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4  text-dori/80">
          Your Upcoming Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userBookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
            >
              <div>
                <h4 className="font-semibold mb-2 text-[#1A2B4A]">
                  {booking.title}
                </h4>
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
                className="bg-blue-950 text-white hover:bg-blue-950/90"
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-dori/80">
          Featured Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorkshops.map((workshop, index) => (
            <Card
              key={index}
              className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <ImageCollage individualCardData={workshop} />
                <div className="p-4">
                  <CardTitle className="text-lg font-semibold text-[#1A2B4A] mb-2">
                    {workshop.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 mb-4">
                    {workshop.description.length > 80
                      ? `${workshop.description.substring(0, 80)}...`
                      : workshop.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1 flex-shrink-0" />
                      <span className="truncate">
                        {workshop.address.split(",")[0]}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 flex-shrink-0" />
                      <span className="truncate">{workshop.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 flex-shrink-0" />
                      <span>4 hours</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1 flex-shrink-0" />
                      <span className="truncate">{workshop.organizer}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Tag size={14} className="mr-1 text-dori flex-shrink-0" />
                      <span className="font-semibold text-dori text-sm">
                        {workshop.price === 0 ? "Free" : `₹${workshop.price}`}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      className="bg-blue-950 text-white hover:bg-blue-950/90 text-xs px-2 py-1"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-4 py-3 bg-gray-50">
                <div className="flex flex-wrap gap-1">
                  {workshop.tags.slice(0, 3).map((badge, index) => (
                    <Badge
                      key={index}
                      className="px-1.5 py-0.5 text-[10px] bg-blue-950/20 text-dori hover:bg-blue-950/40 hover:text-white"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-dori/80">
          Featured Rental Machines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMachines.map((machine) => (
            <Card
              key={machine.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-4">
                <img
                  src={machine.imageUrl}
                  alt={machine.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <CardTitle className="text-lg font-semibold text-[#1A2B4A] mb-2">
                  {machine.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-4">
                  {machine.description}
                </CardDescription>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    {machine.location}
                  </div>
                  <div className="font-semibold text-dori">
                    ₹{machine.price}/day
                  </div>
                </div>
                <Button className="w-full bg-blue-950 text-white hover:bg-blue-950/90">
                  Rent Now
                </Button>
              </CardContent>
              <CardFooter className="px-4 py-3 bg-gray-50">
                <div className="flex flex-wrap gap-1">
                  {machine.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      className="px-1.5 py-0.5 text-[10px] bg-blue-950/20 text-dori hover:bg-blue-950/40 hover:text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function QuickLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center bg-white text-[#1A2B4A] px-4 py-3 rounded-lg shadow hover:bg-gray-50 transition-colors"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
}
