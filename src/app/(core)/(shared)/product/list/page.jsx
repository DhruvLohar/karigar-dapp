"use client";

import { useState } from "react";

const ListProduct = () => {
  const initialProductState = {
    title: "",
    image: null,
    price: "",
    description: "",
    backstory: "",
    otherDetails: "",
    dimensions: {
      width: "",
      length: "",
      height: "",
      weight: "",
    },
    rawMaterial: "",
  };

  const [product, setProduct] = useState(initialProductState);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setProduct({ ...product, [name]: files[0] });
    } else if (name in product.dimensions) {
      setProduct({
        ...product,
        dimensions: { ...product.dimensions, [name]: value },
      });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(product);
    setShowModal(true);
    // Clear the form
    setProduct(initialProductState);
    // Clear the file input
    if (e.target.image) {
      e.target.image.value = "";
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-dori">
          <h1 className="text-center text-3xl font-bold text-white">
            List a New Product
          </h1>
        </div>
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={product.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="backstory"
              className="block text-sm font-medium text-gray-700"
            >
              Backstory
            </label>
            <textarea
              id="backstory"
              name="backstory"
              value={product.backstory}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="otherDetails"
              className="block text-sm font-medium text-gray-700"
            >
              Other Product Details
            </label>
            <textarea
              id="otherDetails"
              name="otherDetails"
              value={product.otherDetails}
              onChange={handleChange}
              rows="2"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["width", "length", "height", "weight"].map((dim) => (
              <div key={dim}>
                <label
                  htmlFor={dim}
                  className="block text-sm font-medium text-gray-700 capitalize"
                >
                  {dim}
                </label>
                <input
                  type="number"
                  id={dim}
                  name={dim}
                  value={product.dimensions[dim]}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            ))}
          </div>

          <div>
            <label
              htmlFor="rawMaterial"
              className="block text-sm font-medium text-gray-700"
            >
              Raw Material
            </label>
            <input
              type="text"
              id="rawMaterial"
              name="rawMaterial"
              value={product.rawMaterial}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Raw Material"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-dori hover:bg-dori-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dori transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center">
            <svg
              className="h-16 w-16 text-green-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p className="text-gray-600 text-center mb-6">
              Your product has been queued for listing.
            </p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-dori text-white rounded hover:bg-dori-dark transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
