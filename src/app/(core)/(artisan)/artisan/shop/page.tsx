"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ProductForm } from "@/components/forms/ProductForm" // You'll need to create this form component

// Using the same products data structure from product/[slug]
const listedProducts = [
  {
    title: "Wood Craft",
    description: "This exquisite wooden sculpture is a testament to fine craftsmanship...",
    certificateUrl: "/certificate/1", // Dummy URL
    image: "/districtArtisanImage1.png",
    status: "approved",
  },
  {
    title: "Wood Toy",
    description: "A delightful traditional wooden toy, crafted with care...",
    certificateUrl: "/certificate/1",
    image: "/districtArtisanImage2.png",
    status: "pending",
  },
  {
    title: "Wood Tabla",
    description: "This beautifully crafted wooden tabla is designed for music enthusiasts...",
    certificateUrl: "/certificate/1",
    image: "/districtArtisanImage3.png",
    status: "approved",
  },
]

export default function ShopPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My ODOP Products</h1>
          <p className="text-gray-500">Manage your products listed under One District One Product scheme</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listedProducts.map((product, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-semibold">{product.title}</CardTitle>
                <Badge variant={product.status === "approved" ? "default" : "secondary"}>
                  {product.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm line-clamp-2">
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="default" asChild>
                <Link href={`/product/${encodeURIComponent(product.title)}`}>
                  View Details
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href={product.certificateUrl}
                  className="text-sm text-blue-600 hover:underline inline-block"
                >
                  View Certificate
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Add Product Button - Fixed at bottom right */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
            size="icon"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <ProductForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}