
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products from './products.json';

function Home() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [randomServices, setRandomServices] = useState([]);

    // Randomize and select 6 services
    useEffect(() => {
        const shuffled = products.sort(() => 0.5 - Math.random());
        setRandomServices(shuffled.slice(0, 6));
    }, []);
    // Array of image filenames
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

    // Array of motivational quotes for programmers
    const quotes = [
        "Code is craft.",
        "Write for humans.",
        "Simple is better.",
        "Solve, then code.",
        "Bugs teach wisdom.",
        "Solve the right problem.",
        "No error is best."
    ];
    
    // axios.defaults.withCredentials = true;
    // useEffect(() => {
    //     axios.get('http://localhost:3000/auth/verify').then(res => {
    //         if (!res.data.status) {
    //             navigate('/');
    //         }
    //         console.log(res.data.message);
    //         localStorage.setItem('auth', res.data.message);
    //     });
    // }, [navigate]);

    // Automatic slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    // Randomize quote based on current index
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div>
            <div className="w-full h-screen ">
                <div className='w-full h-full relative overflow-hidden'>
                    {/* Background images */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {/* Background Image */}
                        <img
                            src={`/images/${image}`} // Path to your images
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                    </div>
                ))}

                {/* Centered Motivational Quote */}
                <div className="absolute inset-0 flex items-center justify-center text-center w-full">
                    <div className="text-white absolute mx-10 bottom-32">
                        <p className="bg-black/60 p-1 rounded-lg text-sm lg:text-4xl font-bold">{randomQuote}</p>
                    </div>
                </div>
                </div>
            </div>

            <div className='w-full flex items-center justify-center my-10 lg:my-20'>
                <div className='w-4/5 flex flex-col gap-5'>
                    <h1 className='text-lg lg:text-2xl font-bold'>
                        Welcome to CuztomizeIT
                    </h1>
                    <p className='text-xs lg:text-sm line-clamp-4'>
                        At CuztomizeIT, we specialize in crafting exceptional digital experiences that empower your business to grow and succeed. From sleek, responsive websites to cutting-edge mobile apps, we offer a wide range of solutions designed to meet your unique needs and goals.

                        Whether you're looking to launch a new platform, streamline your operations, or enhance user engagement, our team of experts is here to guide you through every step of the process. With a focus on quality, innovation, and customer satisfaction, we deliver custom projects that not only perform flawlessly but also drive real results.

                        Explore our services, discover how we can transform your ideas into reality, and let’s build something great together.
                    </p>
                    <div className='flex items-center justify-center mt-5'>
                        <Link to={'/shop'} className='bg-[#333333] flex flex-row items-center justify-center gap-1 text-white text-[10px] lg:text-xs font-bold px-4 lg:px-6 py-2 rounded-md shadow-md'>
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="size-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center my-10 lg:my-20">
                <div className="w-4/5 flex flex-col gap-5">
                    <h1 className="text-lg font-bold">Services</h1>
                    <div className="flex flex-col lg:flex-row gap-10 justify-center">
                        {randomServices.map((service, index) => (
                            <div
                                key={index}
                                className="w-full lg:w-1/4 flex flex-col items-center space-y-2"
                            >
                                <img
                                    src={service.image} // Path from JSON
                                    alt={service.name}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <p className="text-xs font-bold">{service.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <Link
                            to={'/shop'}
                            className="bg-[#333333] flex flex-row items-center justify-center gap-1 text-white text-[10px] lg:text-xs font-bold px-4 lg:px-6 py-2 rounded-md shadow-md"
                        >
                            See More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="4"
                                stroke="currentColor"
                                className="size-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
