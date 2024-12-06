import React, { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ResetPass() {
    const [password, setPassword] = useState('')
    const {token} = useParams()
    console.log(token)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/reset-password/'+token, {
            password,
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
        <div className='p-5 bg-gray-200 border shadow-md rounded-lg w-1/5'>
            <h1 className='text-lg font-bold mb-5'>Reset Password</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                <div className='flex flex-col'>
                    <label className='text-xs font-semibold mb-1 ml-2' htmlFor="password">New Password:</label>
                    <input className='outline-none rounded-md px-4 py-1 text-xs' type="password" placeholder='********' 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className='mt-4 text-xs bg-[#333333] text-white rounded-md py-1 font-semibold' type='submit'>Reset</button>
            </form>
        </div>
    </div>
  )
}

export default ResetPass