import React from 'react';
import Image from 'next/image';

export default function Hero() { // Added parentheses here
    return (
        <div className="flex flex-col items-center justify-center text-center hero-container">
            {/* ... existing code ... */}
            <div className="pointer-events-none select-none">
                <Image
                    src="/odopMain.jpeg"
                    alt="Description"
                    className="w-full h-[70vh] mt-10"
                    width={800} // Set the width you want
                    height={200} // Set the height you want
                    draggable="false"
                />
            </div>
            {/* ... existing code ... */}
        </div>
    );
};

