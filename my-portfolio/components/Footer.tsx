import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/Data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
          <h1 className='heading lg:max-w-[45vw]'>
            Ready to take <span className='text-purple'>your </span>
             digital presence to the next level.
          </h1>

          <p className='text-white-200 md:mt-10 my-5 text-center'>
            Let&apos;s work together to create a website that truly reflects 
            your brand and vision.
            {/* Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals. */}
          </p>

            <a href='https://mail.google.com/mail'>
                <MagicButton 
                  title="Let's get in touch"
                  icon={<FaLocationArrow/>}
                  position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col 
        justify-between items-center'>
          <p className='md:text-base text-sm md:font-normal font-light'>
            Copyright © 2024 Joheb Khan
          </p>
          <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
              >
               <div
                 className='w-10 h-10 cursor-pointer flex justify-center items-center
                 backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 
                 rounded-lg border border-black-300 mt-2'
               >
                <img
                  src={info.img}
                  alt='icons'
                  width={20}
                  height={20}
                />
          </div>
         </a>
       ))}
     </div>
  </div>
</footer>
  )
}

export default Footer

                  
                  
                
          

            
