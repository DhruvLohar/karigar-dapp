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
  Sparkles,
  LineChart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ImageCollage from "@/components/custom/ImageCollage";
import ChatBotModal from "@/components/custom/ChatBotModal";
import QuickLink from "@/components/custom/artisan/QuickLink";
import ArtisanCalendar from "@/components/custom/artisan/ArtisanCalendar";
import { PendingOrders } from "@/components/custom/artisan/PendingOrders";

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

  // Sample events - in a real application, these would come from your database
  const events = [
    {
      id: 1,
      title: "Craft Fair",
      date: new Date(2023, 3, 15), // April 15, 2023
      location: "Delhi Exhibition Center",
    },
    {
      id: 2,
      title: "Workshop",
      date: new Date(2023, 3, 20), // April 20, 2023
      location: "Community Center",
    },
    {
      id: 3,
      title: "Online Showcase",
      date: new Date(2023, 4, 5), // May 5, 2023
      location: "Virtual",
    },
  ];

  // Sample stats - to be replaced with real data
  const stats = [
    {
      title: "Total Orders",
      value: "42",
      icon: <ShoppingBag className="h-6 w-6 text-dori/70" />,
    },
    {
      title: "Monthly Revenue",
      value: "₹12,500",
      icon: <Tag className="h-6 w-6 text-dori/70" />,
    },
    {
      title: "Shop Visitors",
      value: "256",
      icon: <Users className="h-6 w-6 text-dori/70" />,
    },
    {
      title: "Avg. Delivery Time",
      value: "3 days",
      icon: <Clock className="h-6 w-6 text-dori/70" />,
    },
  ];

  // Sample workshops - to be replaced with real data
  const workshops = [
    {
      id: 1,
      title: "Introduction to Block Printing",
      date: "April 15, 2023",
      participants: 8,
      maxParticipants: 15,
    },
    {
      id: 2,
      title: "Advanced Pottery Techniques",
      date: "April 22, 2023",
      participants: 12,
      maxParticipants: 12,
    },
    {
      id: 3,
      title: "Traditional Textile Weaving",
      date: "May 5, 2023",
      participants: 6,
      maxParticipants: 10,
    },
  ];

  // Sample customers - to be replaced with real data
  const customers = [
    {
      id: 1,
      name: "Rajiv Sharma",
      location: "Mumbai",
      totalOrders: 7,
      totalSpent: "₹8,250",
    },
    {
      id: 2,
      name: "Ananya Patel",
      location: "Bengaluru",
      totalOrders: 5,
      totalSpent: "₹6,100",
    },
    {
      id: 3,
      name: "Vikram Mehta",
      location: "Delhi",
      totalOrders: 3,
      totalSpent: "₹4,500",
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
          <QuickLink 
            href="/artisan/ai-product-description" 
            icon={<Sparkles />}
          >
            AI Product Description
          </QuickLink>
          <QuickLink 
            href="/artisan/ai-marketing-planner" 
            icon={<LineChart />}
          >
            AI Marketing Planner
          </QuickLink>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-dori/80">
            Order Summary
          </h2>
          <PendingOrders />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-dori/80">
            Upcoming Events
          </h2>
          <ArtisanCalendar />
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-dori/80">
          Performance Stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-dori/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-dori">{stat.value}</p>
                  </div>
                  <div className="p-2 rounded-full bg-dori/10">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-dori/80">
            Your Workshops
          </h2>
          <Card className="bg-white border-dori/10">
            <CardContent className="p-4">
              {workshops.length > 0 ? (
                <div className="space-y-4">
                  {workshops.map((workshop) => (
                    <div
                      key={workshop.id}
                      className="flex items-center justify-between border-b border-dori/10 pb-2 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="font-medium text-dori">{workshop.title}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          {workshop.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          {workshop.participants}/{workshop.maxParticipants}{" "}
                          participants
                        </p>
                        <div className="w-24 h-2 bg-dori/10 rounded-full mt-1">
                          <div
                            className="h-2 bg-dori rounded-full"
                            style={{
                              width: `${(workshop.participants / workshop.maxParticipants) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center py-4 text-muted-foreground">
                  No workshops scheduled
                </p>
              )}
            </CardContent>
            <CardFooter className="bg-dori/5 px-4 py-2">
              <Link
                href="/artisan/workshop/list"
                className="text-dori hover:underline text-sm w-full text-center"
              >
                View All Workshops
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-dori/80">
            Top Customers
          </h2>
          <Card className="bg-white border-dori/10">
            <CardContent className="p-4">
              {customers.length > 0 ? (
                <div className="space-y-4">
                  {customers.map((customer) => (
                    <div
                      key={customer.id}
                      className="flex items-center justify-between border-b border-dori/10 pb-2 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="font-medium text-dori">{customer.name}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          {customer.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-dori">
                          {customer.totalSpent}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {customer.totalOrders} orders
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center py-4 text-muted-foreground">
                  No customer data available
                </p>
              )}
            </CardContent>
            <CardFooter className="bg-dori/5 px-4 py-2">
              <Link
                href="/artisan/customers"
                className="text-dori hover:underline text-sm w-full text-center"
              >
                View All Customers
              </Link>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
