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

const products = [
  {
    id: 1,
    title: "Pottery Wheel",
    description: "High-quality pottery wheel for crafting beautiful ceramics.",
    details: [
      { label: "Brand", value: "Shimpo" },
      { label: "Model", value: "VL-Whisper" },
      { label: "Wheel Head Diameter", value: "14 inches" },
      { label: "Motor", value: "1/2 HP, 100W" },
    ],
    artisan: {
      name: "Ms. Priya Sharma",
      profileImage: "/artisanProfileImage1.png",
      about:
        "Ms. Sharma is a master potter with over 15 years of experience in creating exquisite ceramic pieces.",
      otherArtisans: [
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
        "/artisanProfileImage4.png",
      ],
    },
    price: 300,
    imageUrl: "/rental1.png",
    tags: ["Pottery", "Ceramics"],
  },
  {
    id: 2,
    title: "Wood Lathe",
    description: "Precision wood lathe for all your woodworking needs.",
    details: [
      { label: "Brand", value: "JET" },
      { label: "Model", value: "JWL-1221VS" },
      { label: "Swing Over Bed", value: "12.5 inches" },
      { label: "Motor", value: "1 HP, 115V" },
    ],
    artisan: {
      name: "Mr. Rajesh Patel",
      profileImage: "/artisanProfileImage2.png",
      about:
        "Mr. Patel is a skilled woodworker known for his intricate turned pieces and furniture designs.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage3.png",
        "/artisanProfileImage4.png",
      ],
    },
    price: 500,
    imageUrl: "/rental2.png",
    tags: ["Wood Craft", "Woodworking"],
  },
  {
    id: 3,
    title: "CNC Router",
    description:
      "Precision CNC router for woodworking, capable of intricate 3D carving and accurate cuts. Features a large work area and powerful spindle motor.",
    details: [
      { label: "Brand", value: "ShopSabre" },
      { label: "Model", value: "PRO-4896" },
      { label: "Work Area", value: '48" x 96"' },
      { label: "Spindle", value: "4 HP, 24,000 RPM" },
    ],
    artisan: {
      name: "Mr. Amit Desai",
      profileImage: "/artisanProfileImage3.png",
      about:
        "Mr. Desai is a skilled woodworker and digital fabrication expert. He combines traditional craftsmanship with modern CNC technology to create unique wooden artifacts.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage4.png",
      ],
    },
    price: 1200,
    imageUrl: "/rental3.png",
    tags: ["Woodworking", "CNC", "Digital Fabrication"],
  },
  {
    id: 4,
    title: "Glass Blowing Furnace",
    description:
      "Professional glass blowing furnace with precise temperature control. Designed for creating intricate glass art pieces and functional glassware.",
    details: [
      { label: "Brand", value: "Olympic Color Rods" },
      { label: "Model", value: '26" GT Gas Furnace' },
      { label: "Capacity", value: "200 lbs of glass" },
      { label: "Max Temperature", value: "2400°F (1315°C)" },
    ],
    artisan: {
      name: "Ms. Anjali Mehta",
      profileImage: "/artisanProfileImage4.png",
      about:
        "Ms. Mehta is a celebrated glass artist known for her vibrant and innovative glass sculptures. She has been perfecting her craft for over 15 years and conducts workshops for aspiring glass artists.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
      ],
    },
    price: 1500,
    imageUrl: "/rental4.png",
    tags: ["Glass Blowing", "Furnace", "Glass Art"],
  },
  {
    id: 5,
    title: "Leather Embossing Machine",
    description:
      "Heavy-duty leather embossing machine capable of creating intricate patterns and designs on various leather products. Features adjustable pressure and temperature settings.",
    details: [
      { label: "Brand", value: "VEVOR" },
      { label: "Model", value: "110V Embossing Machine" },
      { label: "Work Area", value: '15" x 11"' },
      { label: "Power", value: "1300W" },
    ],
    artisan: {
      name: "Mr. Sanjay Gupta",
      profileImage: "/artisanProfileImage5.png",
      about:
        "Mr. Gupta is a master leatherworker with a passion for combining traditional techniques with modern technology. His embossed leather goods are sought after for their unique designs and superior quality.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
      ],
    },
    price: 600,
    imageUrl: "/rental5.png",
    tags: ["Leather", "Embossing", "Crafts"],
  },
  {
    id: 6,
    title: "Jewelry Casting Machine",
    description:
      "Professional centrifugal casting machine for creating fine jewelry. Ideal for casting precious metals into intricate molds with high precision.",
    details: [
      { label: "Brand", value: "Kerr" },
      { label: "Model", value: "Electro-Melt" },
      { label: "Crucible Capacity", value: "4 kg" },
      { label: "Max Temperature", value: "2000°F (1093°C)" },
    ],
    artisan: {
      name: "Ms. Lakshmi Iyer",
      profileImage: "/artisanProfileImage6.png",
      about:
        "Ms. Iyer is an accomplished jeweler known for her exquisite designs and masterful metalwork. With over 20 years of experience, she specializes in creating bespoke jewelry pieces using traditional and modern casting techniques.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
      ],
    },
    price: 1000,
    imageUrl: "/rental6.png",
    tags: ["Jewelry", "Casting", "Metalwork"],
  },
];

