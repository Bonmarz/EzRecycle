import React, { useState } from "react";
import about from "../assets/slideshow_pics/about.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-5xl font-extrabold text-center text-green-700 mb-4">
          About Us
        </h1>

        <img
          src={about}
          alt="About EzRecycle"
          className="w-full h-auto rounded-xl mb-6 shadow"
        />

        <p className="text-lg text-gray-700 mb-4 text-center">
          At <strong className="text-green-700">EzRecycle</strong>, we’re on a mission to make recycling easier,
          smarter, and more accessible for everyone. Our platform is designed to
          empower individuals and communities with the knowledge and tools they
          need to recycle effectively and live more sustainably.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-center">
          We provide clear, practical resources on how to recycle everyday
          items whether you're figuring out what to do with an old laptop or how
          to properly dispose of plastic containers. Our site features interactive
          tools like recycling guides, and up-to-date information on local
          recycling laws and drop-off locations.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Beyond education, we strive to build a community that takes action. Users
          can find and share local volunteer opportunities, sustainability events,
          and even connect with businesses that support green initiatives. Whether
          you're a resident looking for NYC-specific recycling info or a business
          wanting to host a recycling drive, <strong className="text-green-700">EzRecycle</strong> is here to help.
        </p>
        <p className="text-lg text-gray-700 text-center">
          Together, let’s make our planet cleaner, greener, and safer—one recycled
          item at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
