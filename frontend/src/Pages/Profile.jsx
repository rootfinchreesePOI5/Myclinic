import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Profile = () => {

  const [userData , setUserData] = useState({
    name: 'Edward Vincent',
    image : assets.profile_pic,
    email : 'mohamedabdiaziz515@gmail.com',
    phone: '0700809559',
    address: {
      line1: 'ushrika towers one',
      line2: 'Nairobi/Kenya'
    },
    Gender: 'Male',
    dob: '2003-01-28'
  });

  const [isEdit , setEdit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit === true ? (
          <input className='bg-gray-100 px-2 py-2 text-1xl font-sm max-w-60 mt-4' value={userData.name} onChange={(e) => setUserData(prev => ({...prev , name:e.target.value}))} type="text" placeholder='your username' /> )
          : (
            <p className='font-medium text-1xl text-neutral-800 mt-4'>{userData.name}</p>
          )
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email:</p>
        <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isEdit === true ? (
          <input className='bg-gray-100 max-w-52 px-2 py-2' value={userData.phone} onChange={(e) => setUserData(prev => ({...prev , phone:e.target.value}))} type="text" placeholder='your phone number' /> )
          : (
            <p className='text-blue-400'>{userData.phone}</p>
          )
      }
          <p className='font-medium'>Address:</p>
          {
            isEdit === true ? 
            <p className='flex flex-col gap-0'>
              <input className='bg-gray-100 px-2 py-2 ' onChange={(e) => setUserData(prev =>({...prev , address: {...prev.address , line1:e.target.value} }))} value={userData.address.line1} type="text" placeholder='Address 1' />
              <br className='mt-4'/>
              <input className='bg-gray-100 px-2 py-2 ' onChange={(e) => setUserData(prev =>({...prev , address: {...prev.address , line2:e.target.value} }))} value={userData.address.line2} type="text" placeholder='Address 2' />
            </p>
            : <p className='text-gray-400'>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
        </div>

        <div>
          <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Gender:</p>
            {
              isEdit === true ? 
              <select className='max-w-20 bg-gray-100  py-2 w-52' value={userData.Gender} onChange={(e) => setUserData(prev => ({...prev , Gender:e.target.value}))}>
                <option value="Male">Male</option>
                <option  value="Female">Female</option>
              </select>:
              <p className='text-gray-400'>{userData.Gender}</p>
            }
            <p className='font-medium'>Birthday:</p>
            {
              isEdit == true ?
              <input className='max-w-28 bg-gray-100 px-2 py-2' onClick={(e) => setUserData(prev => ({...prev , dob:e.target.value}))} type="date" value={userData.dob} />:
              <p className='text-gray-400'>{userData.dob}</p>
            }
          <div className='mt-10'>
            {
              isEdit === true ?
              <button className='border border-primary px-8 py-2 rounded-full w-52 hover:bg-primary hover:text-white transition-all' onClick={() => setEdit(false)}>Save information</button>:
              <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setEdit(true)}>Edit</button>
            }
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Profile
