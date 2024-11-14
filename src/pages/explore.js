import React from 'react';

const ExplorePage = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-full md:w-1/4 bg-white p-6 md:pt-16 border-r border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore</h2>

                {/* Search */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search items"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Filters */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Filters</h3>
                    <div className="space-y-2">
                        <button className="w-full text-left text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 focus:bg-gray-200">Category</button>
                        <button className="w-full text-left text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 focus:bg-gray-200">Price Range</button>
                        <button className="w-full text-left text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 focus:bg-gray-200">Newest Arrivals</button>
                    </div>
                </div>

                {/* Sort Options */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Sort By</h3>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Most Popular</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest</option>
                    </select>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">Featured Items</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example Item */}
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="/Original.png" alt="Item" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Item #{index + 1}</h3>
                                <p className="text-gray-600 text-sm mb-4">A brief description of this featured item.</p>
                                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ExplorePage;
