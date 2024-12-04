import { Outlet } from 'react-router-dom';
import NavBar from '../homepage/NavBar';

import React from 'react'

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Layout