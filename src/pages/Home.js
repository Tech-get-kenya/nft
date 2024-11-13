import React from 'react';



const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Blue Section */}
            <div className="bg-blue-500 text-white py-20 text-center">
                <h1 className="text-4xl font-bold">Mark ii NFT Marketplace</h1>
                <p className="text-lg mt-2">Discover, collect, and sell extraordinary NFTs</p>
            </div>

            {/* Purple Section */}
            <div className="bg-purple-500 text-white py-16 px-4 text-center rounded-lg shadow-lg mx-auto mt-8 max-w-lg">
                <h2 className="text-3xl font-bold">Discover Unique Digital Art</h2>
                <p className="text-lg mt-2">Buy, sell, and explore limited-edition digital art from top creators around
                    the world.</p>
                <button className="mt-4 px-6 py-2 bg-white text-purple-500 font-semibold rounded hover:bg-purple-100">
                    Explore Collections
                </button>
            </div>


            {/* Featured NFTs Section */}

            <div className="py-16 px-8">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Featured NFTs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* NFT Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/src/images/Original.png" alt="NFT 1" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <p className="text-gray-600 text-sm mb-4">A unique digital art piece that captures the essence of modern creativity.</p>
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* NFT Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/src/images/Original.png" alt="NFT 2" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <p className="text-gray-600 text-sm mb-4">A breathtaking visual experience blending art and technology.</p>
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* NFT Card 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/src/images/Original.png" alt="NFT 3" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <p className="text-gray-600 text-sm mb-4">An innovative design that explores new horizons in digital art.</p>
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            {/*Footer*/}
            <section className="bg-gray-800 text-white py-20 w-full">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
                    <p className="text-lg mb-6">
                        Our team is passionate about art, technology, and innovation. We strive to bring you the best
                        digital art marketplace experience.
                    </p>
                    <div className="flex justify-center space-x-8 mb-6">
                        <a href="#" className="text-lg hover:text-gray-400">About Us</a>
                        <a href="#" className="text-lg hover:text-gray-400">Contact</a>
                        <a href="#" className="text-lg hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="text-lg hover:text-gray-400">Terms of Service</a>
                    </div>
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="#" className="text-lg hover:text-gray-400">Facebook</a>
                        <a href="#" className="text-lg hover:text-gray-400">Twitter</a>
                        <a href="#" className="text-lg hover:text-gray-400">Instagram</a>
                        <a href="#" className="text-lg hover:text-gray-400">LinkedIn</a>
                    </div>
                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <p className="text-sm text-gray-400">&copy; 2024 Techgetafrica. All rights reserved.</p>
                    </div>
                </div>
            </section>

        </div>


    );
};

export default Homepage;
