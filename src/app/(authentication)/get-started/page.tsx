import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ProductCarousel from "@/components/custom/ProductCarousel";

export default function GetStarted() {
  return (
    <main className="h-screen flex">
      {/* Left section */}
      <div className="w-1/2 bg-slate-100 p-8 flex flex-col items-center justify-center">
        <Image
          src="/odopLogo.png"
          width={200}
          height={100}
          alt="ODOP Logo"
          className="mb-8"
        />
        <h2 className="text-2xl text-slate-600 mb-8 text-center">
          Welcome to the Unified Marketplace
        </h2>
        <div className="flex-grow w-full flex items-center justify-center">
          <ProductCarousel />
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/2 bg-white rounded-l-3xl shadow-lg p-8 flex flex-col justify-center">
        <h1 className="scroll-m-20 text-4xl mb-6 font-bold tracking-tight text-primary">
          Get Started
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Join our platform to explore a world of opportunities and connect with
          global markets.
        </p>

        <div className="space-y-6 mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              1
            </div>
            <p className="text-lg">Create your account</p>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              2
            </div>
            <p className="text-lg">Set up your profile</p>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              3
            </div>
            <p className="text-lg">Start exploring the marketplace</p>
          </div>
        </div>

        <Link href="/onboarding" className="w-full">
          <Button className="w-full py-6 text-lg rounded-lg">
            Get Started
          </Button>
        </Link>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500 mb-2">
            Already have an account?
          </p>
          <Link href="/login" className="w-full">
            <Button
              variant="outline"
              className="w-full py-6 text-lg rounded-lg"
            >
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
