import React from "react";

const SkeletonLoader = () => {
  const skeletonItems = Array(10).fill(0); // Adjust this number based on how many loaders you want to show.

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:py-10 pb-10 md:px-20 px-10">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="animate-pulse relative col-span-1 flex flex-col items-start bg-gray-200 border-2 border-gray-300 rounded-[12px] px-6 py-4"
        >
          <div className="h-6 w-1/2 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 w-1/3 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded-md mb-4"></div>
          <div className="absolute right-0 top-0 m-1">
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;