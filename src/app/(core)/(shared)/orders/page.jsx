"use client";
import React, { useState } from "react";

// Mock data for demonstration purposes
const upcomingOrders = [
  {
    id: 1,
    product: "Handwoven Pashmina Shawl",
    quantity: 2,
    deliveryDate: "2024-03-15",
    status: "Processing",
    origin: "Kashmir, India",
    artisan: "Fatima Begum",
  },
  {
    id: 2,
    product: "Organic Assam Tea Set",
    quantity: 1,
    deliveryDate: "2024-03-20",
    status: "Shipped",
    origin: "Assam, India",
    artisan: "Rajesh Gogoi",
  },
];

const pastOrders = [
  {
    id: 3,
    product: "Madhubani Painting",
    quantity: 1,
    deliveryDate: "2024-02-28",
    status: "Delivered",
    origin: "Bihar, India",
    artisan: "Sunita Devi",
  },
  {
    id: 4,
    product: "Dhokra Metal Craft Figurine",
    quantity: 2,
    deliveryDate: "2024-02-10",
    status: "Delivered",
    origin: "Odisha, India",
    artisan: "Prakash Mahanta",
  },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#1A2B4A]">My Orders</h1>
      <div className="mb-6">
        <TabButton
          label="Upcoming Orders"
          isActive={activeTab === "upcoming"}
          onClick={() => setActiveTab("upcoming")}
          className="bg-dori/80"
        />
        <TabButton
          label="Past Orders"
          isActive={activeTab === "past"}
          onClick={() => setActiveTab("past")}
          className="bg-dori/80"
        />
      </div>
      <div>
        {activeTab === "upcoming" && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A2B4A]/90">
              Upcoming Treasures
            </h2>
            <OrderTable
              orders={upcomingOrders}
              onOrderClick={handleOrderClick}
            />
          </>
        )}
        {activeTab === "past" && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A2B4A]/90">
              Past Acquisitions
            </h2>
            <OrderTable orders={pastOrders} onOrderClick={handleOrderClick} />
          </>
        )}
      </div>
      {selectedOrder && (
        <OrderDetails order={selectedOrder} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

function OrderTable({ orders, onOrderClick }) {
  return (
    <div className="overflow-x-auto min-h-[50vh]">
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-dori/80 text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Product
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Delivery Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order.id}
              onClick={() => onOrderClick(order)}
              className={`cursor-pointer hover:bg-indigo-50 ${
                index % 2 === 0 ? "bg-white" : "bg-indigo-50"
              }`}
            >
              <td className="px-6 py-4 text-sm">{order.id}</td>
              <td className="px-6 py-4 text-sm font-medium">{order.product}</td>
              <td className="px-6 py-4 text-sm">{order.quantity}</td>
              <td className="px-6 py-4 text-sm">{order.deliveryDate}</td>
              <td className="px-6 py-4 text-sm">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    order.status === "Delivered"
                      ? "bg-green-200 text-green-800"
                      : order.status === "Shipped"
                      ? "bg-blue-200 text-[#1A2B4A]"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      className={`mr-4 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "bg-dori/95 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function OrderDetails({ order, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">
          {order.product}
        </h2>
        <p className="mb-2">
          <strong className="text-[#1A2B4A]">Order ID:</strong> {order.id}
        </p>
        <p className="mb-2">
          <strong className="text-[#1A2B4A]">Quantity:</strong> {order.quantity}
        </p>
        <p className="mb-2">
          <strong className="text-[#1A2B4A]">Delivery Date:</strong>{" "}
          {order.deliveryDate}
        </p>
        <p className="mb-2">
          <strong className="text-[#1A2B4A]">Status:</strong> {order.status}
        </p>
        <p className="mb-2">
          <strong className="text-[#1A2B4A]">Origin:</strong> {order.origin}
        </p>
        <p className="mb-2">
          <strong className="text-[#1A2B4A]">Artisan:</strong> {order.artisan}
        </p>
        <p className="mt-4 text-[#1A2B4A]">
          This unique piece carries the rich cultural heritage of its origin. By
          purchasing this item, you&apos;re supporting local artisans and
          preserving traditional craftsmanship.
        </p>
        <button
          className="mt-6 bg-dori/95 text-white px-6 py-2 rounded-full hover:bg-dori/90 transition-colors duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
