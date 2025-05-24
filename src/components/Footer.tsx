import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-white py-4 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <span className="text-sm">&copy; {new Date().getFullYear()} Remedo Events. All rights reserved.</span>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer