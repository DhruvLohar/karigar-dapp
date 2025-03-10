"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { CarouselPlugin } from "@/components/custom/AutoPlayCarousel";
import { Elsie_Swash_Caps } from "next/font/google";
import { MapPin } from "lucide-react";

const elsieSwashCaps = Elsie_Swash_Caps({
  subsets: ["latin"],
  weight: ["400"],
});

const products = [
  {
    id: 1,
    name: "Wood Craft",
    location: "Ratnagiri, Maharashtra",
    price: 200,
    imageUrl: "/wallHanging.jpg",
  },
  {
    id: 2,
    name: "Wood Toy",
    location: "Pune, Maharashtra",
    price: 50,
    imageUrl: "/ramji.png",
  },
  {
    id: 3,
    name: "Wood Tabla",
    location: "Shimla, Himachal Pradesh",
    price: 150,
    imageUrl: "/sweets.jpg",
  },
  {
    id: 4,
    name: "Grapes",
    location: "Nashik, Maharashtra",
    price: 120,
    imageUrl: "/silk-saree.jpg",
  },
  {
    id: 5,
    name: "Orange",
    location: "Nagpur, Maharashtra",
    price: 80,
    imageUrl: "/pashmina-shawl.jpg",
  },
  {
    id: 6,
    name: "Pineapple",
    location: "Goa",
    price: 60,
    imageUrl: "/rasgulla.jpeg",
  },
];

export default function ShopPage() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState("alphabetical");

  const handleProductClick = (productName) => {
    router.push(`/product/${encodeURIComponent(productName)}`);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
    if (sortBy === "priceLowToHigh") return a.price - b.price;
    if (sortBy === "priceHighToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex flex-col w-full lg:px-5 text-left lg:py-4 mb-8">
        <h2 className="text-lg lg:text-2xl text-blue-950 lg:font-semibold font-medium tracking-tight">
          Good Afternoon, John Doe
        </h2>
        <span className="w-fit space-x-1 flex items-center">
          <MapPin color="#9ca3af" size={16} />
          <h3 className="scroll-m-20 text-sm font-normal tracking-tight text-gray-400">
            Ratnagiri, Maharashtra
          </h3>
        </span>
        <div className="relative mt-4">
          <CarouselPlugin />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className={`text-white text-2xl md:text-5xl font-bold text-center px-4 py-2 rounded ${elsieSwashCaps.className}`}
            >
              Explore our Navratri Specials <br /> for this Festive Season
            </h2>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4">
          <h2 className="text-lg font-semibold mb-4">SORT BY:</h2>
          <select 
            className="w-full mb-6 p-2 border rounded bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="alphabetical">Alphabetically, A-Z</option>
            <option value="priceLowToHigh">Price, Low to High</option>
            <option value="priceHighToLow">Price, High to Low</option>
          </select>

          <h2 className="text-lg font-semibold mb-4">FILTER BY:</h2>
          {['ARTIST', 'BRAND', 'CATEGORY', 'COLOUR', 'CRAFT', 'DESIGN DISCIPLINE', 'GIFTING', 'MATERIALS', 'PRODUCT CATEGORY'].map((filter) => (
            <div key={filter} className="mb-4">
              <h3 className="text-md font-medium">{filter}</h3>
              <div className="border-t mt-1"></div>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4 p-4">
          <h1 className="text-3xl font-bold mb-6">Explore all Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div 
                key={product.id} 
                className="relative group cursor-pointer"
                onClick={() => handleProductClick(product.name)}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <button className="bg-white text-black py-2 px-4 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    QUICKSHOP
                  </button>
                  <button className="bg-black text-white py-2 px-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    ADD TO CART
                  </button>
                </div>
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.location}</p>
                <p className="text-md font-medium">Rs. {product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
