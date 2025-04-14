// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center bg-blue-50 p-4"
    >
      {/* Added id for potential navigation and padding */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Daze</h2>
        <p className="text-lg md:text-xl text-gray-700">
          A passionate frontend developer.
        </p>
        {/* Maybe add a call to action button? */}
      </div>
    </section>
  );
};

export default Hero;
