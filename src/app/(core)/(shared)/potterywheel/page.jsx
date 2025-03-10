"use client";
import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IndianRupee, ShoppingCart } from "lucide-react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const filterArray = ["Machine Details", "About Owner"];

const rentalMachine = {
  title: "Professional Pottery Wheel",
  description:
    "High-quality electric pottery wheel perfect for both beginners and experienced potters. Features include variable speed control, reversible wheel head, and a sturdy construction. Ideal for creating a wide range of pottery pieces, from small cups to large vases.",
  price: 200, // Daily rental price
  originalPrice: 250,
  rating: 4.8,
  ratingCount: "1.2k Ratings",
  owner: {
    name: "Amit Sharma",
    profileImage: "/ArtisanProfileImage1.png",
    about:
      "Amita Sharma is a passionate potter with over 20 years of experience. She offers a range of pottery equipment for rent, including wheels, kilns, and tools. Her goal is to make pottery accessible to everyone interested in the craft.",
    otherOwners: [
      "/ArtisanProfileImage2.png",
      "/ArtisanProfileImage3.png",
      "/ArtisanProfileImage4.png",
    ],
  },
  details: [
    { label: "Brand", value: "CraftMaster" },
    { label: "Model", value: "CM-2000" },
    { label: "Wheel Head Diameter", value: "30 cm" },
    { label: "Speed Range", value: "0-250 RPM" },
    { label: "Power", value: "350W" },
    { label: "Weight Capacity", value: "50 kg" },
  ],
  imageUrl: "/rental1.png",
};

const recommendedMachines = [
  {
    title: "Tabletop Pottery Wheel",
    price: 150,
    owner: { name: "Rajesh Kumar" },
  },
  { title: "Ceramic Kiln", price: 300, owner: { name: "Priya Gupta" } },
  {
    title: "Pottery Tools Set",
    price: 50,
    owner: { name: "Sunil Verma" },
  },
  {
    title: "Clay Mixer",
    price: 180,
    owner: { name: "Neha Patel" },
  },
  {
    title: "Pottery Glazing Kit",
    price: 100,
    owner: { name: "Amit Sharma" },
  },
];

// ... (keep the helper functions like truncateDescription, ProductCarousel, etc.)
const truncateDescription = (description, maxLength = 300) => {
  if (description.length <= maxLength) return description;
  return description.slice(0, maxLength) + "...";
};

