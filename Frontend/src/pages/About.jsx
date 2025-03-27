// Shree Ganeshay namah 
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Forever was created with a vision to make online shopping seamless, convenient, and enjoyable. Our goal is to provide customers with a platform where they can explore and purchase high-quality products effortlessly, all from the comfort of their homes. We believe in innovation and excellence, ensuring that every shopping experience is smooth and satisfying.</p>
              <p>
              We offer a carefully curated selection of fashion, electronics, and home essentials, ensuring that every product meets our quality standards. With trusted brands, reliable service, and a commitment to customer satisfaction, we strive to make shopping a hassle-free and enjoyable experience for everyone.
              </p>

              <b className=' text-gray-800'>
                Our Mission
              </b>

              <p className=''>
              Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
              </p>
          </div>
      </div>  

      <div className=' text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className=' text-gray-600'>
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>
            Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
            </p>
        </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About