import avtarImage from '../assets/my-avtar.jpg';
import bgImage from '../assets/about-wallpaper.jpg'
import Footer from './Footer';
import Ribbon from './Ribbon';
function About() {
    return (
        <>
            <section className="bg-white">
                <div className="relative">
                    {/* Top Section with background image and purple overlay */}
                    <div className="relative bg-cover bg-center h-60 flex items-center justify-center" style={{ backgroundImage: `url(${bgImage})` }}>
                        <div className="absolute inset-0 bg-purple-500 opacity-50"></div> {/* Purple overlay with opacity */}
                        <div className="absolute top-1/2 mt-20 transform -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
                            <img
                                src={avtarImage} // Replace with your image URL
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="text-center mt-20 px-4">
                        <h2 className="text-2xl font-light">
                            VISHWAJEET <span className="font-bold text-purple-600">YADAV</span>
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Crafting seamless user experiences while building robust backends—bridging the gap between ideas and reality, one line of code at a time.
                        </p>
                        <button className="mt-6 text-sm font-medium text-black underline hover:text-purple-800">
                            READ MORE
                        </button>
                    </div>
                </div>
            </section>
            <div className='mt-5'>
                <Ribbon />
            </div>
            <div className="h-1 bg-purple-800 rounded-full"></div>
            <Footer />
        </>
    )
}

export default About
