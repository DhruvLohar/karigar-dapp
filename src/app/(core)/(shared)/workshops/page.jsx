import React from 'react';

const workshops = [
  {
    id: 1,
    name: 'Pottery Workshop',
    image: 'path_to_pottery_image.jpg',
    details: 'Learn the art of pottery with our expert instructors. Suitable for all levels.',
  },
  {
    id: 2,
    name: 'Woodworking Workshop',
    image: 'path_to_woodworking_image.jpg',
    details: 'Master the basics of woodworking and create your own piece of furniture.',
  },
  // Add more workshops as needed
];

const WorkshopSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map(workshop => (
            <div key={workshop.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={workshop.image}
                alt={workshop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{workshop.name}</h3>
                <p className="text-gray-700">{workshop.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
