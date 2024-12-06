import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='w-full h-screen bg-[#ffffff]'>
        <div className='w-full h-full flex items-center justify-center'> 
            <div className='flex flex-col items-center justify-center gap-10'>
                <div className='w-2/3 flex flex-col gap-5'>
                    <h1 className='text-4xl font-bold'>About Us</h1>
                    <p className='text-lg font-normal'>at CuztomizeIT, we are passionate about delivering high-quality digital solutions that drive success for businesses and organizations across various industries. Specializing in custom websites and mobile applications, we focus on creating user-centric, innovative, and scalable systems that make a real impact.

                    Our team of expert developers, designers, and project managers work collaboratively with each client to understand their unique needs and deliver tailored solutions that exceed expectations. Whether you need a robust website, a seamless mobile app, or a complex system integration, we are committed to providing solutions that are not only functional but also engaging and efficient.

                    With a strong emphasis on quality, transparency, and customer satisfaction, we ensure that every project is delivered on time, within budget, and to the highest standards. A, we don't just build projects—we build long-lasting partnerships that help your business thrive in an ever-evolving digital landscape.

                    Let us help you bring your ideas to life and take your digital presence to the next level.
                    </p>
                </div>
                <Link to={'/'} className='bg-[#333333] text-white text-xs font-bold px-6 py-2 rounded-md shadow-md'>Explore !</Link>
            </div>
        </div>
    </div>
  )
}

export default About