import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
    const navigate = useNavigate();

    const handleBuyNow = (product) => {
        navigate('/product-detail', { state: { product } });
    };

    const products = Array.from({ length: 9 }).map((_, index) => ({
        id: index + 1,
        name: `Item #${index + 1}`,
        image: '/Original.png',
        description: 'A brief description of this featured item.',
    }));

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            <main className="flex-1 p-6 md:p-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">Featured Items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                                <button
                                    onClick={() => handleBuyNow(product)}
                                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
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
