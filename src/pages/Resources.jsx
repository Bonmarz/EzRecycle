import React, { useState } from "react";
import cardboardImg from "../assets/slideshow_pics/cardboard.jpg";
import newspaperImg from "../assets/slideshow_pics/newspaper.jpg";
import paperBagsImg from "../assets/slideshow_pics/paper-bags.jpg";
import plasticBottle from "../assets/slideshow_pics/plastic-bottle.png";
import plasticContainers from "../assets/slideshow_pics/plastic-containers.jpg";
import milkJugs from "../assets/slideshow_pics/milk-jugs.jpg";
import canImg from "../assets/slideshow_pics/can.jpg";
import cans2Img from "../assets/slideshow_pics/cans2.webp";
import glassImg from "../assets/slideshow_pics/glass.png";
import glass2Img from "../assets/slideshow_pics/glass2.webp";
import notRecycle1 from "../assets/slideshow_pics/do-not-recycle.jpg";
import notRecycle2 from "../assets/slideshow_pics/do-not-recycle2.jpg";
import notRecycle3 from "../assets/slideshow_pics/do-not-recycle3.jpg";
import notThrow1 from "../assets/slideshow_pics/do-not-throw-out.webp";
import notThrow2 from "../assets/slideshow_pics/do-not-throw-out2.jpg";
import notThrow3 from "../assets/slideshow_pics/do-not-throwout3.jpg";

function Resources() {
  const paperImages = [cardboardImg, newspaperImg, paperBagsImg];
  const plasticImages = [plasticBottle, plasticContainers, milkJugs];
  const metalImages = [canImg, cans2Img];
  const glassImages = [glassImg, glass2Img];
  const noRecycleImages = [notRecycle1, notRecycle2, notRecycle3];
  const specialRecycleImages = [notThrow1, notThrow2, notThrow3];

  const [slideIndices, setSlideIndices] = useState({});

  const handlePrev = (key, length) => {
    setSlideIndices((prev) => ({
      ...prev,
      [key]: prev[key] > 0 ? prev[key] - 1 : length - 1,
    }));
  };

  const handleNext = (key, length) => {
    setSlideIndices((prev) => ({
      ...prev,
      [key]: prev[key] < length - 1 ? prev[key] + 1 : 0,
    }));
  };

  const cards = [
    {
      title: "📦 Paper/Cardboard",
      desc: "Newspapers, magazines, office paper, cardboard, and paper bags.",
      images: paperImages,
      key: "paper",
    },
    {
      title: "🥤 Plastics",
      desc: "Plastic bottles and jugs, some food containers.",
      images: plasticImages,
      key: "plastic",
    },
    {
      title: "🔩 Metals",
      desc: "Aluminum cans, steel cans, copper pipes, brass fixtures.",
      images: metalImages,
      key: "metals",
    },
    {
      title: "🍾 Glass",
      desc: "Glass bottles and jars.",
      images: glassImages,
      key: "glass",
    },
    {
      title: "🚫 Do NOT Recycle",
      desc: "Plastic bags, styrofoam, greasy paper, disposable cups.",
      images: noRecycleImages,
      key: "noRecycle",
    },
    {
      title: "⚡ Special Recycling",
      desc: "Batteries, paint, electronics, light bulbs, medical waste.",
      images: specialRecycleImages,
      key: "special",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-14 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4 text-center">
          🌱 Recycling Categories
        </h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Get to know what materials are recyclable and how to sort them correctly.
        </p>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {cards.map((item, index) => {
            const [firstWord, ...rest] = item.title.split(" ");
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center"
              >
                <div className="w-full h-40 relative mb-4">
                  <img
                    src={item.images[slideIndices[item.key] || 0]}
                    alt={item.title}
                    className="w-full h-full object-contain rounded"
                  />
                  <button
                    onClick={() => handlePrev(item.key, item.images.length)}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-green-700 px-2 py-1 rounded-l shadow"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => handleNext(item.key, item.images.length)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-green-700 px-2 py-1 rounded-r shadow"
                  >
                    ›
                  </button>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <span className="text-green-600">{firstWord}</span>{" "}
                  {rest.join(" ")}
                </h2>
                <p className="text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
        {/* Tips for Recycling */}  
        <div className="bg-white rounded-2xl shadow-lg p-6 my-16">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">💡</span>
            <h3 className="text-2xl font-bold text-green-700">Tips for Proper Recycling</h3>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a
              href="https://ecomyths.org/myth-you-must-rinse-all-containers-before-recycling-them/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
            >
              Rinse containers before recycling to avoid contamination
            </a>
            <a
              href="https://www.swaco.org/FAQ.aspx?QID=74"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
            >
              Flatten cardboard boxes to save space
            </a>
            <a
              href="https://recyclerightny.recyclist.co/guide/plastic-caps/?embeddedguide=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
            >
              Check local rules about bottle caps
            </a>
            <a
              href="https://sogreenpack.com/post/can-greasy-pizza-boxes-be-recycled-or-composted-a-comprehensive-guide/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
            >
              Don't recycle greasy pizza boxes
            </a>
          </div>
        </div>
        
        {/* Community + NYC Recycling Info */}
        <div className="mt-24 space-y-16">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">🤝</span>
              <h3 className="text-2xl font-bold text-green-700">Community Volunteering</h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
              <a
                href="https://bigreuse.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
              >
                🌍 Big Reuse Opportunities
              </a>
              <a
                href="https://earthmatter.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
              >
                🌱 Earth Matter NYC
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">🏩</span>
              <h3 className="text-2xl font-bold text-green-700">NYC Recycling Info</h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
              <a
                href="https://portal.311.nyc.gov/article/?kanumber=KA-02013"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
              >
                📘 311 Recycling Guide
              </a>
              <a
                href="https://hudsonriverpark.org/recycling-101-in-nyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
              >
                🏖️ Hudson River Park Recycling 101
              </a>
              <a
                href="https://www.nyc.gov/site/dsny/collection/residents/recycling.page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
              >
                🗑️ DSNY Recycling Page
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">🇺🇸</span>
              <h3 className="text-2xl font-bold text-green-700">National Recycling Resources</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[{
                title: "♻️ EPA Recycling Guide",
                link: "https://www.epa.gov/recycle",
                desc: "Tips and rules from the U.S. Environmental Protection Agency."
              }, {
                title: "🔍 Earth911 Search",
                link: "https://search.earth911.com",
                desc: "Find local recycling drop-offs by material or ZIP code."
              }, {
                title: "🛙 Plastic Film Recycling",
                link: "https://www.plasticfilmrecycling.org/recycling-bags-and-wraps/find-drop-off-location/",
                desc: "Grocery bag, shrink wrap, and soft plastic recycling locations."
              }].map((res, idx) => (
                <div key={idx} className="border border-green-100 rounded-xl p-5 bg-green-50 hover:bg-green-100 transition">
                  <h4 className="text-lg font-bold text-green-800 mb-1">{res.title}</h4>
                  <p className="text-sm text-gray-700 mb-2">{res.desc}</p>
                  <a
                    href={res.link}
                    className="text-green-700 underline hover:text-green-900 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Link →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;