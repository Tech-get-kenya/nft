import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-center">
                <ul className="flex space-x-8 text-white font-semibold">
                    <li>
                        <Link to="/" className="hover:text-blue-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-400">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
