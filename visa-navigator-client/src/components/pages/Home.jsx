import { useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import VisaCardGridView from '../AllVisas/VisaCardGridView';

const Home = () => {
    const visas = useLoaderData();

    // Get the most recent six visas
    const recentVisas = visas ? visas.slice(0, 6) : [];

    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="winter" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co/smGF4Ld/winter.jpg"
                        className="w-full object-cover" />
                </div>
                <div id="summer" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co/9pyNdCR/summer.jpg"
                        className="w-full object-cover" />
                </div>
                <div id="spring" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co/zQM7m1j/spring.jpg"
                        className="w-full object-cover" />
                </div>
                <div id="fall" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co/QjW8LYg/fall.jpg"
                        className="w-full object-cover" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#winter" className="btn text-red-600 btn-xs">1</a>
                <a href="#summer" className="btn text-red-600 btn-xs">2</a>
                <a href="#spring" className="btn text-red-600 btn-xs">3</a>
                <a href="#fall" className="btn text-red-600 btn-xs">4</a>
            </div>

            {/* Recent Visa Section */}
            <div className="md:mt-20 md:mb-40 mt-[250px]">
            <h1 className="text-4xl text-center font-bold mb-4">
                    Recent Visa @ <span className="text-red-600">Visa Navigator</span>
                </h1>
                {recentVisas && recentVisas.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-3 grid-cols-1 md:h-screen">
                        {recentVisas.map(visa => (
                            <VisaCardGridView key={visa._id} visa={visa}></VisaCardGridView>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-screen">
                        <div className="text-center p-10 bg-white shadow-md rounded-lg">
                            <h2 className="text-xl font-bold text-red-600">No Data Available</h2>
                            <p className="text-gray-500 mt-2">
                                Please refresh/check again later. Thank you.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Typewriter Section */}
            <div className="text-center my-10">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to <span className="text-red-600">Visa Navigator</span>
                </h1>
                <p className="text-xl text-gray-700">
                    <Typewriter
                        words={[
                            'Your guide to international opportunities 🌍',
                            'Effortless visa tracking and updates ✈️',
                            'Simplify your travel planning today 🧳',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={30}
                        delaySpeed={1000}
                    />
                </p>
            </div>

            {/* Subscribe Now Section */}
            <div className="bg-white shadow-md bg-base-200 py-10">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">Stay Updated!</h2>
                    <p className="text-gray-600">Subscribe to our newsletter and never miss an update.</p>
                </div>
                <div className="flex justify-center">
                    <form className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-red-600"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-200"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;