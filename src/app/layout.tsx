import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";
import { WalletProvider } from "@/components/WalletProvider";
import { Toaster } from "@/components/ui/toaster";
import { WrongNetworkAlert } from "@/components/WrongNetworkAlert";
import { Toaster as SonnerToaster } from "sonner";

import "./globals.css";
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Karigar",
  title: "Karigar",
  description: "Karigar",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          poppins.className
        )}
      >
        <WalletProvider>
          <ReactQueryProvider>
            <div>{children}</div>
            <WrongNetworkAlert />
            <Toaster />
            <SonnerToaster />
          </ReactQueryProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
