'use client'
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Elsie_Swash_Caps } from 'next/font/google';

const elsieSwashCaps = Elsie_Swash_Caps({
  subsets: ['latin'],
  weight: ['400'],
});

const products = [
  { id: 1, name: 'Snow Theme Ghazipur Jute Handmade Wall Hanging (40*36) Inches', location: 'Ghazipur, Uttar Pradesh', price: '1,988 incl. GST', rating: 4.5, image: '/wallHanging.jpg', category: 'Handicraft' },
  { id: 2, name: 'Moya of Joynagar', location: 'Joynagar, West Bengal', price: '500 incl. GST', rating: 4.8, image: '/sweets.jpg', category: 'Edible' },
  { id: 3, name: 'Mysore Rose Wood Inlay – Ram Darbhar (13*19) Inches', location: 'Mysore, Karnataka', price: " 3,954 incl. GST", rating: 4.5, image: '/ramji.png', category: 'Handicraft' },
  { id: 4, name: 'Rasgulla', location: 'Kolkata, West Bengal', price: 10, rating: 4.9, image: '/rasgulla.jpeg', category: 'Edible' },
  { id: 5, name: 'Sandesh', location: 'Kolkata, West Bengal', price: 12, rating: 4.7, image: '/sandesh.jpg', category: 'Edible' },
  { id: 6, name: 'Silk Saree', location: 'Varanasi, Uttar Pradesh', price: 250, rating: 4.7, image: '/silk-saree.jpg', category: 'Clothing' },
  { id: 7, name: 'Pashmina Shawl', location: 'Kashmir', price: 180, rating: 4.8, image: '/pashmina-shawl.jpg', category: 'Clothing' },
  { id: 8, name: 'Banarasi Kurta', location: 'Varanasi, Uttar Pradesh', price: 75, rating: 4.6, image: '/banarasi-kurta.jpeg', category: 'Clothing' },
];

const categories = ['All Product', 'Edible', 'Clothing', 'Handicraft'];

export default function HomeProducts() {
  const [activeCategory, setActiveCategory] = useState('All Product');

  const filteredProducts = activeCategory === 'All Product'
    ? products.slice(0, 3)  // Show only the first 3 items for 'All Product'
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-6xl font-serif text-indigo-900 ${elsieSwashCaps.className}`}>Products</h2>
        <div className="space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded ${activeCategory === category ? 'bg-indigo-100 text-indigo-900' : 'text-gray-600'
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            <div className="relative aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <button className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className={`text-lg text-black font-semibold ${elsieSwashCaps.className}`}>{product.name}</h3>
              <p className="text-sm text-gray-600">{product.location}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-black">₹{product.price}</span>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1">{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-4">
        <a href="#" className="text-indigo-600 hover:underline">See more</a>
      </div>
    </div>
  );
}
