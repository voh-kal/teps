import { useState } from "react";
import { User, FileText, FilePen } from 'lucide-react';
import { Search, Menu, X, Icon } from "lucide-react";
import "../css/Nav.css";
import config from "../config/api";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="text-xl font-bold text-purple-600">
          <a href="/"><img src="/teps_logo.svg" alt="TEPS Logo" /></a>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 mx-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-[50px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Right: Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/about" className="text-[#4A4949] hover:text-purple-600 inline-flex items-center space-x-2">
            <User size={15} />
            <span className="font-semibold "> About Us</span>
          </a>
          <a href="/case-studies" className="text-[#4A4949] hover:text-purple-600 inline-flex items-center space-x-2">
            <FileText size={15} />
            <span className="font-semibold "  > Case Studies</span>
          </a>
          <a href="/blog" className="text-[#4A4949] hover:text-purple-600 inline-flex items-center space-x-2">
            <FilePen size={15} />
            <span className="font-semibold "> Blog</span>
          </a>
          <a href={config.getApiUrl(config.endpoints.LOG_IN)} className="text-[#4A4949] hover:text-purple-600 font-semibold">
            Log In
          </a>
          <a href={config.getApiUrl(config.endpoints.SIGN_UP)} className="bg-[#1082df] text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Sign Up
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-[50px] border"
            />
          </div>

          <a href="/about" className="block text-[#4A4949]">About Us</a>
          <a href="/case-studies" className="block text-[#4A4949]">Case Studies</a>
          <a href="/blog" className="block text-[#4A4949]">Blog</a>
          <a href="/log-in" className="block text-[#4A4949]">Log In</a>
          <a href="/sign-up" className="w-full bg-[#1082df] text-white py-2 rounded-full">
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
