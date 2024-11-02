import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./Sidebar.css"

const menu = [
    {name:"Home", value:"Home", role:["ROLE_ADMIN", "ROLE_CUSTOMER"]},
    {name:"DONE", value:"DONE", role:["ROLE_ADMIN", "ROLE_CUSTOMER"]},
    {name:"ASSIGNED", value:"ASSIGNED", role:["ROLE_ADMIN"]},
    {name:"NOT ASSIGNED", value:"PENDING", role:["ROLE_ADMIN"]},
    {name:"Create New Task", value:"", role:["ROLE_ADMIN"]},
    {name:"Notification", value:"NOTIFICATION", role:["ROLE_CUSTOMER"]},
]

const role = "ROLE_ADMIN"

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState("Home")
    const handleMenuChange = (item) => {
        setActiveMenu(item.name);
    }
    return (
        <div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
            <div className='space-y-5 h-full'>
                <div className='flex justify-center'>
                    <Avatar
                     sx={{width:"8rem", height:"8rem"}}
                     className='border-2 border-[#c24dd0]'
                     src='https://w0.peakpx.com/wallpaper/553/177/HD-wallpaper-itachi-uchiha-akatsuki-amaterasu-anime-clan-uchiha-naruto-naruto-shippuden-sharingan.jpg'/>
                </div>
                {
                    menu.filter((item) => item.role.includes(role))
                    .map((item) => <p onClick={() => handleMenuChange(item)} className={`py-3 px-5 rounded-full text-center cursor-pointer ${activeMenu === item.name ? "activeMenuItem" : "menuItem"}`}>
                        {item.name}
                    </p>)
                }
            </div>
        </div>
    )
}

export default Sidebar