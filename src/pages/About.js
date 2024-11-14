import React from 'react';

const About = () => {
    return (
        <div className="text-center text-gray-800">
            {/* Main Heading */}
            <section className="bg-gray-800 text-white py-20 w-full">
                <h1 className="text-4xl font-bold mb-4">About Mark ii Marketplace</h1>
                <p className="text-lg">
                    Welcome to the Mark ii NFT marketplace where we provide trending and well
                    connected marketplace in the blockchain space powered with our secure payment
                    and storage system.
                </p>
            </section>

            {/* Mission Section */}
            <section className="bg-blue-500 text-white py-20 w-full">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-6">
                    We aim to empower artists by providing a platform to showcase, trade, and grow their digital
                    creations.
                </p>
            </section>

            {/* Team Section */}
            <section className="bg-gray-800 text-white py-20 w-full">
                <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
                <p className="text-lg mb-6">
                    Our team is passionate about art, technology, and innovation. We strive to bring you the best
                    digital art marketplace experience.
                </p>
            </section>

            {/* Vision Section */}
            <section className="bg-blue-500 text-white py-20 w-full">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg mb-6">
                    We envision a future where digital art is recognized, celebrated, and traded on a global scale.
                </p>
            </section>

            {/*Footer*/}
            <section className="bg-gray-800 text-white py-20 w-full">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
                    <p className="text-lg mb-6">
                        Our team is passionate about art, technology, and innovation. We strive to bring you the best
                        digital art marketplace experience.
                    </p>
                    <div className="flex justify-center space-x-8 mb-6">
                        <a href="/about" className="text-lg hover:text-gray-400">About Us</a>
                        <a href="/contact" className="text-lg hover:text-gray-400">Contact</a>
                        <a href="#" className="text-lg hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="text-lg hover:text-gray-400">Terms of Service</a>
                    </div>
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="https://x.com/techgetafrica" className="text-lg hover:text-gray-400">Facebook</a>
                        <a href="https://x.com/techgetafrica" className="text-lg hover:text-gray-400">Twitter</a>
                        <a href="https://x.com/techgetafrica" className="text-lg hover:text-gray-400">Instagram</a>
                        <a href="https://x.com/techgetafrica" className="text-lg hover:text-gray-400">LinkedIn</a>
                    </div>
                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <p className="text-sm text-gray-400">&copy; 2024 Techgetafrica. All rights reserved.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
