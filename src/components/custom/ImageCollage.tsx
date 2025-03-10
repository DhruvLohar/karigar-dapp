"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent } from "../ui/carousel";
import Modal from "./Modal";
import { usePathname } from "next/navigation";

interface IndividualCardData {
  title: string;
  images: string[];
}

interface ImageCollageProps {
  individualCardData: IndividualCardData;
}

const ImageCollage: React.FC<ImageCollageProps> = ({ individualCardData }) => {
  const [clickedImg, setClickedImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleClick = (image: string, index: number) => {
    setCurrentIndex(index);
    setClickedImg(image);
  };

  const handleRotationRight = () => {
    if (currentIndex === null) return;
    const totalLength = individualCardData.images.length;
    const newIndex = (currentIndex + 1) % totalLength;
    setClickedImg(individualCardData.images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    if (currentIndex === null) return;
    const totalLength = individualCardData.images.length;
    const newIndex = (currentIndex - 1 + totalLength) % totalLength;
    setClickedImg(individualCardData.images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const pathName = usePathname();

  return (
    <>
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent className="w-full flex space-x-2 px-2">
          {individualCardData.images.map((image, index) => (
            <React.Fragment key={index}>
              {index % 4 === 0 && (
                <div
                  className={`h-[25vh] w-[40vw] ${["/districts/all", "/workshop/all", "/events/all", "/artisan/jobPortal/all"].includes(pathName)
                    ? " md:h-[40vh] md:w-[25vw] "
                    : " md:h-[55vh] "
                    } relative flex-shrink-0 cursor-pointer`}
                  onClick={() => handleClick(image, index)}
                >
                  <Image
                    src={image}
                    fill
                    className="object-cover rounded-md"
                    alt={`${individualCardData.title} image ${index + 1}`}
                  />
                </div>
              )}
              {index % 4 === 1 && (
                <div
                  className={`flex flex-col h-[24vh] ${["/districts/all", "/workshop/all", "/events/all", "/artisan/jobPortal/all"].includes(pathName)
                    ? " md:h-[39vh]"
                    : "md:h-[54vh]"
                    } space-y-2`}
                >
                  {[0, 1].map((offset) => {
                    const imgIndex = (index + offset) % individualCardData.images.length;
                    return (
                      <div
                        key={imgIndex}
                        className={`h-1/2 ${["/districts/all", "/workshop/all", "/events/all", "/artisan/jobPortal/all"].includes(pathName)
                          ? "w-[40vw] md:w-[25vw]"
                          : "w-[35vw]"
                          } relative flex-shrink-0 cursor-pointer`}
                        onClick={() => handleClick(individualCardData.images[imgIndex], imgIndex)}
                      >
                        <Image
                          src={individualCardData.images[imgIndex]}
                          fill
                          className="object-cover rounded-md"
                          alt={`${individualCardData.title} image ${imgIndex + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
              {index % 4 === 3 && (
                <div
                  className={`h-[25vh] w-[40vw] ${["/districts/all", "/workshop/all", "/events/all", "/artisan/jobPortal/all"].includes(pathName)
                    ? " md:h-[40vh] md:w-[25vw] "
                    : " md:h-[55vh] "
                    } relative flex-shrink-0 cursor-pointer`}
                  onClick={() => handleClick(image, index)}
                >
                  <Image
                    src={image}
                    fill
                    className="object-cover rounded-md"
                    alt={`${individualCardData.title} image ${index + 1}`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </CarouselContent>
      </Carousel>

      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          setClickedImg={setClickedImg}
          handelRotationRight={handleRotationRight}
          handelRotationLeft={handleRotationLeft}
        />
      )}
    </>
  );
};

export default ImageCollage;
