"use client";
import React, { useState } from "react";
import MachineCard from "@/components/custom/RentalMachineCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const products = [
  {
    id: 1,
    name: "Pottery Wheel",
    location: "Ratnagiri, Maharashtra",
    price: 300,
    imageUrl: "/rental1.png",
    description: "High-quality pottery wheel for crafting beautiful ceramics.",
    tags: ["Pottery", "Ratnagiri", "Maharashtra"],
  },
  {
    id: 2,
    name: "Wood Lathe",
    location: "Pune, Maharashtra",
    price: 500,
    imageUrl: "/rental2.png",
    description: "Precision wood lathe for all your woodworking needs.",
    tags: ["Wood Craft", "Pune", "Maharashtra"],
  },
  {
    id: 3,
    name: "Clay Mixer",
    location: "Shimla, Himachal Pradesh",
    price: 200,
    imageUrl: "/rental3.png",
    description: "Efficient clay mixer for pottery and sculpting.",
    tags: ["Clay", "Shimla", "Himachal Pradesh"],
  },
  {
    id: 4,
    name: "3D Printer",
    location: "Nashik, Maharashtra",
    price: 800,
    imageUrl: "/rental4.png",
    description: "Advanced 3D printer for creating intricate designs.",
    tags: ["3D Printing", "Nashik", "Maharashtra"],
  },
  {
    id: 5,
    name: "Laser Cutter",
    location: "Nagpur, Maharashtra",
    price: 1000,
    imageUrl: "/rental5.png",
    description: "High-precision laser cutter for detailed work.",
    tags: ["Laser Cutting", "Nagpur", "Maharashtra"],
  },
  {
    id: 6,
    name: "CNC Machine",
    location: "Goa",
    price: 1500,
    imageUrl: "/rental6.png",
    description: "Versatile CNC machine for various manufacturing tasks.",
    tags: ["CNC", "Goa"],
  },
];

const categories = ["All", "Pottery", "Clay", "Wood Craft"];

export default function AllRentalMachinesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleProductClick = () => {
    router.push(`/potterywheel`);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.tags.includes(selectedCategory);
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-[#1A2B4A] font-bold mb-4">
          Rental Machines
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover a wide range of rental machines for your crafting needs. From
          pottery wheels to woodworking tools, we&apos;ve got you covered.
        </p>
        <h2 className="text-2xl text-[#1A2B4A] font-semibold mb-6">
          What are you looking for?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full px-6 py-2"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search machines..."
              className="pl-10 pr-4 py-2 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link key={product.id} href="/potterywheel" className="h-full">
          <div
            key={product.id}
            className="h-full cursor-pointer transition-transform hover:scale-105"
          >
            <MachineCard product={product} onClick={handleProductClick} />
          </div>
            </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 mt-12">
          No machines found. Try adjusting your search or category.
        </div>
      )}
    </div>
  );
}
