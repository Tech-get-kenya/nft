import React from 'react';

const About = () => {
    return (
        <div className="p-6 text-center text-gray-800">
            {/* Main Heading */}
            <section className="bg-gray-800 text-white py-20">
                <h1 className="text-4xl font-bold mb-4">About Our NFT Marketplace</h1>
                <p className="text-lg">
                    Discover the story behind our NFT platform and our commitment to digital art and blockchain technology.
                </p>
            </section>

            {/* Mission Section */}
            <section className="bg-blue-500 text-white py-20 px-10">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-6">
                    We aim to empower artists by providing a platform to showcase, trade, and grow their digital creations.
                </p>
            </section>

            {/* Team Section */}
            <section className="bg-gray-800 text-white py-20 px-10">
                <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
                <p className="text-lg mb-6">
                    Our team is passionate about art, technology, and innovation. We strive to bring you the best digital art marketplace experience.
                </p>
            </section>

            {/* Vision Section */}
            <section className="bg-blue-500 text-white py-20 px-10">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg mb-6">
                    We envision a future where digital art is recognized, celebrated, and traded on a global scale.
                </p>
            </section>
        </div>
    );
};

export default About;
