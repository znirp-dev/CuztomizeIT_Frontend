import React, { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/login', {
            email,
            password
        }).then(response => {
            if(response.data.status) {
                navigate('/')
            }
            
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <div className='bg-[#ffffff] flex items-center justify-center h-screen'>
        <div className='p-5 bg-gray-200 border shadow-md rounded-lg w-1/5 mb-20'>
            <h1 className='text-lg font-bold mb-5'>Login</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                <div className='flex flex-col'>
                    <label className='text-xs font-semibold mb-1 ml-2' htmlFor="email">Email:</label>
                    <input className='outline-none rounded-md px-4 py-1 text-xs' type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='flex flex-col'>
                    <label className='text-xs font-semibold mb-1 ml-2' htmlFor="password">Password:</label>
                    <input className='outline-none rounded-md px-4 py-1 text-xs' type="password" placeholder='********' 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className='mt-4 text-xs bg-[#333333] text-white rounded-md py-1 font-semibold' type='submit'>Login</button>

                <Link className='text-xs text-red-500 text-end' to={"/forgotpassword"}>Forgot Password?</Link>

                <div className='flex flex-row gap-2 items-center justify-center mt-4'>
                    <p className='text-xs'>Don't have Account?</p> <Link className='text-xs text-blue-500' to='/signup'>Sign Up</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login