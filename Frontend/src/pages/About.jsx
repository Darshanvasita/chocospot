// Shree Ganeshay namah 
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import { Container, ShieldCheck, Wrench } from 'lucide-react'

const About = () => {

  const aboutImage = 
    {
      image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-chocolate-light'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px] rounded-lg shadow-lg' src={aboutImage.image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-chocolate-medium'>
              <p>Chocospot was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
              <p>
              Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
              </p>

              <b className='text-chocolate-dark text-xl'>
                Our Mission
              </b>

              <p className=''>
              Our mission at Chocospot is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
              </p>
          </div>
      </div>  

      <div className='text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-5'>
        <div className='border border-cream bg-white hover:bg-cream transition-colors px-10 md:px-16 rounded-lg  py-8 sm:py-20 flex flex-col gap-5 hover:cursor-pointer hover:scale-105 transition-transform'>
        <ShieldCheck className=' h-10 w-10' />
            <b className='text-chocolate-dark text-lg'>Quality Assurance</b>
            <p className='text-chocolate-medium'>
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
        </div>

        <div className='border border-cream bg-white hover:bg-cream transition-colors px-10 rounded-lg md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:cursor-pointer hover:scale-105 transition-transform'>
        <Container className=' h-10 w-10' />
            <b className='text-chocolate-dark text-lg'>Convenience</b>
            <p className='text-chocolate-medium'>
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
        </div>

        <div className='border border-cream bg-white hover:bg-cream transition-colors px-10 md:px-16 rounded-lg py-8 sm:py-20 flex flex-col gap-5 hover:cursor-pointer hover:scale-105 transition-transform'>
        <Wrench className='h-10 w-10' />   
            <b className='text-chocolate-dark text-lg'>Exceptional Customer Service</b>
            <p className='text-chocolate-medium'>
            Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
            </p>
        </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About