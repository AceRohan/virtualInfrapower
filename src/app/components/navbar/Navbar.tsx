
import React from 'react'
import Image from 'next/image'
import { title } from 'process'

const nav=[
    {
        id:1,
        title:"Home"    
    },
    {
        id:2,
        title:"About Us"    
    },
    {
        id:3,
        title:"Career"    
    },
    {
        id:4,
        title:"Tender"    
    },
    {
        id:5,
        title:"Vendor Registration"    
    },
    {
        id:6,
        title:"Contact Us"
    }

]

const Navbar = () => {
  return (
    <div className='w-full h-[] bg-[#084102] p-2'>
        <div className='w-[90%] flex justify-between items-center' >
            <div className='w-[20%] flex items-center gap-1'>
                <div className='relative w-[40%] h-[90px]'>
                    <Image src="/logos/logo.svg" alt="logo" fill style={{objectFit:'cover'}} ></Image>
                </div>
                <div className='text-white w-[60%]'>
                    <h1 className='font-bold'>VIRTUAAL
                    INFRAPOWER</h1>
                    <p>PRIVATE LIMITED</p>
                </div>
            </div>

            <div className='text-white flex items-center w-[60%] h-[40%] justify-around font-bold' >
                {nav.map((item)=>(
                    <li key={item.id} className='list-none text-[1em]' >{item.title}</li>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Navbar
