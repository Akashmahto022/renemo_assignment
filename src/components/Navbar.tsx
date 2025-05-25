'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow">
            <div className="flex justify-between items-center mx-4 md:mx-10 py-2">
                <div>
                    <Link href={"/"}>
                    <Image src={"/images/logo.jpg"} alt='logo' width={140} height={20} className='cursor-pointer'/>
                    </Link>
                </div>
                {/* Hamburger menu for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                            )}
                        </svg>
                    </button>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className='flex justify-center items-center cursor-pointer gap-10 text-gray-800'>
                        <Link href={"/"}>
                            <li className="hover:text-blue-600 transition-colors">Home</li>
                        </Link>
                        <Link href={"/events"}>
                            <li className="hover:text-blue-600 transition-colors">Events</li>
                        </Link>
                        <Link href={"/admin"}>
                            <li className="hover:text-blue-600 transition-colors">Admin</li>
                        </Link>
                        <Link href={"/contact"}>
                            <li className="hover:text-blue-600 transition-colors">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <span className='cursor-pointer p-4 border-2 border-gray-400 hover:border-black rounded-full'>Sign-in</span>
                </div>
            </div>
            {/* Mobile Menu with animation */}
            <div
                className={`
                    fixed top-0 left-0 w-full z-50
                    transition-transform duration-300 ease-in-out
                    bg-white shadow
                    ${menuOpen ? 'translate-y-0' : '-translate-y-full'}
                    md:hidden
                `}
                style={{ willChange: 'transform' }}
            >
                <div className="flex justify-end px-4 pt-4">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="focus:outline-none"
                        aria-label="Close Menu"
                    >
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className='flex flex-col gap-4 text-gray-800 px-4 pb-6 pt-2'>
                    <Link href={"/"} onClick={() => setMenuOpen(false)}>
                        <li className="hover:text-blue-600 transition-colors">Home</li>
                    </Link>
                    <Link href={"/events"} onClick={() => setMenuOpen(false)}>
                        <li className="hover:text-blue-600 transition-colors">Events</li>
                    </Link>
                    <Link href={"/admin"} onClick={() => setMenuOpen(false)}>
                        <li className="hover:text-blue-600 transition-colors">Admin</li>
                    </Link>
                    <Link href={"/contact"} onClick={() => setMenuOpen(false)}>
                        <li className="hover:text-blue-600 transition-colors">Contact</li>
                    </Link>
                    <li>
                        <span className='cursor-pointer p-4 border-2 border-gray-400 hover:border-black rounded-full block text-center mt-2'>Sign-in</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar