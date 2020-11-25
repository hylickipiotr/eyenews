import React from "react";

const PostSkeleton: React.FC = () => {
  return (
    <div className="relative col-span-2 md:col-span-3 lg:col-span-4 border border-gray-200 bg-gray-50 rounded-md shadow-sm overflow-hidden">
      <div className="animate-pulse">
        <div className="relative">
          <div className="relative aspect-ratio-21/9">
            <div className="absolute w-full h-full bg-gray-200" />
          </div>
        </div>
        <div className="p-6 pb-16">
          <div className="h-6 bg-gray-200 rounded-sm" />
          <div className="flex flex-col space-y-2 mt-6">
            <div className="h-3 bg-gray-200 rounded-sm" />
            <div className="h-3 bg-gray-200 rounded-sm" />
            <div className="h-3 bg-gray-200 rounded-sm" />
            <div className="w-1/4 h-3 bg-gray-200 rounded-sm" />
          </div>
          <div className="mt-8 w-3/5 h-2 bg-gray-200 rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
