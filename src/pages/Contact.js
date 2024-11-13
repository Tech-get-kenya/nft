import React from 'react';

const Contact = () => {
    return (
        <div className="p-6 text-center text-gray-800">
            {/* Contact Heading */}
            <section className="bg-gray-800 text-white py-20">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg">We're here to help. Reach out to us with any questions or inquiries.</p>
            </section>

            {/* Contact Information Section */}
            <section className="bg-blue-500 text-white py-20 px-10">
                <h2 className="text-3xl font-bold mb-4">Our Contact Information</h2>
                <p className="text-lg mb-2">Email: support@nftmarketplace.com</p>
                <p className="text-lg mb-2">Phone: +123 456 7890</p>
                <p className="text-lg">Address: 123 NFT Street, Digital City, Web 3.0</p>
            </section>

            {/* Contact Form Section */}
            <section className="bg-gray-800 text-white py-20 px-10">
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
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
