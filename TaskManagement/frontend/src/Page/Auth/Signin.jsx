import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';

const Signin = ({togglePanel}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login form : ", formData)
    }
    return (
        <div>
            <h1 className='text-lg font-bold text-center pb-8'>Login</h1>

            <form className='space-y-3' onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email...'
                />

                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password...'
                />

                <div item xs={12}>
                    <Button
                        fullWidth
                        className='customButton'
                        type='submit'
                        sx={{ padding: ".9rem" }}>
                        Login
                    </Button>
                </div>
            </form>

            <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
                <span>Don't have an account...?</span>
                <Button onClick={togglePanel}>Signup</Button>
            </div>

        </div>
    )
}

export default Signin
