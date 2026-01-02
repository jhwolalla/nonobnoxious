"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SlidePuzzle() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/slide-puzzle-1.png",
    "/images/slide-puzzle-2.png"
    
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="max-w-[1200px] mx-auto mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Game Hub
          </Link>
        </div>

        {/* Game Title */}
        <div className="max-w-[1200px] mx-auto mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-100">
            Non-Obnoxious Slide Puzzle
          </h1>
          <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto flex items-center justify-center">
            <span className="text-3xl">🧩</span>
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-[1200px] mx-auto mb-16">
          <div className="bg-gray-800 hover:bg-gray-700 rounded-lg p-8 transition-colors duration-300 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">About the Game</h2>
            <p className="text-gray-300 leading-relaxed font-bold text-lg">
              Non-Obnoxious games will never inundate you with irritating pop-ups or ads, and will never attempt to hijack your focus.
              In addition, did you know that approximately 50% of slide puzzles CANNOT be solved? Non-Obnoxious Slide Puzzle only generates
              slide puzzles that can be solved with enough work.
            </p>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-100">Game Screenshots</h2>

          <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            {/* Main Image */}
            <div className="relative max-h-[600px] w-full flex justify-center">
              <Image
                src={images[currentImage]}
                alt={`Slide Puzzle screenshot ${currentImage + 1}`}
                width={601}
                height={1306}
                className="object-contain max-h-[600px] w-auto"
                unoptimized
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
            >
              →
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImage ? 'bg-white' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Counter */}
          <div className="text-center mt-4 text-gray-400">
            {currentImage + 1} of {images.length}
          </div>
        </div>
      </main>
    </div>
  );
}
