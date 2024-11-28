import { AcademicCapIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ButtonNavbar from '../Button-Navbar/buttonNavbar';
import { CardHoverEffectDemo } from '../Footer/card';

function Navbar(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <header className="lg:px-18 h-16 flex items-center mt-3 bg-transparent px-6 md:px-16 py-4 relative z-20 max-w-[90rem] mx-auto justify-between py-10">
        {/* Logo Section */}
        <Link className="flex items-center space-x-2 h-10 w-48" to="#" aria-label="EduHub Home">
          <AcademicCapIcon className="h-6 w-6 text-black dark:text-blue-400" />
          <span className="text-lg font-semibold">EduHub</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden block text-zinc-700 hover:text-zinc-900 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Navigation for Larger Screens */}
        <nav className="items-center hidden md:flex space-x-4 lg:space-x-8">
          {/* <ButtonNavbar text="Home" />
          <ButtonNavbar text="Courses" />
          <ButtonNavbar text="Pricing" />
          <ButtonNavbar text="About" /> */}
          <CardHoverEffectDemo/>
          <button className="rounded-xl bg-zinc-700 text-white font-bold px-6 py-2 hover:bg-zinc-800 transition duration-200 hover:shadow-xl">
            Login
          </button>
        </nav>

        {/* Mobile Menu */}
        {/* {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <ButtonNavbar text="Home" />
            <ButtonNavbar text="Courses" />
            <ButtonNavbar text="Pricing" />
            <ButtonNavbar text="About" />
            <button className="rounded-xl bg-zinc-700 text-white font-bold px-6 py-2 hover:bg-zinc-800 transition duration-200 hover:shadow-xl">
              Login
            </button>
          </nav>
        )} */}
      </header>
    </div>
  );
}

export default Navbar;
