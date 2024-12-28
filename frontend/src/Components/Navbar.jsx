import React, { useState } from 'react'
import {assets} from "../assets/assets_frontend/assets"
import { NavLink , Link, useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const [showmenu , setshowMenu] = useState(false);
    const [token , setToken] = useState(false);


  return (
    <header className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
      <img onClick={() => navigate('/')} src={assets.logo} alt="" className='w-16 cursor-pointer' />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to={'/'}>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/doctors'}>
            <li className='py-1'>ALL-DOCTORS</li>
            <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/about'}>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/contact'}>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token === true 
            ? <div className='flex gap-8 items-center cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block transition ease-in-out'>
                    <div className=' min-w-48 bg-gray-300 p-4 flex flex-col gap-2' >
                        <p className='hover:text-black cursor-pointer' onClick={() => navigate('/My-Profile')}>MyProfile</p>
                        <p className='hover:text-black cursor-pointer' onClick={() => navigate('/my-Appointments')}>My Appointments</p>
                        <p className='hover:text-black cursor-pointer' onClick={() => setToken(false)}>Logout</p>
                    </div>
                </div>
            </div> 
            :<button onClick={() => navigate('/Login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>CREATE ACCOUNT</button>
        }
        <img onClick={() => setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* Mobile Menu */}
        <div className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${showmenu === true ? 'w-full fixed' : 'w-0 h-0'}`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-14' onClick={() => {navigate('/') , setshowMenu(false)}}  src={assets.logo} alt="" />
            <img className='w-7' onClick={() => setshowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className='menunav flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => {setshowMenu(false) , scrollTo(0 , 0)}} className={`px-4 py-2 rounded inline-block`} to={'/'}>HOME</NavLink>
            <NavLink onClick={() => {setshowMenu(false) , scrollTo(0 , 0)}} className={`px-4 py-2 rounded inline-block`} to={'/doctors'}>ALL DOCTORS</NavLink>
            <NavLink onClick={() => {setshowMenu(false) , scrollTo(0 , 0)}} className={`px-4 py-2 rounded inline-block`} to={'/about'}>ABOUT</NavLink>
            <NavLink onClick={() => {setshowMenu(false) , scrollTo(0 , 0)}} className={`px-4 py-2 rounded inline-block`} to={'/contact'}>CONTACT</NavLink>
          </div>
        </div>
      </div>


    </header>
  )
}

export default Navbar
