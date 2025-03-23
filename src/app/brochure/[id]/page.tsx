"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import Image from "next/image";
import { Share } from "lucide-react";

const brochureData = {
  title: "Hand-carved Olive Wood Bowl",
  artisanInfo: {
    name: "Mukesh Chauhan",
    location: "Indore, India",
    biography: "Mukesh Chauhan is a master woodworker from Indore, India, who has been perfecting his craft for over 15 years. Drawing inspiration from traditional Indian woodworking techniques while embracing sustainable practices, Mukesh creates pieces that combine functionality with artistic beauty. Each of his creations celebrates the natural beauty of wood and the rich cultural heritage of Indian craftsmanship."
  },
  productDetails: {
    name: "Hand-carved Olive Wood Bowl",
    description: "Beautifully crafted bowl made from sustainable olive wood",
    materials: ["Olive wood"],
    price: 65,
    dimensions: "8 inches x 3 inches"
  },
  marketingCopy: {
    headline: "Experience the Timeless Beauty of Nature's Canvas",
    tagline: "Where Sustainability Meets Artistry",
    description: "Each Hand-carved Olive Wood Bowl tells a unique story through its distinctive grain patterns, warm honey tones, and smooth, polished finish. Meticulously crafted by artisan Mukesh Chauhan, these bowls transform your dining experience while connecting you to centuries of woodworking tradition. The natural oils in olive wood make these bowls not just beautiful, but practical and long-lasting additions to your home.",
    uniqueSellingPoints: [
      "Made from sustainable olive wood harvested only from non-productive trees",
      "Each piece features unique grain patterns, making your bowl one-of-a-kind",
      "Naturally antibacterial properties make it perfect for serving food",
      "Hand-rubbed with food-safe oils for a silky smooth finish",
      "Supports traditional Indian craftsmanship and sustainable practices"
    ]
  },
  categories: [
    "Kitchen & Dining",
    "Home Decor",
    "Sustainable Products",
    "Handcrafted Goods",
    "Artisanal Woodwork"
  ],
  trendAlignment: {
    sustainability: "Responds directly to the growing demand for #sustainablecrafts and eco-friendly home goods by using only sustainable olive wood from non-productive trees, minimizing environmental impact while creating lasting pieces.",
    giftMarket: "Perfectly positioned as an ideal gift option as highlighted in trending conversations about artisanal kitchen items being perfect seasonal gifts, offering both functionality and artistic value.",
    authenticity: "Celebrates the authentic beauty of wooden kitchenware that consumers are increasingly appreciating, with each bowl's unique grain pattern telling its own story, aligning with the #authenticcraft movement.",
    localSupport: "Provides consumers an opportunity to #supportlocal artisans and traditional craftsmanship, connecting global buyers with authentic Indian woodworking traditions."
  },
  logo: "/img/ODOP1.png",
  introduction: {
    text: "Each Hand-carved Olive Wood Bowl tells a unique story through its distinctive grain patterns, warm honey tones, and smooth, polished finish. Meticulously crafted by artisan Mukesh Chauhan, these bowls transform your dining experience while connecting you to centuries of woodworking tradition. The natural oils in olive wood make these bowls not just beautiful, but practical and long-lasting additions to your home.",
    image: "/img/ODOP2.png",
  },
  storeInfo: {
    phone: "9898989898",
    address: "12, Near this near that, Bihar - 400000",
    storefront: "/img/Rectangle3.png",
    map: "/img/Rectangle2.png",
  },
  productCategories: [
    {
      name: "Belts",
      description: "Our belts are a testament to the fine craftsmanship passed down through generations. Made from high-quality leather and adorned with intricate designs, each belt is a unique piece of art. Our artisans take great pride in their work, ensuring that every belt is not only stylish but also durable. These belts are perfect for adding a touch of elegance to any outfit, whether formal or casual.",
      image: "/img/Rectangle4.png",
    },
    {
      name: "Watch Belts",
      description: "Our watch belts are designed to complement your timepieces perfectly. Crafted from premium materials, these watch belts are both functional and fashionable. With a variety of styles and finishes, they cater to different tastes and preferences. Each watch belt is meticulously crafted to ensure a comfortable fit and a sophisticated look, making them an essential accessory for any watch enthusiast.",
      image: "/img/Rectangle5.png",
    },
  ],
  carousel: {
    img1: "/img/Rectangle10.png",
    img2: "/img/Rectangle11.png",
    img3: "/img/Rectangle11.png",
    img4: "/img/Rectangle10.png",
  },
  materialsAndCraftsmen: {
    text: "Our products are crafted using the finest materials, sourced locally to support our community and ensure the highest quality. The artisans we work with are masters of their trade, bringing years of experience and passion to their work. Each item is made with meticulous attention to detail, blending traditional techniques with modern designs. Our commitment to excellence ensures that every product is not only beautiful but also built to last, reflecting the rich cultural heritage of our artisans.",
    image: "/img/Rectangle9.png",
  },
};

