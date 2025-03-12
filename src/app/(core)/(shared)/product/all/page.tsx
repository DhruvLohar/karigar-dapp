"use client";
import React from "react";
import Image from "next/image";
import ProductCard from "@/components/custom/ProductCard";

import { useRouter } from "next/navigation";

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

const ProductPage = () => {
  const router = useRouter();

  const handleProductClick = (productName: string) => {
    router.push(`/product/${decodeURIComponent(productName)}`);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4">
        <h2 className="text-lg font-semibold mb-4">SORT BY:</h2>
        <select className="w-full mb-6 p-2 border rounded bg-white">
          <option>Alphabetically, A-Z</option>
          {/* Add more sorting options */}
        </select>

        <h2 className="text-lg font-semibold mb-4">FILTER BY:</h2>
        {[
          "ARTIST",
          "BRAND",
          "CATEGORY",
          "COLOUR",
          "CRAFT",
          "DESIGN DISCIPLINE",
          "GIFTING",
          "MATERIALS",
          "PRODUCT CATEGORY",
        ].map((filter) => (
          <div key={filter} className="mb-4">
            <h3 className="text-md font-medium">{filter}</h3>
            <div className="border-t mt-1"></div>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-6">Explore all Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
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
              <p className="text-md font-medium">
                Rs. {product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
