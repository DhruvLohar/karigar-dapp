"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import Image from "next/image";
import { Share } from "lucide-react";

const brochureData = {
  logo: "/img/ODOP1.png",
  title: "ONE DISTRICT ONE PRODUCT",
  introduction: {
    text: "The One District One Product (ODOP) initiative is a pioneering scheme aimed at promoting the indigenous crafts and products unique to each district across India. Our mission is to highlight and elevate the craftsmanship of local artisans, ensuring their products reach a wider market. This initiative not only aims to preserve traditional arts but also to provide a sustainable livelihood for artisans, enhancing their socio-economic status. Join us in celebrating the rich heritage and diversity of our nation's craftsmanship.",
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
        <DialogContent>
          <div className="flex flex-col items-center">
            <Image src="/twitter-logo.png" alt="Twitter" width={50} height={50} />
            <Button onClick={handleShare} className="mt-4 bg-blue-950 text-white px-4 py-2 rounded">
              Share on Twitter
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full h-full font-sans overflow-auto">
        <div className="w-full bg-white p-4 md:p-8 overflow-hidden">

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