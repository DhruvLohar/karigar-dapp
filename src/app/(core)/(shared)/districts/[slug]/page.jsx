import ImageCollage from "@/components/custom/ImageCollage";
import ProductCard from "@/components/custom/ProductCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    title: "Jammu Kashmir",
    description:
      "Discover the exquisite craftsmanship of artisans in rural Jammu Kashmir, where traditional techniques are passed down through generations. These skilled artisans transform local materials into unique, handmade products, celebrating the region's rich cultural heritage.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Wooden Toy Art", "Craftsmanship"],
    artisanImages: [
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
      "/artisanProfileImage3.png",
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
    ],
    nearbyProducts: [
      {
        id: 1,
        name: "Wood Craft",
        location: "Ratnagiri, Maharashtra",
        price: 200,
        imageUrl: "/districtArtisanImage1.png",
      },
      {
        id: 2,
        name: "Wood Toy",
        location: "Pune, Maharashtra",
        price: 50,
        imageUrl: "/districtArtisanImage2.png",
      },
      {
        id: 3,
        name: "Wood Tabla",
        location: "Shimla, Himachal Pradesh",
        price: 150,
        imageUrl: "/districtArtisanImage3.png",
      },
      {
        id: 4,
        name: "Grapes",
        location: "Nashik, Maharashtra",
        price: 120,
        imageUrl: "/districtArtisanImage4.png",
      },
      {
        id: 5,
        name: "Orange",
        location: "Nagpur, Maharashtra",
        price: 80,
        imageUrl: "/districtArtisanImage1.png",
      },
      {
        id: 6,
        name: "Pineapple",
        location: "Goa",
        price: 60,
        imageUrl: "/districtArtisanImage2.png",
      },
    ],
  },
  {
    id: 2,
    title: "District 2",
    description:
      "Experience the artistry of rural India in District 2, where dedicated artisans create stunning pottery and handmade items. Their deep-rooted skills and passion for their craft bring to life the rich cultural legacy of their community.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Pottery", "Handmade"],
    artisanImages: [
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
      "/artisanProfileImage3.png",
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
    ],
    nearbyProducts: [
      {
        id: 1,
        name: "Wood Craft",
        location: "Ratnagiri, Maharashtra",
        price: 200,
        imageUrl: "/districtArtisanImage1.png",
      },
      {
        id: 2,
        name: "Wood Toy",
        location: "Pune, Maharashtra",
        price: 50,
        imageUrl: "/districtArtisanImage2.png",
      },
      {
        id: 3,
        name: "Wood Tabla",
        location: "Shimla, Himachal Pradesh",
        price: 150,
        imageUrl: "/districtArtisanImage3.png",
      },
      {
        id: 4,
        name: "Grapes",
        location: "Nashik, Maharashtra",
        price: 120,
        imageUrl: "/districtArtisanImage4.png",
      },
      {
        id: 5,
        name: "Orange",
        location: "Nagpur, Maharashtra",
        price: 80,
        imageUrl: "/districtArtisanImage1.png",
      },
      {
        id: 6,
        name: "Pineapple",
        location: "Goa",
        price: 60,
        imageUrl: "/districtArtisanImage2.png",
      },
    ],
  },
  {
    id: 3,
    title: "District 3",
    description:
      "Explore the rich textile heritage of District 3, where skilled weavers create beautiful fabrics using traditional methods. These artisans preserve age-old techniques, producing exquisite textiles that reflect the cultural vibrancy of their district.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Textile", "Weaving"],
    artisanImages: [
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
      "/artisanProfileImage3.png",
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
    ],
    nearbyProducts: [
      {
        id: 1,
        name: "Wood Craft",
        location: "Ratnagiri, Maharashtra",
        price: 200,
        imageUrl: "/districtArtisanImage1.png",
      },
      {
        id: 2,
        name: "Wood Toy",
        location: "Pune, Maharashtra",
        price: 50,
        imageUrl: "/districtArtisanImage2.png",
      },
      {
        id: 3,
        name: "Wood Tabla",
        location: "Shimla, Himachal Pradesh",
        price: 150,
        imageUrl: "/districtArtisanImage3.png",
      },
      {
        id: 4,
        name: "Grapes",
        location: "Nashik, Maharashtra",
        price: 120,
        imageUrl: "/districtArtisanImage4.png",
      },
      {
        id: 5,
        name: "Orange",
        location: "Nagpur, Maharashtra",
        price: 80,
        imageUrl: "/districtArtisanImage1.png",
      },
      {
        id: 6,
        name: "Pineapple",
        location: "Goa",
        price: 60,
        imageUrl: "/districtArtisanImage2.png",
      },
    ],
  },
];

export default function DistrictView({ params }) {
  const individualCardData = cardData.find(
    (card) => card.title === decodeURIComponent(params.slug)
  );

  return (
    <main>
      <center className="w-full h-fit space-y-2 lg:space-y-4 text-gray-900">
        <section className="w-full flex flex-col pb-5 space-y-4">
          <h2 className="scroll-m-20 text-center text-3xl lg:text-5xl font-semibold lg:font-extrabold tracking-tight w-full">
            {individualCardData.title}
          </h2>
          <p className="text-center font-normal text-sm text-gray-600 md:text-lg ">
            {individualCardData.description}
          </p>
          <ImageCollage individualCardData={individualCardData} />
        </section>
        <section className="flex w-full justify-center items-center flex-col space-y-4">
          <h3 className="scroll-m-20 text-2xl font-medium tracking-tight w-full lg:text-4xl">
            Artisans
          </h3>
          <div className="flex space-x-3 md:space-x-9 justify-center items-center w-full md:justify-center">
            {individualCardData.artisanImages
              .slice(0, 5)
              .map((artisan, index) => (
                <Avatar className="h-14 w-14 md:h-24 md:w-24" key={index}>
                  <AvatarImage className="object-cover" src={artisan} />
                </Avatar>
              ))}
          </div>
        </section>
        <section className="w-full flex flex-col py-4 space-y-4">
          <h3 className="scroll-m-20 text-2xl font-medium tracking-tight text-center w-full lg:text-4xl">
            Products
          </h3>
          <Carousel opts={{ dragFree: true }}>
            <CarouselContent className="w-full flex space-x-4 p-2">
              {individualCardData.nearbyProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </center>
    </main>
  );
}
