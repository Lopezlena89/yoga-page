'use client'

import Link from "next/link";
import { useState } from "react"
import { CiMenuFries } from "react-icons/ci";


export const Button = () => {

    const [state, setState] = useState(false)

  return (
   <>
        <div className="w-[95%] h-full flex justify-end">
              <CiMenuFries size={25} className="text-amber-600 mt-5 button-icon fixed" onClick={()=>setState(!state)}/>
            {
                state && 
                <div 
                    className="fixed top-0 left-0 w-screen h-screen z-20  opacity-80
                        grid md:grid-cols-5  
                    " 
                    onClick={()=>setState(!state)}
                >
                    <div className="w-full h-full bg-red-100 col-1 flex justify-center items-center">
                        <Link href="#home" className="duration-1000 w-[20%] md:w-[50%] h-[50px] bg-white rounded-3xl 
                         flex justify-center items-center font-normal text-amber-800 hover:bg-gray-400 hover:text-white"
                        >
                            Home
                        </Link>
                    </div>
                    <div className="w-full h-full bg-red-200 col-2 flex justify-center items-center">
                        <Link href="#about" className="duration-1000 w-[20%] md:w-[50%] h-[50px] bg-white rounded-3xl
                         flex justify-center items-center font-normal text-amber-800 hover:bg-gray-400 hover:text-white"
                        >
                            About
                        </Link>
                    </div>
                    <div className="w-full h-full bg-red-300 col-3 flex justify-center items-center">
                        <Link href="#services" className="duration-1000 w-[20%] md:w-[50%] h-[50px] bg-white rounded-3xl
                         flex justify-center items-center font-normal text-amber-800 hover:bg-gray-400 hover:text-white"
                        >
                            Services
                        </Link>
                    </div>
                    <div className="w-full h-full bg-red-400 col-4 flex justify-center items-center">
                        <Link href="#trainer" className="duration-1000 w-[20%] md:w-[50%] h-[50px] bg-white rounded-3xl
                         flex justify-center items-center font-normal text-amber-800 hover:bg-gray-400 hover:text-white"
                        >
                            Trainer
                        </Link>
                    </div>
                    <div className="w-full h-full bg-red-500 col-5 flex justify-center items-center">
                        <Link href="#home" className="duration-1000 w-[20%] md:w-[50%] h-[50px] bg-white rounded-3xl
                         flex justify-center items-center font-normal text-amber-800 hover:bg-gray-400 hover:text-white"
                        >
                            Contact
                        </Link>
                    </div>
                    

                </div>
            }
        </div>
   </>
  )
}
