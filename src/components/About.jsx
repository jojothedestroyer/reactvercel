import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div

    initial={{opacity:0,x:200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}

     className='flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-10/12 overflow-hidden
    bg-gray-800 rounded-lg shadow-xl text-white '
    id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span 
        className='underline underline-offset-4 decoration-1 under font-light  text-white '>Our Company</span></h1>
        <p className=' max-w-80 text-center mb-8  text-gray-500 '>Passionate About Web Development, Deditcated to Bringing Your Vision to Life</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20  text-white '>
            <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' alt="" />
            <div className='flex flex-col items-center md:items-start mt-10  text-white'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-white'>2+</p>
                        <p>Years of Excellence</p>
                    </div>


{/* 
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>


                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div> */}





                    <div>
                        <p className='text-4xl font-medium text-white'>4+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>

                <p className='my-10 max-w-lg'>JNB Technologies specializes is the design construction and deployment of webpages. Our webpages includes but are not limited to:</p>
                <ul className='list-disc list-inside'> <li>Product pages</li> <li>Portfolios</li> <li>3D Pages</li> <li>Database/Administrative sites</li> </ul>

                <br />
                <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded text-black'>Contact Us</a>
            </div>
        </div>


      
    </motion.div>
  )
}

export default About
