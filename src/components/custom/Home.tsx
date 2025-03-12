import { Elsie_Swash_Caps } from 'next/font/google';
import Hero from "./Hero"
const elsieSwashCaps = Elsie_Swash_Caps({
  subsets: ['latin'],
  weight: ['400'],
});
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-8 sm:py-12 text-black">
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 ${elsieSwashCaps.className}`}>Offerings</h1>
        <p className={`text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 ${elsieSwashCaps.className}`}>
          A platform with various social interactive,<br />
          bridging the gap between Business growth and Local Artisans
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
            <div className="border-2 border-blue-950 rounded-t-[100px] sm:rounded-t-[150px] lg:rounded-t-[200px] pt-12 sm:pt-16 lg:pt-20 pr-6 sm:pr-8 lg:pr-12 pb-12 sm:pb-16 lg:pb-20 pl-8 sm:pl-12 lg:pl-16 overflow-hidden relative left-2 sm:left-4">
              <div className="relative top-8 sm:top-10">
                <h2 className={`mt-24 sm:mt-32 lg:mt-40 text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 ${elsieSwashCaps.className}`}>COMMUNITY</h2>
                <p className={`text-base sm:text-lg lg:text-xl ${elsieSwashCaps.className}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  et auctor diam. Sed fringilla est et sagittis molestie. Maecenas augue nisl,
                  tempus sit
                </p>
              </div>
            </div>
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 sm:w-12 h-8 sm:h-12 border border-gray-300 -z-10"></div>
          </div>
          {/* <Image
              src="/redwindow2.png"
              alt="Artisans background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            /> */}
          <div className="w-full lg:w-1/2 relative">
            <div className="border-2 border-blue-500 rounded-l-[100px] sm:rounded-l-[150px] lg:rounded-l-[200px] p-12 sm:p-16 lg:p-20 overflow-hidden relative right-4 sm:right-8 lg:right-12">
              {/* <Image
              src="/redwindow2.png"
              alt="Artisans background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            /> */}
              <div className="relative z-10 p-2 sm:p-4 w-full sm:w-[90%] lg:w-[80%] ml-auto">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl text-right font-serif mb-4 mr-4 sm:mr-8 ${elsieSwashCaps.className}`}>Artisans</h2>
                <p className={`text-base sm:text-lg lg:text-xl text-right mr-4 sm:mr-8 mb-4 sm:mb-6 ${elsieSwashCaps.className}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et auctor diam.
                  Sed fringilla est et sagittis molestie. Maecenas augue nisl, tempus sit amet elit
                  eget, consetetur placerat mi. Ut sed tincidunt felis, ec ornare ligula.
                  Donec in risus sed turpis lacinia volutpat. Pellentesque sodales metus est, vel viverra
                  lectus
                </p>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 sm:w-12 h-8 sm:h-12 border border-gray-300 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
