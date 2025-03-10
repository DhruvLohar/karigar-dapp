import React from "react";
import Image from "next/image";

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}: {
  clickedImg: string;
  setClickedImg: (img: string | null) => void;
  handelRotationRight: () => void;
  handelRotationLeft: () => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if ((e.target as HTMLElement).classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <div
      className="fixed inset-0 -top-5 flex items-center justify-center bg-black/80 dismiss z-30"
      onClick={handleClick}
    >
      <Image
        src={clickedImg}
        height={800}
        width={800}
        alt="bigger pic"
        className="block m-auto shadow-lg"
      />
      <span
        className="absolute top-5 right-5 text-2xl text-white cursor-pointer dismiss"
        onClick={handleClick}
      >
        X
      </span>
      <div
        onClick={handelRotationLeft}
        className="absolute left-0 top-1/2 w-12 h-12 flex bg-gray-700 justify-center items-center text-white cursor-pointer transform -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        onClick={handelRotationRight}
        className="absolute right-0 top-1/2 w-12 h-12 flex bg-gray-700 justify-center items-center text-white cursor-pointer transform -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Modal;
