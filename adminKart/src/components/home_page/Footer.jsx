import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] text-[#888] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-2xl font-bold text-blue-600 mb-4">
            DREAM MBBS
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl text-[#aaa]">
            <FaFacebookF className="hover:text-[#42276B] cursor-pointer" />
            <FaInstagram className="hover:text-[#42276B] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#42276B] cursor-pointer" />
            <FaTwitter className="hover:text-[#42276B] cursor-pointer" />
          </div>

          <p className="text-sm mt-6">
           All rights reserved 2025. DREAM MBBS STUDY ABROAD LLP
          </p>
        </div>

        {/* Right Side Links */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          <a href="/about">About Dream MBBS</a>
          <a href="/story">Success Stories</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/refund">Refund policy</a>
          <a href="product-price">Product pricing & description</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/gdrp">GDPR & cookies policy</a>
          <a href="/financial">student financial award policy</a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;

















