import React from "react";

const Navbar: React.FC = ({}) => {
  return (
    <div className="fixed flex w-full justify-center items-center py-4 px-4 lg:px-8 bg-white shadow-md z-50">
      <div className="font-bold text-xl lg:text-4xl">
        <span className="text-red-500">Eye</span>
        <span className="text-gray-800">News</span>
      </div>
    </div>
  );
};

export default Navbar;
