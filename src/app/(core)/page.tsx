"use client"
import Home from '@/components/custom/Home';
import HomeProducts from '@/components/custom/HomeProducts';
import Testimonials from '@/components/custom/Testimonials';
import HomeDori from '@/components/custom/HomeDori';
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <main>
        <div className="w-screen bg-blue-950/70 text-white py-4 text-center -mx-[calc(50vw-50%)]">
          <p className="mb-2 text-secondary"> <span className="text-xl font-bold mb-2 text-secondary">Note : </span>This website is still under development. you can visit the Artisan or User site to know more about the project.</p>
          <div className="space-x-4">
            <Button
              onClick={() => router.push('/artisan/home')}
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              Artisan Site
            </Button>
            <Button
              onClick={() => router.push('/')}
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              User Site
            </Button>
            {/* <Button
              onClick={() => router.push('/government')}
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              Government Site
            </Button> */}
          </div>
        </div>
        <Home />
        {/* <HomeDori /> */}
        <HomeProducts />
      </main>
      <Testimonials />
    </>
  );
}
