'use client'
import Link from 'next/link'
import {useState} from 'react'

const laboratorios = [
    {ruta: '/', laboratorios: 'Inicio'},
    {ruta: '/lab1', laboratorios: 'Laboratorio de cómputo 01'},
    {ruta: '/lab2', laboratorios: 'Laboratorio de cómputo 02'},
    {ruta: '/lab3', laboratorios: 'Laboratorio de cómputo 03'},
    {ruta: '/lab4', laboratorios: 'Laboratorio de cómputo 04'},
    {ruta: '/lab5', laboratorios: 'Laboratorio de cómputo 05'},
    {ruta: '/lab6', laboratorios: 'Laboratorio de cómputo 06'},
]

const NavBar = ({}) => {

  return (
    <div className={`bg-[#c9184a]`}>
        <p className='mx-[20px] py-[30px] text-[25px]'>Laboratorios</p>
        <nav className=''>
            <ul>
                {
                    laboratorios.map((ruta, index) => (
                        <li key={index} className=''><Link href={ruta.ruta}><p className='mx-[10px] p-2 hover:bg-[#ffe5ec] hover:font-bold text-[19px] rounded-md transition duration-100'>{ruta.laboratorios}</p></Link></li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default NavBar