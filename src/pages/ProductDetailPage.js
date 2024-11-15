import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetailPage = () => {
    const location = useLocation();
    const { product } = location.state || {};

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl">

                {/* Image section */}
                <div className="relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                    />
                </div>

                {/* Title with background color */}
                <div className="bg-blue-600 p-4">
                    <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                </div>

                {/* Long Description and Buttons */}
                <div className="p-6">
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Suspendisse potenti. Duis ultricies justo eu quam fermentum, non euismod erat consectetur. Ut facilisis ligula vel suscipit auctor. Duis sagittis risus a nisi malesuada, et dapibus justo cursus. Sed posuere velit sit amet est efficitur, at sollicitudin metus iaculis.
                    </p>

                    <div className="flex justify-between">
                        <button className="w-1/2 bg-blue-500 text-white py-3 rounded-lg mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Buy Now
                        </button>
                        <button className="w-1/2 bg-gray-300 text-gray-700 py-3 rounded-lg ml-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                            Save for Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
