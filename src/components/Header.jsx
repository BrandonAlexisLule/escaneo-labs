'use client'
import Image from 'next/image'
import { CiMenuKebab } from "react-icons/ci";


const Header = ({handleMenu}) => {

  return (
    <div className='flex flex-row bg-[#001d3d] fixed top-0 w-full z-10'>
        <div className='p-[18px]'>
            <Image className='rounded-xl' alt='' src={'/img/ite.png'} width={100} height={100}/>
        </div>
        <div className='pt-[35px] text-white flex flex-col'>
            <h1 className='uppercase text-[25px] font-bold'>Labs ITE App Scanner</h1>
            <h2 className='uppercase'>Instituto Tecnológico de Ensenada</h2>
            
        </div>
        <button className='ml-[55%] mb-[40px] mt-[40px] text-[#fff] flex flex-row hover:text-black m-1 p-2 hover:bg-[#a2d2ff] rounded-md transition duration-100' onClick={handleMenu}>
            <p className='mt-[5px] text-2xl'>Laboratorios</p>
            <CiMenuKebab size={40} className='mt-[3px] border-l-orange-800 rounded-lg'/>
        </button>
        
    </div>
  )
}

export default Header