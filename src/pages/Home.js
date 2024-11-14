import React from 'react';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-blue-500 text-white py-20 text-center">
                <h1 className="text-4xl font-bold">Mark ii NFT Marketplace</h1>
                <p className="text-lg mt-2">Discover, collect, and sell extraordinary NFTs</p>
            </div>

            {/* Explore Section */}
            <div className="bg-purple-500 text-white py-16 px-4 text-center rounded-lg shadow-lg mx-auto mt-8 max-w-lg">
                <h2 className="text-3xl font-bold">Discover Unique Digital Art</h2>
                <p className="text-lg mt-2">Buy, sell, and explore limited-edition digital art from top creators around the world.</p>
                <button className="mt-4 px-6 py-2 bg-white text-purple-500 font-semibold rounded hover:bg-purple-100">
                    Explore Collections
                </button>
            </div>

            {/* Featured NFTs Section */}
            <div className="py-16 px-8">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Featured NFTs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* NFT Cards */}
                    {["NFT 1", "NFT 2", "NFT 3"].map((title, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="/Original.png" alt={title} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <p className="text-gray-600 text-sm mb-4">An innovative piece that blends art and technology.</p>
                                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How It Works Section */}
            <section className="bg-white py-16 px-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">How It Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Sign Up", description: "Create an account and set up your profile." },
                        { title: "Explore Art", description: "Browse a variety of NFTs available for sale." },
                        { title: "Buy or Sell", description: "Buy your favorite pieces or list your own." }
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-8 shadow-lg">
                            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Top Creators Section */}
            <section className="bg-gray-200 py-16 px-8">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Top Creators</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Reagan Enoch O.", "Alice mark A.", "Jackson Mark E."].map((creator, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center">
                            <img src="/Original.png" alt={creator} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                            <h4 className="text-xl font-semibold">{creator}</h4>
                            <p className="text-gray-600 text-sm">Specializes in digital art and 3D animation.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-16 px-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">What Our Users Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Alice", text: "Amazing platform! Found the perfect NFT for my collection." },
                        { name: "Bob", text: "Love the variety and quality of art available here." },
                        { name: "Charlie", text: "Easy to use and a great place to connect with other artists." }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-lg">
                            <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6">Subscribe to our newsletter for the latest news and exclusive offers.</p>
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded text-gray-800"/>
                <button className="ml-2 px-6 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100">
                    Subscribe
                </button>
            </section>

            {/* Footer */}
            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
                    <p className="text-lg mb-6">Our team is passionate about art, technology, and innovation.</p>
                    <div className="flex justify-center space-x-8 mb-6">
                        <a href="/about" className="text-lg hover:text-gray-400">About Us</a>
                        <a href="/contact" className="text-lg hover:text-gray-400">Contact</a>
                        <a href="#" className="text-lg hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="text-lg hover:text-gray-400">Terms of Service</a>
                    </div>
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="https://facebook.com" className="text-lg hover:text-gray-400">Facebook</a>
                        <a href="https://twitter.com" className="text-lg hover:text-gray-400">Twitter</a>
                        <a href="https://instagram.com" className="text-lg hover:text-gray-400">Instagram</a>
                        <a href="https://linkedin.com" className="text-lg hover:text-gray-400">LinkedIn</a>
                    </div>
                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <p className="text-sm text-gray-400">&copy; 2024 Mark ii NFT Marketplace. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
