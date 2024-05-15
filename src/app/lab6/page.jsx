'use client'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import { FaComputer } from "react-icons/fa6"
import React, {useState} from 'react'

const Laboratorio5 = () => { 

  const fila3 = [
    {computadora: 'PC 06', direccionIP: '140.10.0.181', mascaraSubred: '255.255.248.0', gateWay: '140.10.7.254', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 05', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 04', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 03', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 02', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 01', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
  ]

  const fila2 = [
    {computadora: 'PC 06', direccionIP: '140.10.6.75', mascaraSubred: '255.255.248.0', gateWay: '140.10.7.254', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 05', direccionIP: '10.4.4.207', mascaraSubred: '255.255.255.192', gateWay: '10.4.4.254', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 04', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 03', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 02', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 01', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
  ]

  const fila1 = [
    {computadora: 'PC 06', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 05', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 04', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 03', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 02', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
    {computadora: 'PC 01', direccionIP: 'Desconocido', mascaraSubred: 'Desconocido', gateWay: 'Desconocido', iconoPC: <FaComputer size={50}/>},
  ]

  const [abrirMenu, setAbrirMenu] = useState(true)

  const handleMenu = ()=> {
    setAbrirMenu(!abrirMenu)
  }

  return (
    <main className={`grid ${abrirMenu ? 'grid-cols-5 ' : 'grid-cols-1 h-screen mt-[200px] '} mt-[130px]`}>
        <div className="col-span-5">
          <Header handleMenu={handleMenu}/>
        </div>

        {/**Contenedor que envuelve al NavBar el cual aplxica a toda la altura de la pantalla */}
        <div className={` col-span-1 h-screen overflow-y-auto bg-[#c9184a]`}>
          <NavBar abrirMenu={abrirMenu}/>
        </div>

        <div className={`${abrirMenu ? 'col-span-4' : 'col-span-1 '} bg-[#fff]`}>
            <div className='m-10 p-3 text-center text-[30px] text-[#f5f3f4] font-extrabold rounded-lg bg-[#495057]'>Laboratorio Industrial - LC 06</div>
        
            <div className='text-[20px] text-left my-6 px-10'>
                <div className='p-4 bg-gray-300 rounded-lg font-bold text-[#495057]'>
                  <p className="">Total de computadoras: 16</p>
                  <p className="">Computadoras encendidas: 8</p>
                  <p className="">Computadoras apagadas: 3</p>
                  <div className='bg-gray-400 p-2 rounded-md text-[15px] text-black'>
                    <p>NOTA: las máquinas de los laboratorios, el número más alto asignado de cada fila, es la máquina que está pegada a la pared o en el otro extremo del laboratorio, y la máquina con el número más chico, indica el comienzo de cada fila.</p>
                  </div>
                </div>
                
                {/**Mapeo de los equipos de la fila #3 del laboratorio 05. */}
                <h3 className='font-bold mt-5 mb-2'>Fila 3</h3>
                <div className='text-[15px] font-bold flex items-center bg-[#bfc0c0] rounded-xl'>
                    <ul className='flex flex-wrap'>
                    {fila3.map((host, index)=>(
                        <li key={index} className='m-3'>
                            <div className=''>
                                <p className='text-center'>{host.computadora}</p>
                                <div className='text-left'>
                                    <p className='ml-[38%]'>{host.iconoPC}</p>
                                    <p className=''>Dirección IP: {host.direccionIP}</p>
                                    <p className=''>Máscara de subred: {host.mascaraSubred}</p>
                                    <p className=''>Gateway: {host.gateWay}</p>
                                </div> 
                            </div>
                        </li>))}
                    </ul>
                </div>

                {/**Mapeo de los equipos de la fila #2 del laboratorio 05. */}
                <h3 className='font-bold mt-5 mb-2'>Fila 2</h3>
                <div className='text-[15px] font-bold flex items-center bg-[#bfc0c0] rounded-xl'>
                    <ul className='flex flex-wrap'>
                    {fila2.map((host, index)=>(
                        <li key={index} className='m-3'>
                            <div className=''>
                                <p className='text-center'>{host.computadora}</p>
                                <div className='text-left'>
                                    <p className='ml-[38%]'>{host.iconoPC}</p>
                                    <p className=''>Dirección IP: {host.direccionIP}</p>
                                    <p className=''>Máscara de subred: {host.mascaraSubred}</p>
                                    <p className=''>Gateway: {host.gateWay}</p>
                                </div> 
                            </div>
                        </li>))}
                    </ul>
                </div>

                {/**Mapeo de los equipos de la fila #1 del laboratorio 05. */}
                <h3 className='font-bold mt-5 mb-2'>Fila 1</h3>
                <div className='text-[15px] font-bold flex items-center bg-[#bfc0c0] rounded-xl'>
                    <ul className='flex flex-wrap'>
                    {fila1.map((host, index)=>(
                        <li key={index} className='m-3'>
                            <div className=''>
                                <p className='text-center'>{host.computadora}</p>
                                <div className='text-left'>
                                    <p className='ml-[38%]'>{host.iconoPC}</p>
                                    <p className=''>Dirección IP: {host.direccionIP}</p>
                                    <p className=''>Máscara de subred: {host.mascaraSubred}</p>
                                    <p className=''>Gateway: {host.gateWay}</p>
                                </div> 
                            </div>
                        </li>))}
                    </ul>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Laboratorio5