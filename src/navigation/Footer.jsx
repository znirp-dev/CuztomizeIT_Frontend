import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full bg-[#272c2b]'>
        <div className='p-8 flex flex-col lg:flex-row gap-5'>
            <div className='w-1/4 flex justify-center'>
                <h1 className='text-[#f99810] text-lg font-bold'>CuztomizeIT</h1>
            </div>
            <div className='flex flex-row  w-full lg:w-3/4'>
                <div className='w-1/3 flex flex-col gap-1'>
                    <h1 className='text-xs text-gray-400'>Navigate:</h1>
                    <div>
                        <Link className='text-white text-xs'>Home</Link>
                    </div>
                    <div>
                        <Link className='text-white text-xs'>About Us</Link>
                    </div>
                    <div>
                        <Link className='text-white text-xs'>Shop</Link>
                    </div>
                </div>

                <div className='w-1/3 flex flex-col gap-1'>
                    <h1 className='text-xs text-gray-400'>Contact Information:</h1>
                    <div>
                        <Link className='text-white text-xs'>+63-9924183277</Link>
                    </div>
                    <div>
                        <Link className='text-white text-xs'>10th avenue, Caloocan City</Link>
                    </div>
                    <div>
                        <Link className='text-white text-xs'>CuztomizeIT Inc.</Link>
                    </div>
                </div>

                <div className='w-1/3 flex flex-col gap-1'>
                    <h1 className='text-xs text-gray-400'>Our Social Links:</h1>
                    <div>
                        <Link className='text-white text-xs'>Facebook</Link>
                    </div>
                    <div>
                        <Link className='text-white text-xs'>LinkedIn</Link>
                    </div>
                    <div>
                        <Link className='text-white text-xs'>Tiktok</Link>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='w-full bg-[#4b4b4b] flex items-center justify-center py-2 rounded-t-lg'>
            <h1 className='text-[11px] text-gray-200'>created by @znirp-dev</h1>
        </div>
    </div>
  )
}

export default Footer