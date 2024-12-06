import React, { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/forgot-password', {
            email,
        }).then(response => {
            if(response.data.status) {
                alert("check you email for reset password link")
                navigate('/login')
            }
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='p-5 bg-gray-200 border shadow-md rounded-lg w-1/5'>
            <h1 className='text-lg font-bold mb-5'>Forgot Password</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                <div className='flex flex-col'>
                    <label className='text-xs font-semibold mb-1 ml-2' htmlFor="email">Email:</label>
                    <input className='outline-none rounded-md px-4 py-1 text-xs' type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button className='mt-4 text-xs bg-[#333333] text-white rounded-md py-1 font-semibold' type='submit'>Send</button>

                <div className='flex flex-row gap-2 items-center justify-center mt-5'>
                    <p className='text-xs'>Back to Login?</p> <Link className='text-xs text-blue-500' to='/login'>Login</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword