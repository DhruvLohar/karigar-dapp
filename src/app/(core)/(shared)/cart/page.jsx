"use client";

import React, { useState } from "react";
import { IndianRupee, Minus, Plus, Trash2 } from "lucide-react";

const Page = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "WoodenCraft",
      price: 56,
      quantity: 1,
      seller: "Mr. John Doe",
      image: "/districtArtisanImage1.png",
    },
    {
      id: 2,
      name: "SteelCraft",
      price: 44,
      quantity: 1,
      seller: "Mr. Sahil Doe",
      image: "/districtArtisanImage2.png",
    },
    {
      id: 3,
      name: "Craft",
      price: 144,
      quantity: 1,
      seller: "Mr. Sahil Doe",
      image: "/districtArtisanImage3.png",
    },
    {
      id: 4,
      name: "Steel",
      price: 100,
      quantity: 1,
      seller: "Mr. Sahil Doe",
      image: "/districtArtisanImage4.png",
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <main className="flex min-h-screen w-full max-w-7xl mx-auto px-4 py-8 flex-col md:flex-row gap-8 text-gray-900">
      <div className="w-full md:w-2/3">
        <div className="header mb-6">
          <h1 className="mb-2 text-3xl font-bold">Your Cart</h1>
          <p className="text-sm text-gray-600">
            Review and Checkout with Ease!
          </p>
        </div>

        <div className="cart-details space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-md object-cover"
                />
                <div className="flex-grow">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-600">Seller: {item.seller}</p>
                  <div className="flex items-center mt-2 font-semibold text-lg">
                    <IndianRupee size={16} strokeWidth={2} />
                    {item.price}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center border rounded-md">
                    <button
                      className="p-2"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      className="p-2"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    className="text-red-500 flex items-center"
                    onClick={() => handleRemove(item.id)}
                  >
                    <Trash2 size={16} className="mr-1" /> Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="font-bold text-[#1A2B4A]  text-2xl mb-4">
            Order Summary
          </h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center text-[#1A2B4A]">
              <span>Subtotal</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center font-semibold text-lg">
              <span>Order Total</span>
              <span>₹{calculateTotal()}</span>
            </div>
          </div>
          <button
            className={`w-full mt-6 py-3 rounded-full text-white text-lg font-semibold transition-colors ${
              cartItems.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-dori/90 hover:bg-dori"
            }`}
            disabled={cartItems.length === 0}
          >
            {cartItems.length === 0 ? "Cart is Empty" : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
