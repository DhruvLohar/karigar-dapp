"use client";

import { Button } from "@/components/ui/button";
import { Info } from "lucide-react"; // Assuming you're using lucide-react for icons
import { useState } from "react";
import { toast } from "sonner";
import QRCode from "react-qr-code"; // Changed to react-qr-code

export default function RewardsPage() {
  const [showInfo, setShowInfo] = useState(false);
  const [showMoreTransactions, setShowMoreTransactions] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [address, setAddress] = useState("");

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleLoadMore = () => {
    setShowMoreTransactions(true);
  };

  const handleReceiveClick = () => {
    setShowReceiveModal(true);
  };

  const handleSendClick = () => {
    setShowSendModal(true);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("0xc6F3c2A37E...bE1290Ec627D");
    toast.success("Address copied to clipboard!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Rewards</h1>
        <div className="h-1 w-20 bg-blue-950 mx-auto rounded-full mb-6"></div> {/* Decorative line */}
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">Wallet Balance</h2>
        <p className="text-lg text-gray-600">1 Token = ₹0.719007 <span className="text-green-500">▲ 1.14%</span></p>
      </div>

      <div className="flex justify-center items-center mb-8">
        <h2 className="text-5xl font-bold text-blue-600">355.03</h2>
        <div className="ml-3 flex">
          <p className="text-lg text-gray-600">Your Total Tokens</p>
          <Info className="ml-2 cursor-pointer text-gray-500 hover:text-blue-500 transition-colors" onClick={handleInfoClick} />
        </div>
      </div>

      {showInfo && (
        <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
          <h3 className="font-semibold">Your token allocation</h3>
          <p>Allocated tokens represent a predetermined quantity of tokens that are temporarily locked and will gradually become unlocked over time.</p>
        </div>
      )}
      {/* 
      <div className="flex justify-center space-x-4 mb-8">
        <Button className="bg-blue-950 text-white px-4 py-2 rounded" onClick={handleSendClick}>Send</Button>
        <Button className="bg-blue-950 text-white px-4 py-2 rounded" onClick={handleReceiveClick}>Receive</Button>
      </div> */}

      <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
        <p><strong>10</strong> earned from <strong>10</strong> people joining your workshop</p>
        <p className="text-sm text-gray-500">12 Mar, 2025 at 7:21 PM</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
        <p><strong>5</strong> earned from <strong>5</strong> people sharing your brochure</p>
        <p className="text-sm text-gray-500">11 Mar, 2025 at 10:20 PM</p>
      </div>

      {showMoreTransactions && (
        <>
          <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
            <p><strong>8</strong> earned from <strong>8</strong> people attending your seminar</p>
            <p className="text-sm text-gray-500">10 Mar, 2025 at 3:15 PM</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
            <p><strong>3</strong> earned from <strong>3</strong> people using your service</p>
            <p className="text-sm text-gray-500">9 Mar, 2025 at 1:00 PM</p>
          </div>
        </>
      )}

      <Button className="w-full bg-blue-950 text-white py-2 rounded" onClick={handleLoadMore}>See All Transactions</Button>

      {showReceiveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Receive Tokens</h3>
            <div className="bg-white p-4">
              <QRCode
                value="0xc6F3c2A37E...bE1290Ec627D"
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
              />
            </div>
            <p className="mt-4">Address: 0xc6F3c2A37E...bE1290Ec627D</p>
            <div className="flex flex-col gap-2 mt-4">
              <Button onClick={handleCopyAddress}>Copy Address</Button>
              <Button variant="destructive" onClick={() => setShowReceiveModal(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}

      {showSendModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Send Tokens</h3>
            <input
              type="text"
              placeholder="Enter recipient address"
              className="border p-2 w-full mb-4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="flex flex-col gap-2">
              <Button className="bg-blue-950 text-white px-4 py-2 rounded" onClick={() => toast.success("Tokens sent!")}>Send</Button>
              <Button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowSendModal(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}