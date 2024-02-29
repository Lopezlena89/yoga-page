import Image from "next/image";
import Link from "next/link"

import { FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Icon } from "./Icon";


export const Footer = () => {
  return (
    <>  
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="rgb(120 53 15)"  viewBox="0 0 1000 100" preserveAspectRatio="none" className="bg-orange-200 ">
              <path  className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
              c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
        </svg>
        <footer className="w-full h-auto flex flex-col justify-start items-center bg-amber-900">
            <div className="flex">
                <Icon/>
                <h2 className="ml-5 text-orange-100 font-extralight text-3xl">Yoga</h2>
            </div>
            <span className="w-[80%] mt-5 text-zinc-400 text-xs text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</span>
            <nav className="w-[80%] mt-5 h-[20] flex  items-center justify-around text-lg font-light text-white text-center">
              <Link href="#salones" >Salones</Link>
              <Link href="#clases">Clases</Link>
              <Link href="#">Nosotros</Link>
              <Link href="#">Contacto</Link>
            </nav>
            <div className="w-[95%] h-[100px] mt-10 flex items-center justify-between border-t border-solid border-yellow-700">
                <div className="w-[300px] h-[30px] flex justify-center items-center">
                    <span className="text-zinc-400 text-xs text-center">© 2024 Yoga, Todos los derechos reservados.</span>
                </div>
                <div className="w-[200px] h-[30px] flex justify-around">
                    <FaFacebook className="text-zinc-400" size={25}/>
                    <FaXTwitter className="text-zinc-400" size={25}/>
                    <FaInstagram className="text-zinc-400" size={25}/>
                    <FaYoutube className="text-zinc-400" size={25}/>
                </div>
            </div>
        </footer>
    </>
  )
}
