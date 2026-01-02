"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AdventureQuest() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/adventure-quest-1.png",
    "/adventure-quest-2.png",
    "/adventure-quest-3.png"
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
            Adventure Quest
          </h1>
          <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto flex items-center justify-center">
            <span className="text-3xl">🎮</span>
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-[1200px] mx-auto mb-16">
          <div className="bg-gray-800 hover:bg-gray-700 rounded-lg p-8 transition-colors duration-300 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">About the Game</h2>
            <p className="text-gray-300 leading-relaxed">
              Embark on an epic journey through mystical lands filled with ancient ruins, treacherous dungeons, and legendary creatures.
              As a brave adventurer, you'll explore vast landscapes, solve challenging puzzles, and battle formidable foes.
              Choose your path wisely, as every decision shapes your destiny in this immersive role-playing experience.
              Discover hidden treasures, forge alliances with mythical beings, and uncover the secrets of a forgotten civilization.
            </p>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-100">Game Screenshots</h2>

          <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            {/* Main Image */}
            <div className="relative h-96">
              <Image
                src={images[currentImage]}
                alt={`Adventure Quest screenshot ${currentImage + 1}`}
                fill
                className="object-cover"
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

