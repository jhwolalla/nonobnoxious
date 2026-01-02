import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-16">
        {/* Centered Banner */}
        <div className="max-w-[1200px] mx-auto mb-16">
          <Image
            className="w-full rounded-lg shadow-lg"
            src="/images/TOPBANNER.png"
            alt="Game Hub Banner"
            width={1200}
            height={400}
            priority
            unoptimized
          />
        </div>

        {/* Games Section */}
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
            Our (Non-Obnoxious!) Games
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Game 1 */}
            <a
              href="/slide-puzzle"
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src="/images/slidethumb.jpg"
                    alt="Slide Puzzle Thumbnail"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Slide Puzzle</h3>
                <hr className="mb-4 border-gray-600 w-full" />
                <p className="text-gray-300 text-lg leading-relaxed">Chizallenge your mind with a simple sliding tile puzzle. Unlike other slide puzzles, this one only generates layouts that can be solved. Isn't that non-obnoxious?</p>
              </div>
            </a>

            {/* Game 2 */}
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">[COMING SOON]</h3>
                <p className="text-gray-400">Watch this space!</p>
              </div>
            </a>

            {/* Game 3 */}
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">[COMING SOON]</h3>
                <p className="text-gray-400">Watch this space!</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
