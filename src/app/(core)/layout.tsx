"use client"
import { usePathname } from 'next/navigation';
import Sidebar from "@/components/custom/Sidebar";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import SmoothScroll from "@/components/custom/SmoothScroll";
import { ToastContainer } from "@/components/ui/use-toast";
import ChatBotModal from "@/components/custom/ChatBotModal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isArtisanPage = pathname.startsWith('/artisan');

  return (
    <ToastContainer>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen">
          {isArtisanPage ? (
            <div className="flex flex-1">
              <Sidebar />
              <div className="flex flex-col flex-1">
                <main className="flex-1 overflow-auto lg:px-10 px-4">{children}</main>
                <Footer />
              </div>
            </div>
          ) : (
            <>
              <Navbar />
              <main className="flex-1 overflow-auto lg:px-10 px-4">{children}</main>
              <Footer />
            </>
          )}
          <ChatBotModal />
        </div>
      </SmoothScroll>
    </ToastContainer>
  );
}
