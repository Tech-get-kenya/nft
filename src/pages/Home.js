import React from 'react';

const Home = () => {
    return (
            <main className="w-full flex flex-col items-center mt-10">
                {/* Header Section */}
                <header className="w-full bg-blue-600 text-white text-center py-10 px-6">
                    <h1 className="text-4xl font-bold">NFT Marketplace</h1>
                    <p className="mt-4 text-lg">Discover, collect, and sell extraordinary NFTs</p>
                </header>

                {/* Hero Section */}
                <section className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-10 text-white my-10 max-w-3xl">
                    <h2 className="text-3xl font-bold">Discover Unique Digital Art</h2>
                    <p className="text-lg mt-2">Buy, sell, and explore limited-edition digital art from top creators.</p>
                    <button className="mt-6 bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100">
                        Explore Collections
                    </button>
                </section>

                {/* Featured NFTs */}
                <section className="max-w-6xl w-full px-6 mb-10">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Featured NFTs</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* NFT Cards */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center">
                                <img src="https://via.placeholder.com/400" alt={`NFT Artwork #${item}`} className="w-full h-48 object-cover" />
                                <div className="p-4 text-center">
                                    <h4 className="text-xl font-semibold">NFT Artwork #{item}</h4>
                                    <p className="text-gray-600 mt-1">Artist Name</p>
                                    <p className="text-purple-600 font-bold mt-2">2.5 ETH</p>
                                    <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
    );
};

export default Home;
