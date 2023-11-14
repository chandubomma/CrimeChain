import React from 'react'
import Logo from './Logo'
import ControlPanel from './ControlPanel'
import SearchBar from './SearchBar'
import CrimeDetails from './CrimeDetails'
import IdentityCard from './IdentityCard'
import { useState } from 'react'
import { Outlet,} from "react-router-dom";

const Layout = () => {
  
   
  return (
    <div>
      <div className='fixed top-4 left-4'>
        <Logo/>
      </div>
      <div className='fixed top-20 left-[40rem]'>
        <h2 className='text-gray-200 text-xl font-bold '>Welcome! Chandu Bomma</h2>
      </div>
     
        <div className='fixed left-16 top-1/3'>
            <ControlPanel/>
        </div>
        <div className='fixed left-[36rem] top-36'>
            <SearchBar/>
        </div>
        <div className='fixed top-64 left-[36rem]'>
            <Outlet />
        </div>
      </div>
  )
}

export default Layout
