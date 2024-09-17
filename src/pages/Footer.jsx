import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom'; // Alias React Router's Link as RouterLink
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-400 py-8 mt-4">
         <div className="border-t border-yellow-400 mb-8"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-lg font-bold mb-2">About Us</h2>
            <p className="text-sm">
              Your go-to source for the latest movies, TV shows, and celebrity news. Stay updated with our reviews and ratings.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-lg font-bold mb-2">Quick Links</h2>
            <ul className='cursor-pointer'>
              <li><ScrollLink to='top-rated' smooth={true}
              duration={500} className="hover:text-yellow-400 text-sm">Top Rated</ScrollLink></li>
              <li><ScrollLink to='upcoming' smooth={true}
              duration={500} className="hover:text-yellow-400 text-sm">Upcoming Releases</ScrollLink></li>
              <li><ScrollLink to='fans favourite' smooth={true}
              duration={500} className="hover:text-yellow-400 text-sm">Fan's favourite</ScrollLink></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-white text-lg font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/imdbindiaofficial/" target='_blank'
               className="text-gray-400 hover:text-yellow-400">
                <FaFacebook size={20} /></a>
              <a href="https://x.com/IMDb?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="text-gray-400 hover:text-yellow-400" target='_blank'>
                <FaTwitter size={20} /></a>
              <a href="https://www.instagram.com/imdb/?hl=en" className="text-gray-400 hover:text-yellow-400" target='_blank'>
                <FaInstagram size={20} /></a>
              <a href="https://www.linkedin.com/company/imdb-com" className="text-gray-400 hover:text-yellow-400" target='_blank'>
                <FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-yellow-400 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your IMDB Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