const ODOPBrochure = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleShare = () => {
    toast.success("Brochure sent successfully!");
    setIsDialogOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Section Title</h2>
          <p className="text-gray-700">Details about this section of the brochure.</p>
        </div>
      </div> */}

      <div className="fixed bottom-4 right-4">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-blue-950 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <Share className="w-8 h-8" />
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold mb-4">Share with your network</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 gap-4 p-4">
            {/* Twitter sharing option */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
                <span className="ml-3 font-medium">Twitter</span>
              </div>
              <Button
                onClick={() => handleShare()}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Share
              </Button>
            </div>

            {/* WhatsApp sharing option */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <span className="ml-3 font-medium">WhatsApp</span>
              </div>
              <Button
                onClick={() => handleShare()}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                Share
              </Button>
            </div>

            {/* Reddit sharing option */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="9" r="1"></circle>
                    <path d="M8.21 13.89L7 23 12 20l5 3-1.21-9.12"></path>
                  </svg>
                </div>
                <span className="ml-3 font-medium">Reddit</span>
              </div>
              <Button
                onClick={() => handleShare()}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Share
              </Button>
            </div>

            {/* Copy Link option */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-500 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <span className="ml-3 font-medium">Copy Link</span>
              </div>
              <Button
                onClick={() => handleShare()}
                className="bg-gray-500 hover:bg-gray-600 text-white"
              >
                Copy
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full h-full font-sans overflow-auto">
        <div className="w-full bg-white p-4 md:p-8 overflow-hidden">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0a2c5c] mb-4">
              {brochureData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {brochureData.marketingCopy.tagline}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2c5c] mb-4">
              Meet the Artisan
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">{brochureData.artisanInfo.name}</h3>
              <p className="text-gray-600 mb-2">{brochureData.artisanInfo.location}</p>
              <p className="text-lg">{brochureData.artisanInfo.biography}</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2c5c] mb-4">
              Product Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl mb-4">{brochureData.productDetails.description}</p>
                <ul className="space-y-2">
                  <li><strong>Price:</strong> ₹{brochureData.productDetails.price}</li>
                  <li><strong>Dimensions:</strong> {brochureData.productDetails.dimensions}</li>
                  <li><strong>Materials:</strong> {brochureData.productDetails.materials.join(', ')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2c5c] mb-4">
              Unique Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {brochureData.marketingCopy.uniqueSellingPoints.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-[#0a2c5c]">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2c5c] mb-4">
              Market Trends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(brochureData.trendAlignment).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2c5c] mb-4">
              Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {brochureData.categories.map((category, index) => (
                <span key={index} className="bg-[#0a2c5c] text-white px-4 py-2 rounded-full">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center mb-4  pb-2">
            <img
              src={brochureData.logo}
              alt="ODOP Logo"
              className="h-8 md:h-20"
            />
          </div>
          <div className="h-[1px] w-full bg-black"></div>

          <div className="text-start">
            <h2 className="text-3xl md:text-5xl  font-bold text-[#0a2c5c] mt-2">
              Introduction
            </h2>
            <div className="flex flex-row gap-4 mb-4 items-center">
              <div className="w-full text-black md:w-2/3 flex  p-4">
                <p className="text-basic md:text-xl text-left">
                  {brochureData.introduction.text}
                </p>
              </div>

              <div className="w-full md:w-1/3 aspect-w-1 aspect-h-1 flex items-center">
                <img
                  src={brochureData.introduction.image}
                  alt="Belt"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="flex  gap-4 mb-4 ">
            <div className="relative h-[45vh] md:h-[60vh] w-1/2 aspect-w-1 aspect-h-1">
              <img
                src={brochureData.storeInfo.storefront}
                alt="Store Front"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col w-1/2  ">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0a2c5c] mb-2">
                Store Info
              </h2>
              <div className="h-[1px] w-[95%] bg-black mb-4"></div>
              <p className="text-basic text-black md:text-xl mb-2">
                Ph No.: {brochureData.storeInfo.phone}
              </p>
              <p className="text-basic text-black md:text-xl mb-4">
                Address: {brochureData.storeInfo.address}
              </p>
              <img
                src={brochureData.storeInfo.map}
                alt="Map"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="h-[1px] w-full my-10 bg-black"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0a2c5c] mb-8 mt-3 text-center">
            Product Categories
          </h2>
          <div className="flex flex-col gap-8 mb-8">
            {brochureData.productCategories.map((product, index) => (
              <div key={index} className="flex items-center justify-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex w-full justify-center items-center aspect-w-1 aspect-h-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-contain  rounded-lg "
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="font-bold text-xl  md:text-3xl text-[#0a2c5c] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-left text-basic md:text-xl text-gray-700">
                        {product.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full">
                      <h3 className="font-bold text-xl md:text-3xl text-[#0a2c5c] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-left text-basic md:text-xl text-gray-700">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex w-full justify-center items-center aspect-w-1 aspect-h-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover  rounded-lg "
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="relative grid grid-cols-2 ">
            <div className="absolute text-black inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white rounded-full h-24 w-24 p-2">
              pure Khadi
            </div>

            <img
              src={brochureData.carousel.img1}
              alt="Photo 1"
              className="w-full h-auto"
            />
            <img
              src={brochureData.carousel.img2}
              alt="Photo 2"
              className="w-full h-auto"
            />
            <img
              src={brochureData.carousel.img3}
              alt="Photo 3"
              className="w-full h-auto"
            />
            <img
              src={brochureData.carousel.img4}
              alt="Photo 4"
              className="w-full h-auto"
            />
          </div>
          <div className="h-[1px] w-full bg-black my-10 mt-5"></div>

          <h2 className="text-3xl md:text-5xl text-center font-bold text-[#0a2c5c] mb-4 mt-4">
            Materials and Craftsmen
          </h2>
          <div className="flex flex-col  gap-4">
            <div className="w-full">
              <img
                src={brochureData.materialsAndCraftsmen.image}
                alt="Craftsman"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="w-full text-black text-base md:text-xl">
              {brochureData.materialsAndCraftsmen.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ODOPBrochure;