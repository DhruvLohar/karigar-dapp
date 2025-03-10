import React from "react";
import { IndianRupee } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MachineCard = ({ product }) => {
  return (
    // <Link href={`/artisan/rentalMachines/${product.id}`} className="block">
    <Link href={`/potterywheel`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="relative w-full h-48">
          <Image
            src={product.imageUrl}
            alt={product.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          {product.artisan && (
            <p className="text-sm text-gray-600 mb-2">{product.artisan.name}</p>
          )}
          <p className="text-sm text-gray-800 mb-4">
            {product.description.substring(0, 100)}...
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">₹{product.price}/day</span>
            <span className="text-sm text-blue-600">View Details</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MachineCard;
