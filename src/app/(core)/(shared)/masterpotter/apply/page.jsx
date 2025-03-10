"use client"; // Add this at the top of the file

import { useState, useCallback, useEffect } from "react";
import { Upload } from "lucide-react";
import { useParams } from "next/navigation";

export default function Component() {
  const params = useParams();
  const [jobData, setJobData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    aadharCard: null,
    panCard: null,
  });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Fetch job data based on the ID
    const fetchJobData = async () => {
      // In a real application, you would fetch this data from an API
      // For now, we'll use mock data
      const mockJobData = {
        title: "Master Potter",
        company: "Khurja Pottery Village",
        openings: 3,
        applicants: 18,
        industry: "Traditional Pottery",
        salary: "₹18,000 - ₹30,000 per month",
        education: "Artisan Training or Equivalent Experience",
        category: "Handcraft",
      };
      setJobData(mockJobData);
    };

    fetchJobData();
  }, [params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        resume: file,
      }));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("drop", handleDrop);
    };
  }, [handleDragOver, handleDragLeave, handleDrop]);

  return (
    <div className="bg-white min-h-screen p-8 relative">
      {isDragging && (
        <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="text-4xl font-bold text-white">Drop here</div>
        </div>
      )}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          {jobData && (
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {jobData.title}
              </h1>
              <p className="text-gray-600">{jobData.company}</p>
              <p className="text-sm text-gray-500 mt-2">
                {jobData.openings} Openings • {jobData.industry} •{" "}
                {jobData.education} • {jobData.category}
              </p>
            </div>
          )}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Artisan Job Application Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="aadharCard"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhar Card
              </label>
              <div
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-[1.02] hover:border-blue-500 hover:shadow-lg"
                onClick={() => document.getElementById("aadharCard").click()}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
                  <div className="flex text-sm text-gray-600">
                    <span className="relative bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 transition-colors duration-300">
                      Upload a file
                    </span>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                    {formData.aadharCard
                      ? formData.aadharCard.name
                      : "PDF, JPG, PNG up to 5MB"}
                  </p>
                  <input
                    id="aadharCard"
                    name="aadharCard"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="panCard"
                className="block text-sm font-medium text-gray-700"
              >
                PAN Card
              </label>
              <div
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-[1.02] hover:border-blue-500 hover:shadow-lg"
                onClick={() => document.getElementById("panCard").click()}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
                  <div className="flex text-sm text-gray-600">
                    <span className="relative bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 transition-colors duration-300">
                      Upload a file
                    </span>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                    {formData.panCard
                      ? formData.panCard.name
                      : "PDF, JPG, PNG up to 5MB"}
                  </p>
                  <input
                    id="panCard"
                    name="panCard"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A2B4A] hover:bg-[#1A2B4A]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
