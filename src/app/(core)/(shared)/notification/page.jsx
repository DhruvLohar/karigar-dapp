"use client";

import React, { useState, useEffect } from "react";

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const sampleNotifications = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Notification ${i + 1}`,
      message: `This is the message for notification ${i + 1}.`,
      timestamp: new Date().toLocaleString(),
    }));
    setNotifications(sampleNotifications);
  }, []);

  const clearNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isClearing: true }
          : notification
      )
    );
    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== id)
      );
    }, 300);
  };

  const clearAllNotifications = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        isClearing: true,
      }))
    );
    setTimeout(() => {
      setNotifications([]);
    }, 300);
  };

  return (
    <div className="min-h-[80vh] p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#1A2B4A]">Notifications</h1>
        {notifications.length > 0 && (
          <button
            onClick={clearAllNotifications}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.id} className={`mb-4 overflow-hidden`}>
              <div
                className={`p-4 border-b border-gray-200 flex justify-between items-start
                            transition-all duration-300 ease-in-out
                            ${
                              notification.isClearing
                                ? "opacity-0 transform translate-x-full"
                                : "opacity-100 transform translate-x-0"
                            }`}
              >
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-gray-800">
                    {notification.title}
                  </h2>
                  <p className="text-gray-600">{notification.message}</p>
                  <span className="text-sm text-gray-400">
                    {notification.timestamp}
                  </span>
                </div>
                <button
                  onClick={() => clearNotification(notification.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No notifications</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationPage;
