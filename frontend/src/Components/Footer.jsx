import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit nostrum recusandae voluptatibus libero, nesciunt praesentium? Aperiam esse illo quasi fuga eum sed odit asperiores quos?</p>
        </div>
        {/* center */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About us</Link>
                <Link to='/contact'>Contact us</Link>
                <Link to='/about/#privacy'>Privacy policy</Link>
            </ul>
        </div>
        {/* right */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-212456-7890</li>
                <li>mohamedabdiaziz515@gmail.com</li>
            </ul>
        </div>

        {/* copyright */}
      </div>
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@ Prescript - All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