function ProductCarousel({ images }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Carousel setApi={setApi} className="w-full lg:w-[48vw] lg:h-[50vh]">
      <CarouselContent className="space-x-4 py-4 px-5">
        {images.map((image, index) => (
          <Card
            key={index}
            className="h-[35vh] lg:h-[50vh] w-[75vw] lg:w-[47vw] shrink-0 border-none shadow-none relative"
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              fill={true}
              className="object-cover rounded-xl"
            />
          </Card>
        ))}
      </CarouselContent>
      <div className="flex w-full space-x-3 justify-center items-center py-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              current === index + 1 ? "bg-blue-900 h-4" : "bg-slate-300"
            }`}
          ></button>
        ))}
      </div>
    </Carousel>
  );
}

function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rentalDays, setRentalDays] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const increaseRentalDays = () => {
    setRentalDays((prevDays) => prevDays + 1);
  };

  const decreaseRentalDays = () => {
    setRentalDays((prevDays) => (prevDays > 1 ? prevDays - 1 : 1));
  };

  return (
    <main>
      <center className="h-fit w-full text-gray-900">
        <section className="flex flex-col lg:flex-row w-full lg:pb-16 space-y-4 lg:space-x-4 items-start lg:items-start justify-center lg:justify-start">
          <ProductCarousel images={[rentalMachine.imageUrl]} />
          <div className="flex justify-center flex-col space-y-4 w-full lg:w-1/2 px-4">
            <h2 className="scroll-m-20 text-3xl lg:text-4xl font-semibold tracking-tight text-left w-full text-[#1A2B4A]">
              {rentalMachine.title}
            </h2>
            <p className="text-sm text-gray-600 text-left h-20 overflow-hidden">
              {truncateDescription(rentalMachine.description)}
            </p>
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-2">★</span>
              <span className="font-bold">{rentalMachine.rating}</span>
              <span className="text-gray-500 ml-2">
                {rentalMachine.ratingCount}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-bold text-gray-500">
                Rented By:
              </span>
              <span className="ml-2 text-sm font-semibold">
                {rentalMachine.owner.name}
              </span>
              <Badge variant="secondary" className="ml-2">
                ✓
              </Badge>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-start items-center space-x-2">
                <span className="text-3xl font-bold">
                  ₹ {rentalMachine.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ₹ {rentalMachine.originalPrice}
                </span>
                <span className="text-sm text-gray-500">per day</span>
              </div>
              <p className="text-sm text-left text-green-600">
                Inclusive of all taxes
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span>Rental Days:</span>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseRentalDays}
                >
                  -
                </Button>
                <span className="font-semibold w-8 text-center">
                  {rentalDays}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseRentalDays}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button className="flex-1 text-white bg-[#1A2B4A] hover:bg-[#1A2B4A]/90">
                Rent Now
              </Button>
              <Button variant="outline" className="flex-1">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </section>

        {/* ... (keep the filter section) ... */}

        <section className="flex flex-col pb-20 w-full space-y-4">
          {activeIndex === 0 ? (
            <>
              <div className="flex flex-col space-y-4 py-4 text-left text-gray-500">
                <p className="font-base text-justify">
                  {rentalMachine.description}
                </p>
                <ul className="list-disc pl-5">
                  {rentalMachine.details.map((detail, index) => (
                    <li key={index}>
                      <span className="font-bold">{detail.label}</span>:{" "}
                      {detail.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col w-full space-y-4">
                <h1 className="text-start text-lg lg:text-2xl text-blue-950 lg:font-semibold font-medium tracking-tight">
                  User Reviews
                </h1>
                <Carousel opts={{ dragFree: true }}>
                  <CarouselContent className="w-full flex space-x-4 p-2 justify-start items-center">
                    {[...Array(4)].map((_, index) => (
                      <div
                        className="flex flex-col w-[80vw] lg:w-[32vw] h-fit rounded-xl bg-white p-6 border-2 space-y-4 border-gray-300 shrink-0"
                        key={index}
                      >
                        <div className="w-full h-fit flex justify-start items-center space-x-4">
                          <Avatar className="h-14 w-14">
                            <AvatarImage
                              src={rentalMachine.owner.profileImage}
                            />
                          </Avatar>
                          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 content-end">
                            {rentalMachine.owner.name}
                          </h2>
                        </div>
                        <p className="text-sm lg:text-base md:text-sm w-full text-justify text-gray-500">
                          The pottery wheel was in excellent condition and
                          worked perfectly. It&apos;s a great machine for both
                          beginners and experienced potters. Highly recommend
                          renting from Amita!
                        </p>
                      </div>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              <div className="flex flex-col w-full space-y-4 mt-8">
                <h1 className="text-start text-lg lg:text-2xl text-blue-950 lg:font-semibold font-medium tracking-tight">
                  Other Equipment You Might Like
                </h1>
                <Carousel opts={{ dragFree: true }}>
                  <CarouselContent className="w-full flex space-x-6 p-2 justify-start items-center">
                    {recommendedMachines.map((machine, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[250px] h-fit rounded-xl bg-white p-4 border border-gray-300 shrink-0"
                      >
                        <div className="w-full h-[250px] mb-2 overflow-hidden rounded-lg group cursor-pointer">
                          <Image
                            src={`/rental${((index + 1) % 4) + 1}.png`}
                            alt={machine.title}
                            width={250}
                            height={250}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h3 className="text-base text-left font-semibold">
                          {machine.title}
                        </h3>
                        <p className="text-sm text-left text-gray-500">
                          {machine.owner.name}
                        </p>
                        <p className="text-lg text-left font-bold mt-1">
                          ₹{machine.price}/day
                        </p>
                      </div>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="flex flex-col space-y-4 py-4">
                  <h3 className="scroll-m-20 text-lg lg:text-2xl text-left lg:font-semibold font-medium tracking-tight w-full text-gray-700">
                    Other Owners Renting Pottery Equipment
                  </h3>
                  <div className="flex space-x-6 justify-start items-center w-full">
                    {rentalMachine.owner.otherOwners.map((owner, index) => (
                      <Avatar className="lg:h-24 lg:w-24 w-14 h-14" key={index}>
                        <AvatarImage className="object-cover" src={owner} />
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex space-x-6 justify-between lg:justify-start items-center py-6 lg:px-6">
                <Avatar className="h-24 w-24 lg:h-44 lg:w-44">
                  <AvatarImage src={rentalMachine.owner.profileImage} />
                </Avatar>
                <div className="flex flex-col w-[75%] text-left px-2 justify-start items-start space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-left w-full text-gray-900">
                    {rentalMachine.owner.name}
                  </h3>
                  <p className="w-full text-pretty text-sm lg:text-lg text-gray-500">
                    {rentalMachine.owner.about}
                  </p>
                  <Link
                    className="py-2 px-12 bg-blue-950 text-white text-lg font-bold rounded-xl hidden lg:block"
                    href={`/owner/${rentalMachine.owner.name}`}
                  >
                    Visit Profile
                  </Link>
                </div>
              </div>
              <Link
                className="py-3 bg-blue-950 text-white text-xl font-bold align-middle rounded-2xl lg:hidden"
                href={`/owner/${rentalMachine.owner.name}`}
              >
                Visit Profile
              </Link>
            </>
          )}
        </section>
      </center>
      <footer className="lg:hidden fixed bottom-0 w-full h-fit flex justify-between left-0 items-center bg-blue-950 p-5 text-white rounded-t-3xl">
        <span className="flex text-2xl font-bold items-center w-fit">
          <IndianRupee />
          {rentalMachine.price}/day
        </span>
        <span className="flex text-2xl font-bold items-center space-x-2">
          <Button className="bg-white rounded-3xl p-2">
            <ShoppingCart color="#10274E" />
          </Button>
          <Button className="bg-white rounded-3xl px-6 text-blue-950 text-sm font-bold">
            Rent Now
          </Button>
        </span>
      </footer>
    </main>
  );
}

export default Page;
