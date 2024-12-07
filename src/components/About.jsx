import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full h-screen bg-[#ffffff]'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-4/6 flex flex-col items-center justify-center gap-5 lg:gap-10'>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
            <div className='lg:w-3/5 flex flex-col gap-5'>
              <h1 className='text-lg lg:text-4xl font-bold'>About Us</h1>

              {/* Description with line-clamp and toggle functionality */}
              <p className={`text-xs font-normal ${isExpanded ? '' : 'line-clamp-6'}`}>
                At CuztomizeIT, we specialize in delivering high-quality digital solutions that empower businesses across industries. From custom websites to mobile apps, we create user-centric, innovative, and scalable systems that drive real impact.

Our team of expert developers, designers, and project managers works closely with clients to deliver tailored solutions that exceed expectations. Whether you need a website, mobile app, or system integration, we ensure functional, engaging, and efficient results.

With a focus on quality, transparency, and customer satisfaction, we build long-lasting partnerships to help your business thrive in the digital world.

Let us bring your ideas to life and elevate your digital presence.
              </p>

              {/* See More / See Less Button */}
              <button
                onClick={toggleDescription}
                className='text-xs text-blue-500 underline mt-2'>
                {isExpanded ? 'See Less' : 'See More'}
              </button>
            </div>

            <div className='w-full lg:w-1/4 flex flex-col items-center space-y-2'>
              <img
                src={`/images/logo.png`} // Path to your images
                alt={`Slide`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <Link to={'/'} className='bg-[#333333] text-white text-[10px] lg:text-xs font-bold px-4 lg:px-6 py-2 rounded-md shadow-md'>
            Explore !
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
