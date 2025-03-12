import React from 'react';
import Image from 'next/image';

const HomeDori = () => {
    return (
        <div className="w-full flex justify-center items-center my-12">
            <div className="relative w-[95vw] aspect-[16/10]">
                <Image
                    src="/odopLogo.png"  // Make sure this path is correct
                    alt="Dori Image"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="select-none pointer-events-none rounded-lg"
                    draggable="false"
                    priority
                />
            </div>
        </div>
    );
};

export default HomeDori;

