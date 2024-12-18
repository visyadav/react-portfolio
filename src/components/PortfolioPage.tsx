import React from 'react'

const portfolioItems = [
    { title: "GMAIL", category: "PHONE APP", img: "./public/work page.jpg" },
    { title: "CLOCKWORK", category: "PHONE APP/WEBSITE", img: "./public/dem-2.jpg" },
    { title: "POWER POSE", category: "POSTER PRINT", img: "./public/dem-3.jpg" },
    { title: "PIONEER", category: "PHONE APP/WEBSITE", img: "https://via.placeholder.com/150" },
    { title: "GAME OF CONTACT", category: "CONCEPT", img: "https://via.placeholder.com/150" },
    { title: "GET OFF CONTACT", category: "WEBSITE", img: "https://via.placeholder.com/150" },
    { title: "WELLGOR", category: "WEBSITE/APP DESIGN", img: "https://via.placeholder.com/150" },
    { title: "TWEEK", category: "DESKTOP APP/WEBSITE", img: "https://via.placeholder.com/150" },
    { title: "APP DESIGN", category: "APP DESIGN", img: "https://via.placeholder.com/150" },
    { title: "INBOX", category: "WEBSITE/APP DESIGN", img: "https://via.placeholder.com/150" },
  ];


function PortfolioPage() {
    return (
        <>
            

            <div className="bg-purple-100 text-white min-h-screen">
            <div className="h-1 bg-purple-800 rounded-full mx-4"></div>
          {/* Header */}
          <header className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-900 to-purple-400 text-transparent bg-clip-text">PORTFOLIO</h1>
            <p className="text-purple-400 mt-4">
              GRAPHIC DESIGN / WEB DESIGN / ICONS / ILLUSTRATIONS BY VISHWAJEET YADAV
            </p>
          </header>
    
          {/* Portfolio Grid */}
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-12">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="relative bg-purple-400 rounded-2xl p-2 group transition-transform transform hover:scale-105 ease-in-out"
              >
                {/* Image */}
                <div className="w-full h-48 overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition duration-500"
                  />
                </div>
                {/* Title */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-purple-300 text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
    
          {/* Footer */}
          <footer className="text-center py-4 text-gray-500">
            Designed by Vishwajeet Yadav | © 2024
          </footer>
        </div>
        </>
        
      );
}

export default PortfolioPage
