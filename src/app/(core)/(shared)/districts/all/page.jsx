import React from "react";
import DistrictSearch from "@/components/custom/DistrictSearch";
import { Button } from "@/components/ui/button";
import FilterSelect from "@/components/custom/Select";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ImageCollage from "@/components/custom/ImageCollage";

const districtsList = [
  { value: "district1", label: "District 1" },
  { value: "district2", label: "District 2" },
  { value: "district3", label: "District 3" },
  { value: "district4", label: "District 4" },
  { value: "district5", label: "District 5" },
];

const cityList = [
  { value: "city1", label: "City 1" },
  { value: "city2", label: "City 2" },
  { value: "city3", label: "City 3" },
  { value: "city4", label: "City 4" },
  { value: "city5", label: "City 5" },
];

const stateList = [
  { value: "state1", label: "State 1" },
  { value: "state2", label: "State 2" },
  { value: "state3", label: "State 3" },
  { value: "state4", label: "State 4" },
  { value: "state5", label: "State 5" },
];

const cardData = [
  {
    id: 1,
    title: "Jammu Kashmir",
    description:
      "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Wooden Toy Art", "Craftsmanship"],
  },
  {
    id: 2,
    title: "District 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Pottery", "Handmade"],
  },
  {
    id: 3,
    title: "District 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Textile", "Weaving"],
  },
  {
    id: 5,
    title: "Jammu Kashmir",
    description:
      "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Wooden Toy Art", "Craftsmanship"],
  },
];

export default function AllDistrictView() {
  return (
    <main>
      <center className="w-full h-fit py-5 text-gray-900">
        <section className="w-full flex justify-between space-x-4 items-center">
          <div>
            <DistrictSearch districts={districtsList} />
          </div>

          <div>
            <Sheet>
              <SheetTrigger asChild>
                <Filter color="#000000" />
              </SheetTrigger>
              <SheetContent side="bottom" className="lg:hidden">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Choose Your Preference</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col items-start justify-center space-y-6 py-4">
                  <div className="space-x-4 flex items-center w-full">
                    <label htmlFor="name">State</label>
                    <FilterSelect
                      placeholder="Select a State"
                      label="State"
                      options={stateList}
                    />
                  </div>
                  <div className="space-x-2 flex items-center justify-center w-full">
                    <label htmlFor="username">City</label>
                    <FilterSelect
                      placeholder="Select a City"
                      label="City"
                      options={cityList}
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
              <SheetContent
                side="right"
                className="hidden lg:block text-gray-900"
              >
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Choose Your Preference</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col items-start justify-center space-y-6 py-4">
                  <div className="space-x-4 flex items-center w-full">
                    <label htmlFor="name">State</label>
                    <FilterSelect
                      placeholder="Select a State"
                      label="State"
                      options={stateList}
                    />
                  </div>
                  <div className="space-x-2 flex items-center justify-center w-full">
                    <label htmlFor="username">City</label>
                    <FilterSelect
                      placeholder="Select a City"
                      label="City"
                      options={cityList}
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>
        <section className="w-full justify-between items-center flex flex-wrap space-y-2 lg:space-y-0 py-2">
          {cardData.map((card) => (
            <Card
              key={card.id}
              className="w-full md:w-[32%] md:my-4 bg-gray-100"
            >
              <CardContent>
                <ImageCollage individualCardData={card} />
                <Link href={`/districts/${card.title}`}>
                  <div className="flex flex-col items-start text-left px-3 py-2">
                    <CardTitle className="scroll-m-20 text-lg font-semibold tracking-tight">
                      <p className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                        {card.title}
                      </p>
                    </CardTitle>
                    <CardDescription className="text-justify text-sm md:text-xs font-normal text-gray-600 mb-2">
                      {card.description}
                    </CardDescription>
                  </div>
                </Link>
              </CardContent>
              <CardFooter className="px-2 space-x-2">
                {card.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="px-3 py-2 text-xs bg-gray-300 text-black"
                  >
                    {badge}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </section>
      </center>
    </main>
  );
}
