import React from 'react';

const Contact = () => {
    return (
        <div className=" text-center text-gray-800">
            {/* Contact Heading */}
            <section className="bg-gray-800 text-white py-20 w-full">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg">We're here to help. Reach out to us with any questions or inquiries.</p>
            </section>

            {/* Contact Information Section */}
            <section className="bg-blue-500 text-white py-20 w-full">
                <h2 className="text-3xl font-bold mb-4">Our Contact Information</h2>
                <p className="text-lg mb-2">Email: support@nftmarketplace.com</p>
                <p className="text-lg mb-2">Phone: +254 7960 0040 50</p>
                <p className="text-lg">Address: 123 NFT Street, Digital City, Web 3.0</p>
            </section>

            {/* Contact Form Section */}
            <section className="bg-gray-800 text-white py-20 w-full">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 rounded-md text-gray-800"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 rounded-md text-gray-800"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full p-3 rounded-md text-gray-800"
                            rows="5"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                        Send Message
                    </button>
                </form>
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

export default Contact;
