// Shree Ganeshay namah 
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { Mail, PhoneCall } from 'lucide-react'

const Footer = () => {
  return (
    <div >
      <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>
        <div>
          {/* <img src={assets.logo} className='mb-5 w-32' alt="" /> */}
          {/* <Link to={'/'} className=' mb-5 w-32'  >CHOCOSPOT</Link> */}
          <Link to={'/'} className='block mb-5 w-32 font-bold text-2xl '>CHOCOSPOT</Link>

          <p className=' w-full md:w-2/3 text-gray-600'>
          At Chocospot, we believe chocolate is more than just a treat—it's an experience. Crafted with passion and the finest ingredients, our chocolates are made to delight every moment. From classic favorites to bold new flavors, there's something for everyone.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className=' flex flex-col gap-1 text-gray-600'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/orders'}>Delivery</Link></li>
            <li><Link to={'/collection'}>Collection</Link></li>
          </ul>
        </div>

        <div>
          <p className=' text-xl font-medium mb-5'>GET IN TOUCH</p>

          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='flex'><PhoneCall className='pe-2' />+91 8843651565</li>
            <li className='flex'><Mail className='pe-2'/>admin@chocospot.com</li>
          </ul>
        </div>

      </div>
      <div>
        <hr className='  text-gray-300' />
        <p className='py-5 text-sm text-center '>Copyright 2025@chocospot.com | All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer