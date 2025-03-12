import ImageCollage from "@/components/custom/ImageCollage";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const workshopData = [
  {
    title: "Workshop Title 1",
    description:
      "Description for Workshop Title 1. This workshop will focus on various techniques and skills.",
    address: "1 Workshop Street, City 1",
    date: "2024-01-01",
    workshop_level: "Beginner",
    tags: ["pottery", "beginner", "basics"],
    organizer: "Craft Guild",
    price: 100,
    is_conducted_by_artisan: true,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
  {
    title: "Workshop Title 2",
    description:
      "Description for Workshop Title 2. This workshop will focus on various techniques and skills.",
    address: "2 Workshop Street, City 2",
    date: "2024-02-02",
    workshop_level: "Intermediate",
    tags: ["weaving", "intermediate", "skills"],
    organizer: "Textile Arts Association",
    price: 150,
    is_conducted_by_artisan: true,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
  {
    title: "Workshop Title 3",
    description:
      "Description for Workshop Title 3. This workshop will focus on various techniques and skills.",
    address: "3 Workshop Street, City 3",
    date: "2024-03-03",
    workshop_level: "Advanced",
    tags: ["woodworking", "advanced", "techniques"],
    organizer: "Woodcraft Society",
    price: 200,
    is_conducted_by_artisan: false,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
  {
    title: "Workshop Title 4",
    description:
      "Description for Workshop Title 4. This workshop will focus on various techniques and skills.",
    address: "4 Workshop Street, City 4",
    date: "2024-04-04",
    workshop_level: "Beginner",
    tags: ["jewelry", "beginner", "design"],
    organizer: "Gemcraft Association",
    price: 120,
    is_conducted_by_artisan: true,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
];

export default function WorkShopView({ params }: { params: { id: string } }) {
  const userType = "artisan";

  if (userType !== "artisan") {
    return <div className="text-black">ARTISAN NAHI HAI TU BSDK</div>;
  }

  const individualCardData = workshopData.find(
    // (card) => card.title === decodeURIComponent(params.id)
    (card) => card.title === "Workshop Title 4"
  );

  if (!individualCardData) {
    return <div>Workshop not found</div>;
  }

  return (
    <main className="my-4">
      <center className="w-full h-fit text-gray-900 ">
        <section className="w-full flex flex-col pb-5 space-y-4">
          <ImageCollage
            individualCardData={individualCardData}
            key={individualCardData.title}
          />
          <h2 className="scroll-m-20 text-left text-3xl lg:text-4xl font-m mb-8 lg:font-semibold tracking-tight w-full">
            {individualCardData.title}
          </h2>
          <span className="space-x-1 flex w-full justify-start items-center">
            <MapPin color="#9ca3af" strokeWidth={1} size={22} />
            <p className="text-left font-light text-lg text-gray-600 md:text-lg">
              {individualCardData.address}
            </p>
          </span>
          <div className="w-full flex justify-start space-x-1">
            {individualCardData.tags.map((badge) => (
              <div
                className="bg-gray-200 px-3 py-2 text-xs font-light text-black rounded-2xl"
                key={badge}
              >
                {badge}
              </div>
            ))}
          </div>
        </section>
        <section className="space-y-4 justify-start">
          <div className="flex justify-start space-x-6">
            <div>
              <h2 className="scroll-m-20 text-left text-lg lg:text-2xl font-base tracking-tight w-full">
                Date And Time:
              </h2>
              <p className="text-left font-light text-m text-slate-600 md:text-lg ">
                {individualCardData.date}
              </p>
            </div>
            <div>
              <h2 className="scroll-m-20 text-left text-lg lg:text-2xl font-base tracking-tight w-full">
                Organisers:
              </h2>
              <p className="text-left font-light text-sm text-slate-600 md:text-lg ">
                {individualCardData.organizer}
              </p>
            </div>
          </div>
          <div>
            <h2 className="scroll-m-20 text-left text-lg lg:text-2xl font-base tracking-tight w-full">
              Description:
            </h2>
            <p className="text-left font-light text-sm text-slate-600 md:text-lg ">
              {individualCardData.description}
            </p>
          </div>
          <div>
            <h2 className="scroll-m-20 text-left text-lg lg:text-2xl font-base tracking-tight w-full">
              Workshop Level:
            </h2>
            <p className="text-left font-light text-sm text-slate-600 md:text-lg ">
              {individualCardData.workshop_level}
            </p>
          </div>
          <div className="flex justify-start">
            <Button className="w-full lg:w-1/6 ">Notify me</Button>
          </div>
        </section>
      </center>
    </main>
  );
}
