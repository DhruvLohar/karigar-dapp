'use client'
import Navbar from '@/components/custom/Navbar';
import { useEffect, useState, useRef } from 'react'
import Home from '@/components/custom/Home';
import HomeProducts from '@/components/custom/homeProducts';
import Testimonials from '@/components/custom/testimonials';
import HomeDori from '@/components/custom/HomeDori';
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();

  return (
    <>
      <main>
        <div className="w-screen bg-dori/70 text-white py-4 text-center -mx-[calc(50vw-50%)]">
          <p className="mb-2 text-secondary"> <span className="text-xl font-bold mb-2 text-secondary">Note : </span>This website is still under development. you can visit the Artisan  , User  or Government Site to know more about the project.</p>
          <div className="space-x-4">
            <button 
              onClick={() => router.push('/artisan/home')}
              className="bg-dori text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              Artisan Site
            </button>
            <button 
              onClick={() => router.push('/')}
              className="bg-dori text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              User Site
            </button>
            <button 
              onClick={() => router.push('/government')}
              className="bg-dori text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              Government Site
            </button>
          </div>
        </div>
        <Home />
        <HomeDori />
        <HomeProducts />
      </main>
      <Testimonials />
    </>
  );
}
