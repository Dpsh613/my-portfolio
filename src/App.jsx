import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Using the updated Contact component

const App = () => {
  return (
    // Consider adding overflow-x-hidden if needed, but usually not required
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {" "}
        {/* Wrap main content sections */}
        <Hero />
        <Projects />
        <Contact />
      </main>
      {/* Add a Footer component here if desired */}
    </div>
  );
};

export default App;
