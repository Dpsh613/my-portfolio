import React from "react";

const Header = () => {
  return (
    <header className="p-4 shadow-md sticky top-0 bg-white z-50">
      {/* Consider adding a container mx-auto px-4 for max width on larger screens */}
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      {/* Add navigation links here if needed */}
    </header>
  );
};

export default Header;
