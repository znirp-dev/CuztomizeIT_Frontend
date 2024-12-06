import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const auth = localStorage.getItem('auth');
    axios.defaults.withCredentials = true;

    const handleLogout = () => {
        axios.get('http://localhost:3000/auth/logout')
        .then(res => {
            if (res.data.status) {
                navigate('/');
            }
        }).catch(error => {
            console.log(error);
        });
    };

    const [clickMenu, setClickMenu] = useState(false);
    const menuRef = useRef(null); // Reference to the menu

    // Handle click outside the menu to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
                setClickMenu(false); // Close the menu if clicked outside
            }
        };

        // Bind the click event to the document
        document.addEventListener('click', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='fixed w-full z-10'>
            <div className='bg-[#272c2b] px-4 lg:px-10 py-4 m-2 rounded-md shadow-md'>
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        <h1 className='text-sm text-[#f99810] font-bold'>CuztomizeIT.</h1>
                    </div>
                    <div className='lg:flex flex-row gap-4 lg:gap-10 hidden'>
                        <button><Link to='/' 
                            className='text-xs text-white flex flex-row items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Home
                            </Link>
                        </button>
                        <button><Link to='/about' 
                            className='text-xs text-white flex flex-row items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                            About Us
                        </Link></button>
                        <button><Link to='/shop' 
                            className='text-xs text-white flex flex-row items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                Shop
                            </Link>
                        </button>
                    </div>
                    <div>
                        {/* Menu Button */}
                        <button className='flex lg:hidden' onClick={() => setClickMenu(!clickMenu)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                        {/* Menu Dropdown */}
                        {clickMenu && (
                            <div ref={menuRef} className='flex flex-col gap-2 absolute right-6 bottom-[-60px] bg-white py-2 px-6 border border-gray-300 rounded-md shadow-md'>
                                <Link to={'/'} className='text-[11px] font-semibold'>Home</Link>
                                <Link to={'/about'} className='text-[11px] font-semibold'>About Us</Link>
                                <Link to={'/shop'} className='text-[11px] font-semibold'>Shop</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
