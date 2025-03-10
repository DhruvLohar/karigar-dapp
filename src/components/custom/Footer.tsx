import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <footer className=" w-full">
      <div className="md:px-10 px-5 ">
        <div className="h-[1px] my-6 w-full bg-gray-200"></div>
      </div>

      <div className="container gap-4 lg:gap-0 mb-6 mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex flex-col justify-center items-center space-y-2">
          <Link href={"/"}>
            <Image
              src="/img/ODOP1.png"
              height={100}
              width={100}
              alt="ODOP Logo"
            />
          </Link>
          <h2 className="text-black text-[5px] font-thin">
            One District One Product
          </h2>
        </div>

        <div className="flex items-center gap-1 lg:gap-4 text-[9px] lg:text-xs text-black">
          <p>&copy; 2024 Acme Inc. All rights reserved.</p>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

interface MountainIconProps extends React.SVGProps<SVGSVGElement> { }

function MountainIcon(props: MountainIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}