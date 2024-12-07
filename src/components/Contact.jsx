import React from 'react';

function Contact() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row  lg:w-1/2 lg:h-[45svh] items-center justify-between shadow-lg'>
          <div className='w-full lg:w-1/2 h-full bg-gray-300 rounded-t-lg lg:rounded-l-lg p-5 flex flex-col gap-8'>
            <div>
              <h1 className='text-lg font-bold'>Send an Inquiry.</h1>
            </div>
            <div className='w-full flex flex-row gap-5'>
              <div className='w-full flex-col space-y-1'>

                <div className='flex flex-col'>
                  <label className='text-xs font-semibold mb-1 mx-2' htmlFor="fname">First Name</label>
                  <input type="text" className='outline-none text-xs px-2 py-1 rounded-md' placeholder='Enter your first name' required />
                </div>

                <div className='flex flex-col'>
                  <label className='text-xs font-semibold mb-1 mx-2' htmlFor="lname">Last Name</label>
                  <input type="text" className='outline-none text-xs px-2 py-1 rounded-md' placeholder='Enter your Last name' required />
                </div>

                <div className='flex flex-col'>
                  <label className='text-xs font-semibold mb-1 mx-2' htmlFor="email">Email</label>
                  <input type="email" className='outline-none text-xs px-2 py-1 rounded-md' placeholder='Enter your email' required />
                </div>

                <div className='flex flex-col mt-2'>
                  <label className='text-xs font-semibold mb-1 mx-2' htmlFor="comment">Comment</label>
                  <textarea className='outline-none text-xs px-2 py-1 rounded-md' placeholder="Enter your inquiry" />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 h-full bg-[#333333] rounded-b-lg lg:rounded-r-lg p-5 flex flex-col gap-8'>
            <div>
              <h1 className='text-lg font-bold text-white'>Our Contact Information.</h1>
            </div>
            <div className='flex flex-col gap-5 text-white mt-2'>
            <p className='text-xs'>📞 Phone: +123 456 7890</p>
            <p className='text-xs'>📧 Email: contact@yourcompany.com</p>
            <p className='text-xs'>🏠 Address: 123 Your Street, Your City, Country</p>
            <p className='text-xs'>🌐 Website: www.yourcompany.com</p>
            <div className='flex space-x-4 mt-2'>
              <a href="https://facebook.com/yourcompany" target="_blank" className='text-xs text-blue-600'>Facebook</a>
              <a href="https://twitter.com/yourcompany" target="_blank" className='text-xs text-blue-400'>Twitter</a>
              <a href="https://linkedin.com/company/yourcompany" target="_blank" className='text-xs text-blue-700'>LinkedIn</a>
            </div>
          </div>
          </div>
      </div>
      
      {/* <div className='w-1/2 gap-8 flex flex-col bg-gray-200 rounded-lg p-5'>
        <div>
          <h1 className='text-lg font-bold'>Send an Inquiry.</h1>
        </div>
        
        <div className='w-full h-full flex flex-row items-center justify-center gap-10'>
        <div className='w-1/2 flex flex-row gap-5'>
          <div className='w-full flex-col space-y-1'>

            <div className='flex flex-col'>
              <label className='text-xs font-semibold mb-1 mx-2' htmlFor="fname">First Name</label>
              <input type="text" className='outline-none text-xs px-2 py-1 rounded-md' placeholder='Enter your first name' required />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs font-semibold mb-1 mx-2' htmlFor="lname">Last Name</label>
              <input type="text" className='outline-none text-xs px-2 py-1 rounded-md' placeholder='Enter your Last name' required />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs font-semibold mb-1 mx-2' htmlFor="email">Email</label>
              <input type="email" className='outline-none text-xs px-2 py-1 rounded-md' placeholder='Enter your email' required />
            </div>

            <div className='flex flex-col mt-2'>
              <label className='text-xs font-semibold mb-1 mx-2' htmlFor="comment">Comment</label>
              <textarea className='outline-none text-xs px-2 py-1 rounded-md' placeholder="Enter your inquiry" />
            </div>
          </div>
        </div>
        <div className='bg-white w-1/2 h-[200px] items-center justify-center p-4 rounded-lg'>
          <h2 className='text-sm font-semibold'>Our Contact Information</h2>
          <div className='flex flex-col space-y-2 mt-2'>
            <p className='text-xs'>📞 Phone: +123 456 7890</p>
            <p className='text-xs'>📧 Email: contact@yourcompany.com</p>
            <p className='text-xs'>🏠 Address: 123 Your Street, Your City, Country</p>
            <p className='text-xs'>🌐 Website: www.yourcompany.com</p>
            <div className='flex space-x-4 mt-2'>
              <a href="https://facebook.com/yourcompany" target="_blank" className='text-xs text-blue-600'>Facebook</a>
              <a href="https://twitter.com/yourcompany" target="_blank" className='text-xs text-blue-400'>Twitter</a>
              <a href="https://linkedin.com/company/yourcompany" target="_blank" className='text-xs text-blue-700'>LinkedIn</a>
            </div>
          </div>
        </div>
        </div>

      </div> */}
    </div>
  );
}

export default Contact;
