import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({docId,speciality}) => {

    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();

    const [relDoc , setRelated] = useState([]);

    useEffect(() =>{
        if(doctors.length > 0 && speciality){
            const doctorsData = doctors.filter(doc => doc.speciality === speciality && doc._id !== docId);
            setRelated(doctorsData)
        }
    },[doctors,speciality,docId]);


  return (
    <div className='flex flex-col  text-gray-800 gap-4 items-center md:mx-10'>
       <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
       <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>  
       <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
            relDoc.slice(0 , 5).map((item, index) => (
                <div onClick={() => {navigate(`/appointment/${item._id}` , scrollTo(0 , 0))}} className='border border-blue-200 rounded-xl cursor-pointer overflow-hidden hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-grey-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-grey-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
        }
       </div>
        <button onClick={() => {navigate('/doctors') ;scrollTo(0 , 0)}} className='bg-blue-50 text-grey-600 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default RelatedDoctors