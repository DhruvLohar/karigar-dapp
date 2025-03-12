import React from "react";
import { IndianRupee } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Product {
  name: string;
  imageUrl: string;
  location: string;
  price: number;
}

function MachineCard({ product }: { product: Product }) {
  return (
    <Card className="w-[42vw] md:w-[23vw] mr-3 lg:mr-[6px] border-none shadow-none flex-shrink-0">
      <Link href={`/artisan/rentalMachines/${product.name}`}>
        <CardHeader className="h-[30vh] md:h-[65vh] w-full relative overflow-hidden">
          <Image
            src={product.imageUrl}
            fill={true}
            className="object-cover rounded-sm transition-transform duration-500 hover:scale-110"
            alt={product.name}
          />
        </CardHeader>

        <CardContent className="flex flex-col items-start text-left w-full p-1">
          <h4 className="scroll-m-20 text-sm md:text-lg font-normal tracking-tight">
            {product.name}
          </h4>
          <p className="scroll-m-20 text-[0.6rem] md:text-sm font-extralight tracking-tight text-black">
            {product.location}
          </p>
          <span className="w-full flex items-center">
            <IndianRupee size={16} strokeWidth={2} />
            <h2 className="scroll-m-20 text-base md:text-xl font-medium lg:font-semibold tracking-tight text-left w-full">
              {product.price}
            </h2>
          </span>
        </CardContent>
      </Link>
    </Card>
  );
}

export default MachineCard;
