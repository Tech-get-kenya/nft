import React from 'react';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Blue Section */}
            <div className="bg-blue-500 text-white py-20 text-center">
                <h1 className="text-4xl font-bold">NFT Marketplace</h1>
                <p className="text-lg mt-2">Discover, collect, and sell extraordinary NFTs</p>
            </div>

            {/* Purple Section */}
            <div className="bg-purple-500 text-white py-16 px-4 text-center rounded-lg shadow-lg mx-auto mt-8 max-w-lg">
                <h2 className="text-3xl font-bold">Discover Unique Digital Art</h2>
                <p className="text-lg mt-2">Buy, sell, and explore limited-edition digital art from top creators.</p>
                <button className="mt-4 px-6 py-2 bg-white text-purple-500 font-semibold rounded hover:bg-purple-100">
                    Explore Collections
                </button>
            </div>

            {/* Featured NFTs Section */}
            <div className="py-16 px-8">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Featured NFTs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* NFT Placeholder Card */}
                    <div className="bg-gray-300 rounded-lg h-60 flex items-center justify-center text-gray-500">
                        <p>400 x 400</p>
                    </div>
                    <div className="bg-gray-300 rounded-lg h-60 flex items-center justify-center text-gray-500">
                        <p>400 x 400</p>
                    </div>
                    <div className="bg-gray-300 rounded-lg h-60 flex items-center justify-center text-gray-500">
                        <p>400 x 400</p>
                    </div>
                </div>
            </div>
            {

            }

        </div>


    );
};

export default Homepage;
