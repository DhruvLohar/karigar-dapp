import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function GetStarted() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <Image src={"/odopLogo.png"} width={200} height={100} className="mb-8" alt="odopLogo" />

      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-[400px] bg-slate-500 my-4"></div>

        <div className="flex items-center justify-center space-x-4 my-4">
          <div className="w-2 h-4 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
          <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
        </div>

        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-primary mb-2">Unified Marketplace</h3>
        <p className="text-center text-sm w-[90%] text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>

      <Link href={"/onboarding"} className="w-full">
        <Button className="w-full py-8 text-lg mt-8">Get Started</Button>
      </Link>

      <Link href={"/login"} className="w-full">
        <Button className="w-full py-8 text-lg mt-2" variant="outline">
          I already have an account
        </Button>
      </Link>
    </main>
  );
}
