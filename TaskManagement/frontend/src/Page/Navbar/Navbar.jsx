import { Avatar } from '@mui/material'
import React from 'react'
import "./Navbar.css"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {task, auth} = useSelector(store => store)
  return (
    <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5
    lg:px-10, flex justify-between items-center'>

        <p className='font-bold text-lg'>Trinadh Task Manager</p>

        <div className='flex items-center gap-5'>
            <p>{auth.user ?.fullName}</p>
            <Avatar src='https://images3.alphacoders.com/132/thumbbig-1328396.webp'>T</Avatar>
        </div>
      
    </div>
  )
}

export default Navbar
