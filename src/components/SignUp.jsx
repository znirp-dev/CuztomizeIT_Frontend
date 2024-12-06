import React, { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup', {
            username,
            email,
            password
        }).then(response => {
            if(response.data.status) {
                navigate('/login')
            }
            
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='p-5 bg-gray-200 border shadow-md rounded-lg w-1/5 mb-20'>
            <h1 className='text-lg font-bold mb-5'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label className='text-xs font-semibold mb-1 ml-2' htmlFor="username">Username:</label>
                    <input className='outline-none rounded-md px-4 py-1 text-xs' type="text" placeholder='Username' 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

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

                <button className='mt-4 text-xs bg-[#333333] text-white rounded-md py-1 font-semibold' type='submit'>Sign Up</button>

                <div className='flex flex-row gap-2 mt-5 items-center justify-center'>
                    <p className='text-xs'>Aleady have Account?</p> <Link className='text-xs text-blue-500' to='/login'>Login</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp