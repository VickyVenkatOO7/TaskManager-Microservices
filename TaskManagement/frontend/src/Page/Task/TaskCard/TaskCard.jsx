import { IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserList from '../UserList';
import SubmissionList from '../SubmissionList';
import EditTaskForm from '../EditTaskCard';

const role = "ROLE_ADMIN"
const TaskCard = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    
    const handleOpenUserList = () =>{
        setOpenUserList(true);
        handleMenuClose();
    }
    const [OpenUserList, setOpenUserList] = useState(false);
    const handleCloseUserList = () =>{
        setOpenUserList(false);
    }


    const [OpenSubmissionList, setOpenSubmissionList] = useState(false);
    const handleCloseSubmissionList = () =>{
        setOpenSubmissionList(false);
    }
    const handleOpenSubmissionList = () =>{
        setOpenSubmissionList(true);
        handleMenuClose();
    }


    const [OpenUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
    const handleCloseUpdateTaskForm = () =>{
        setOpenUpdateTaskForm(false);
    }
    const handleOpenTaskUpdateModel = () =>{
        setOpenUpdateTaskForm(true);
        handleMenuClose();
    }

    const handleDeleteTask = () =>{
        
        handleMenuClose();
    }

    return (
        <div>
            <div className='card lg:flex justify-between'>
                <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
                    <div className=''>
                        <img className='lg:w-[7rem] lg:h-[7rem] object-cover' src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    </div>
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-lg'>Car Rental Website</h1>
                            <p className='text-gray-500 text-sm'>Use latest framewors and technologies to make this website.</p>
                        </div>

                        <div className='flex flex-wrap gap-2 items-center'>

                            {[1, 1, 1, 1].map((item) => <span className='py-1 px-5 rounded-full techStack'>
                                ReactJs
                            </span>)}

                        </div>
                    </div>
                </div>

                <div>
                    <IconButton id="basic-button"
                        aria-controls={openMenu ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleMenuClick}>
                        <MoreVertIcon />
                    </IconButton>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            role === "ROLE_ADMIN" ? ( 
                            <>
                                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                                <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
                                <MenuItem onClick={handleOpenTaskUpdateModel}>Edit</MenuItem>
                                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
                            </>
                            ) : (
                              <></>
                        ) }
                    </Menu>
                </div>
            </div>
            <UserList open={OpenUserList} handleClose={handleCloseUserList}/>
            <SubmissionList open={OpenSubmissionList} handleClose={handleCloseSubmissionList}/>
            <EditTaskForm open={OpenUpdateTaskForm} handleClose={handleCloseUpdateTaskForm}/>
        </div>
    )
}

export default TaskCard
