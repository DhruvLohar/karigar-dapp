"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Upload, FileText, Image as ImageIcon } from "lucide-react";

const CreateBrochure = () => {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(prev => [...prev, ...Array.from(e.target.files || [])]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleCreateBrochure = async () => {
    setIsCreating(true);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Generate random ID for demo
    const dummyId = Math.random().toString(36).substr(2, 9);

    setIsCreating(false);
    router.push(`/brochure/${dummyId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Create Your Brochure</h1>

      <div className="space-y-8">
        {/* Content Prompt */}
        <div className="space-y-4">
          <label className="block text-lg font-medium">
            Describe your brochure content
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Describe what you want in your brochure. For example: Create a brochure for my leather craft store showcasing belts and watch straps..."
          />
        </div>

        {/* File Upload */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <Upload size={20} />
              Add Files
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              className="hidden"
              multiple
              accept="image/*"
            />
          </div>

          {/* Selected Files List */}
          {selectedFiles.length > 0 && (
            <div className="space-y-2">
              <p className="font-medium">Selected Files:</p>
              <div className="grid grid-cols-1 gap-2">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <ImageIcon size={20} className="text-gray-500" />
                      <span>{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Create Button */}
        <button
          onClick={handleCreateBrochure}
          disabled={isCreating || (!prompt && selectedFiles.length === 0)}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCreating ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Creating your brochure...
            </>
          ) : (
            <>
              <FileText size={20} />
              Create Brochure
            </>
          )}
        </button>
      </div>

      {/* Processing Modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg space-y-4 text-center">
            <Loader2 className="animate-spin mx-auto" size={40} />
            <p className="text-lg font-medium">Creating your brochure...</p>
            <p className="text-gray-500">This may take a few moments</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBrochure;