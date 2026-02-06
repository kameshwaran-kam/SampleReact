import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Login() {
  return (
    <div>Login
        <h1>Login Page</h1>
        <Outlet/>
    </div>
  )
}
