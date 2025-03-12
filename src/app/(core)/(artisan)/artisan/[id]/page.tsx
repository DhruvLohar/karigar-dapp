import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import ImageCollage from "@/components/custom/ImageCollage";
import {
  MapPin,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  location: string;
  price: number;
  imageUrl: string;
}

interface FeedBack {
  label: string;
  value: number;
}

interface ArtisanData {
  title: string;
  profileImage: string;
  heroImage: string;
  about: string;
  images: string[];
  feedBacks: FeedBack[];
  products: Product[];
}

const artisanInfo: ArtisanData[] = [
  {
    title: "Mr. John Doe",
    profileImage: "/artisanProfileImage1.png",
    heroImage: "/artisanProfileImage1.png",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, tenetur reprehenderit provident impedit optio delectus voluptates",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    feedBacks: [
      { label: "Products Sold", value: 10 },
      { label: "Happy Customers", value: 100 },
      { label: "Happy Customers", value: 100 },
    ],
    products: [
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
    title: "Ms. Jane Doe",
    profileImage: "/artisanProfileImage2.png",
    heroImage: "/artisanProfileImage2.png",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, tenetur reprehenderit provident impedit optio delectus voluptates",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    feedBacks: [
      { label: "Products Sold", value: 20 },
      { label: "Happy Customers", value: 200 },
      { label: "Happy Customers", value: 200 },
    ],
    products: [
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
        name: "Kaju",
        location: "Goa",
        price: 60,
        imageUrl: "/districtArtisanImage2.png",
      },
    ],
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

interface ProductCollageProps {
  products: Product[];
}

export default function ArtisanProfile({ params }: PageProps) {
  const title = decodeURIComponent(params.id);
  const description = artisanInfo.find((artisan) => artisan.title === title);

  const mukeshChauhanData = {
    title: "Mukesh Chauhan",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative h-48 rounded-lg bg-gray-200 md:h-64">
            <Image
              alt="Profile banner"
              className="object-cover rounded-lg"
              src="/mountain-lake-header.png"
              fill
              priority
            />
          </div>
          <div className="relative -mt-16 flex justify-center">
            <Avatar className="h-32 w-32 border-4 border-white">
              <AvatarImage alt="profile pic" src="/artisanProfileImage1.png" />
            </Avatar>
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Mukesh Chauhan
          </h1>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Potenti mi facilisis at alid
            quam venenatis scds scelerisque ut. Tempus nunc venena sasstis
            feugiat et risus tristique at. Turpis ut.
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Mumbai, India</span>
            <span className="mx-2">•</span>
            <span>Joined 10 Sept 2024</span>
            <span className="mx-2">•</span>
            <span>Global</span>
          </div>
          <div className="flex justify-center items-center space-x-8 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">10+</p>
              <p className="text-sm text-gray-600">Products sold</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">100+</p>
              <p className="text-sm text-gray-600">Happy customer</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-[#1a2b6d] hover:bg-[#152355] text-white">
              Get in touch
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Link href="/brochure/1">
                View Brochure
              </Link>
            </Button>
          </div>
        </div>
        <Tabs defaultValue="profile" className="mb-8">
          <TabsList className="flex justify-center gap-8 bg-white p-1 border-b border-gray-300">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-gray-900 px-4 py-2"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-gray-900 px-4 py-2"
            >
              Product Gallery
            </TabsTrigger>
            <TabsTrigger
              value="best-sellers"
              className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-gray-900 px-4 py-2"
            >
              Best Sellers
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-gray-900 px-4 py-2"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div className="grid gap-8 md:grid-cols-3 mt-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  About me
                </h2>
                <p className="mb-4 text-gray-700">Hi guys!</p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur lacinia tellus ante, viverra cursus mauris
                  condimentum sed. Nulla rhoncus, lacus et condimentum eleifend,
                  augue turpis cursus mi, id vehicula massa velit non dolor. In
                  nec ante turpis.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                  Products
                </h2>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="h-24 bg-gray-200 rounded-md"
                    ></div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="bg-[#8b2635] text-white mt-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Connect on Social Network
                    </h3>
                    <div className="space-y-4">
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-transparent border-white text-white hover:bg-white/10"
                      >
                        <Instagram className="mr-2 h-4 w-4" />
                        John Doe
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-transparent border-white text-white hover:bg-white/10"
                      >
                        <Facebook className="mr-2 h-4 w-4" />
                        John Doe
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-transparent border-white text-white hover:bg-white/10"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        JohnDoe@gmail.com
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">
                  Similar Artisans
                </h3>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Avatar key={item}>
                      <AvatarImage src={`/artisanProfileImage1.png`} />
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="gallery" className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Product Gallery</h2>
            <ImageCollage individualCardData={mukeshChauhanData} />
          </TabsContent>
          <TabsContent value="best-sellers" className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
            <ImageCollage individualCardData={mukeshChauhanData} />
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <select className="border rounded-md p-2 bg-white">
                  <option>March 2023 - February 2024</option>
                </select>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Total Reviews</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">10k</span>
                    <span className="ml-2 text-sm text-green-500">+2.5%</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Growth in reviews this year
                  </p>
                </div>

                <div className="border-l-2 border-r-2 border-gray-200 pl-28">
                  <h3 className="text-lg font-semibold mb-2">
                    Average Ratings
                  </h3>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold mr-2">4.0</span>
                    <div className="flex text-yellow-400">
                      {"★★★★☆".split("").map((star, index) => (
                        <span key={index}>{star}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Average rating this year
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Rating Distribution
                  </h3>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center mb-2">
                      <span className="w-4 mr-2">{rating}</span>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-green-500 h-1.5 rounded-full"
                          style={{ width: `${rating * 20}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-8 border-gray-200" />

              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Reviews</h3>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Mr. John Doe</h4>
                      <p className="text-sm text-gray-500">Total Spent: $123</p>
                      <p className="text-sm text-gray-500">Total Reviews: 14</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

const ProductCollage: React.FC<ProductCollageProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-48">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-sm text-gray-500">{product.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
