import React, { useContext, useState } from 'react'
import {AppContext} from '../Context/AppContext'

const Myappointments = () => {
  const {doctors} = useContext(AppContext);
  const date = new Date();
  const [today , setToday] = useState([{
    day: date.getDay(), 
    month:date.getMonth(), 
    year: date.getFullYear() ,
    time: {
     hours: date.getHours(),
     minutes: date.getMinutes(),
    }
      
  }])
  const [address , setAddress] = useState({
    address1: 'ushrika towers 1',
    address2: 'Nairobi/Kenya',
  })
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {
          doctors.slice(0 , 3).map((item , index) => {
            return <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
                <div>
                  <img className='w-32 bg-indigo-50' src={item.image} alt="" />
                </div>
                <div className='flex-1 text-sm text-zinc-600'>
                  <h1 className='text-neutral-800 font-semibold text-lg'>{item.name}</h1>
                  <p>{item.speciality}</p>
                  <p className='text-zinc-700 font-medium mt-1'>Address: 
                  <br />
                  <span className='text-xs font-normal'>
                  {address.address1}
                  <br />
                  {address.address2}
                  </span>
                  </p>
                  <p className='text-zinc-700 font-medium mt-1'>Date and Time: <br />
                  {
                  today.map((item => {
                    return <p className='text-xs mt-1 font-normal'>{item.day}/{item.month}/{item.year} 
                    <span className='pl-4'>
                    {item.time.hours}:
                    {item.time.minutes}
                    </span>
                    
                    </p>
                  }))
                  } 
                  </p>
                </div>
                <div></div>
                <div className='flex flex-col gap-2 justify-end'>
                  <button className='hover:bg-primary hover:text-white transition-all duration-300 text-stone-500 text-center sm:min-w-48 py-2 border rounded' style={index === 0 ? {display: 'none'} : {display: 'block'}}>{index === 1 ? 'Pay here' : 'Paid'}</button>
                  <button className='hover:bg-red-600 hover:text-white transition-all duration-300 text-stone-500 text-center sm:min-w-48 py-2 border rounded'>Cancel appointment</button>
                </div>

            </div>
          })
        }
      </div>
    </div>
  )
}

export default Myappointments
