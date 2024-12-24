import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-purple-700 text-white py-6">
                <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">Your Company</h3>
                        <p className="text-sm">© 2024 All Rights Reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-purple-300">Privacy Policy</a>
                        <a href="#" className="hover:text-purple-300">Terms of Service</a>
                        <a href="#" className="hover:text-purple-300">Contact Us</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
