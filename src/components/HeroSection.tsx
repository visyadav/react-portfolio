import { useState, useEffect } from 'react'
import exampleImage from '../assets/my-avtar.jpg';
import PortfolioPage from './PortfolioPage';
import Footer from './Footer';

function HeroSection() {

    const textOptions = ["Web Dev.", "Android Dev.", "SQL Database", "Full Stack"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        }, 3000); // Change text every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className="bg-purple-100 text-gray-800">
                <div className="container mx-auto px-6 py-16 md:flex md:items-center">
                    {/* Left Content */}
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Vishwajeet <span className="text-purple-600">Yadav</span><br />
                            <span className="text-purple-800">{textOptions[currentTextIndex]}</span>
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">
                            a passionate software developer with expertise in crafting innovative web and mobile applications. With a strong foundation in .NET, Angular, and Ionic, I specialize in building solutions that blend functionality with elegance. Explore my journey, dive into my projects, and let’s create something extraordinary together!"
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 transition relative group flex items-center justify-center">
                                {/* Text */}
                                <span
                                    className="inline-block transform ml-2 transition-transform duration-300 group-hover:translate-x-0"
                                >
                                    Contact
                                </span>

                                {/* Arrow */}
                                <span
                                    className="ml-2 opacity-0 transition-all duration-300 group-hover:opacity-100  group-hover:translate-x-1 "
                                >
                                    ➔
                                </span>
                            </button>

                            <button className="bg-white text-purple-600 border border-purple-600 font-semibold py-3 px-6 rounded-full hover:bg-purple-100 transition">
                                Watch portfolio
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
                        <div className="relative w-full max-w-sm">
                            <img
                                src={exampleImage} // Replace with your image
                                alt="Hero"
                                className="rounded-lg shadow-2xl"
                            />
                            {/* Accent Background */}
                            <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-t from-purple-400 via-purple-500 to-purple-600 opacity-80"></div>
                        </div>
                        <div className="absolute bottom-8 left-8 text-white bg bg-opacity-60 backdrop-blur-md p-3 rounded-xl">
                            <p className="text-lg font-semibold bg-gradient-to-r from-purple-800 to-purple-400 text-transparent bg-clip-text">
                                Jr Software Developer
                            </p>

                            <p className="text-sm text-purple-500"></p>
                        </div>
                    </div>
                </div>
            </section>
            <PortfolioPage />
            <Footer />
        </>


    );
}

export default HeroSection
