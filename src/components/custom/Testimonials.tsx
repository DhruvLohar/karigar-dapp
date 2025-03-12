"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aadish Gotekar",
    location: "New York, USA",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/pfp6.jpg",
  },
  {
    name: "Priya Sharma",
    location: "London, UK",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/pfp3.jpg",
  },
  {
    name: "Raj Patel",
    location: "Toronto, Canada",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image: "/pfp2.jpg",
  },
  {
    name: "Anita Desai",
    location: "Sydney, Australia",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    image: "/pfp4.jpg",
  },
  {
    name: "Vikram Mehta",
    location: "Singapore",
    content:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
    image: "/pfp5.jpg",
  },
];

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-[70vh] mb-20">
      <div className="bg-blue-950/10 md:w-1/2 flex items-center justify-center p-10 rounded-r-[100px]">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-950">
            Tales of Tradition and Belonging
          </h2>
          <p className="text-xl text-blue-950">
            Testimonials from the Indian Karigar
          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center p-10">
        <div className="relative w-full max-w-md">
          <div className="flex justify-center mb-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${index === currentTestimonial
                  ? "bg-dori scale-125"
                  : "bg-gray-300"
                  }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          <div className="transition-opacity duration-300 ease-in-out">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-900 relative">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={`Profile picture of ${testimonials[currentTestimonial].name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-gray-600 mb-4">
                {testimonials[currentTestimonial].location}
              </p>
              <p className="text-gray-800">
                {testimonials[currentTestimonial].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
