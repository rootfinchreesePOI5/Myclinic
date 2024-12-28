import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';

const Doctors = () => {
  const {speciality} = useParams()

  const [filterDoc , setFilterDoc] = useState([]);
  const {doctors} = useContext(AppContext);
  const navigate = useNavigate();
  const [Showfilter , setFilter] = useState(false)


  const applyFIlter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(() =>{
    applyFIlter()
  },[doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the Doctors Speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
      {/* left */}
      <button  onClick={() => setFilter(prev => !prev)} className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${Showfilter === true ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div  className={`flex-col gap-4 text-sm text-gray-600 ${Showfilter === true ? 'flex' : 'hidden sm:flex'}`}>
        <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer bg-indigo-50 text-black`} onClick={() => navigate('/doctors')}>All</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')}>General physician</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}>Gynecologist</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}>Dermatologist</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Pediatrics' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}>Pediatrics</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Nuerologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}>Nuerologist</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}>Gastroenterologist</p>
        </div>
      
      {/* right */}
      <div className='w-full grid grid-cols-auto gap-4  gap-y-6 px-3 sm:px-0     '>
        {
          filterDoc.map((item, index) => (
            <div onClick={() => {navigate(`/appointment/${item._id}`),scrollTo(0 , 0)}} className='border border-blue-200 rounded-xl cursor-pointer overflow-hidden hover:translate-y-[-10px] transition-all duration-500' key={index}>
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
      </div>
    </div>
  )
}

export default Doctors