const filterArray = ["Product Details", "About Artisan"];

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

function Page({ params }) {
  const id = parseInt(params.id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === id);
    setProduct(foundProduct);
  }, [id]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <center className="h-fit w-full text-gray-900">
        <section className="flex flex-col lg:flex-row w-full lg:pb-16 space-y-4 lg:space-x-4 items-start lg:items-start justify-center lg:justify-start">
          <ProductCarousel images={[product.imageUrl]} />
          <div className="flex justify-center flex-col space-y-4 w-full lg:w-1/2 px-4">
            <h2 className="scroll-m-20 text-3xl lg:text-4xl font-semibold tracking-tight text-left w-full text-[#1A2B4A]">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600 text-left h-20 overflow-hidden">
              {truncateDescription(product.description)}
            </p>
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-2">★</span>
              <span className="font-bold">4.5</span>
              <span className="text-gray-500 ml-2">10k Ratings</span>
            </div>
            <div className="flex items-center">
              <span className="text-base font-bold text-gray-500">
                Sold By:
              </span>
              <span className="ml-2 text-sm font-semibold">
                {product.artisan.name}
              </span>
              <Badge variant="secondary" className="ml-2">
                ✓
              </Badge>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-start items-center space-x-2">
                <span className="text-3xl font-bold">₹ {product.price}</span>
                <span className="text-xl text-gray-500 line-through">
                  ₹ {product.price * 1.2}
                </span>
              </div>
              <p className="text-sm text-left text-green-600">
                Inclusive of all the taxes
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span>NO. OF DAYS:</span>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseQuantity}
                >
                  -
                </Button>
                <span className="font-semibold w-8 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseQuantity}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button className="w-[10vw] text-white bg-[#1A2B4A] hover:bg-[#1A2B4A]/90">
                <ShoppingCart className="mr-2 h-4 w-4" /> Rent Now
              </Button>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full">
          <div className="relative w-full flex justify-start items-center space-x-5 py-4">
            {filterArray.map((filter, index) => (
              <div key={index}>
                <button
                  className="text-m h-full font-bold content-center flex flex-col items-center lg:text-2xl"
                  onClick={() => handleClick(index)}
                >
                  {filter}
                  <span
                    className={`absolute w-[7rem] lg:w-[12rem] h-[3px] bottom-0 ${
                      index === activeIndex ? "bg-blue-900" : ""
                    }`}
                  ></span>
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col pb-20 w-full space-y-4">
          {activeIndex === 0 ? (
            <>
              <div className="flex flex-col space-y-4 py-4 text-left text-gray-500">
                <p className="font-base text-justify">{product.description}</p>
                <ul className="list-disc pl-5">
                  {product.details.map((detail, index) => (
                    <li key={index}>
                      <span className="font-bold">{detail.label}</span> :{" "}
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
                            <AvatarImage src={product.artisan.profileImage} />
                          </Avatar>
                          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 content-end">
                            {product.artisan.name}
                          </h2>
                        </div>
                        <p className="text-sm lg:text-base md:text-sm  w-full text-justify text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, et dolores. Praesentium magnam eius
                          assumenda debitis possimus accusantium natus animi
                          maiores quia vero aspernatur veniam, esse unde modi
                          iure temporibus.
                        </p>
                      </div>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="flex flex-col space-y-4 py-4">
                  <h3 className="scroll-m-20 text-lg lg:text-2xl text-left lg:font-semibold font-medium tracking-tight w-full text-gray-700">
                    Other Artisans Selling The Same Product
                  </h3>
                  <div className="flex space-x-6 justify-start items-center w-full">
                    {product.artisan.otherArtisans.map((artisan, index) => (
                      <Avatar className="lg:h-24 lg:w-24 w-14 h-14" key={index}>
                        <AvatarImage className="object-cover" src={artisan} />
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full space-y-4 mt-8">
                <h1 className="text-start text-lg lg:text-2xl text-blue-950 lg:font-semibold font-medium tracking-tight">
                  Recommended Machines
                </h1>
                <Carousel opts={{ dragFree: true }}>
                  <CarouselContent className="w-full flex space-x-6 p-2 justify-start items-center">
                    {products.slice(0, 9).map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[250px] h-fit rounded-xl bg-white p-4 border border-gray-300 shrink-0"
                      >
                        <div className="w-full h-[250px] mb-2 overflow-hidden rounded-lg group">
                          <Image
                            src={`/districtArtisanImage${
                              ((index + 1) % 4) + 1
                            }.png`}
                            alt={product.title}
                            width={250}
                            height={250}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h3 className="text-base text-left font-semibold">
                          {product.title}
                        </h3>
                        <p className="text-sm text-left text-gray-500">
                          {product.artisan.name}
                        </p>
                        <p className="text-lg text-left font-bold mt-1">
                          ₹{product.price}/day
                        </p>
                      </div>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </>
          ) : (
            <>
              <div className="flex space-x-6  justify-between lg:justify-start items-center py-6 lg:px-6">
                <Avatar className="h-24 w-24 lg:h-44 lg:w-44">
                  <AvatarImage src={product.artisan.profileImage} />
                </Avatar>
                <div className="flex flex-col w-[75%] text-left px-2 justify-start items-start space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-left w-full text-gray-900">
                    {product.artisan.name}
                  </h3>
                  <p className="w-full text-pretty text-sm lg:text-lg text-gray-500">
                    {product.artisan.about}
                  </p>
                  <Link
                    className=" py-2 px-12 bg-blue-950 text-white text-lg font-bold rounded-xl hidden lg:block"
                    href={`/artisan/${product.artisan.name}`}
                  >
                    Visit Profile
                  </Link>
                </div>
              </div>
              <Link
                className=" py-3 bg-blue-950 text-white text-xl font-bold align-middle rounded-2xl lg:hidden"
                href={`/artisan/${product.artisan.name}`}
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
          {product.price}
        </span>
        <span className="flex text-2xl font-bold items-center space-x-2">
          <Button className="bg-white rounded-3xl p-2">
            <ShoppingCart color="#10274E" />
          </Button>
          <Button className="bg-white rounded-3xl px-6 text-blue-950 text-sm font-bold">
            <ShoppingCart className="mr-2 h-4 w-4" /> Rent Now
          </Button>
        </span>
      </footer>
    </main>
  );
}

export default Page;
