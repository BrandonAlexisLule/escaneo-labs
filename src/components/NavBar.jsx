'use client'
import Link from 'next/link'
import {useState} from 'react'

const laboratorios = [
    {ruta: '/', laboratorios: 'Inicio'},
    {ruta: '/lab1', laboratorios: 'Laboratorio 01'},
    {ruta: '/lab2', laboratorios: 'Laboratorio 02'},
    {ruta: '/lab3', laboratorios: 'Laboratorio 03'},
    {ruta: '/lab4', laboratorios: 'Laboratorio 04'},
    {ruta: '/lab5', laboratorios: 'Laboratorio 05'},
    {ruta: '/lab6', laboratorios: 'Laboratorio 06'},
]

const NavBar = ({}) => {

  return (
    <div className={`bg-[#3c6e71]`}>
        <p className='mx-[20px] py-[30px] text-[20px]'>Laboratorios de cómputo</p>
        <nav className=''>
            <ul>
                {
                    laboratorios.map((ruta, index) => (
                        <li key={index} className=''><Link href={ruta.ruta}><p className='mx-[10px] p-2 hover:bg-[#b7e4c7] hover:font-bold text-[19px] rounded-md transition duration-100'>{ruta.laboratorios}</p></Link></li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default NavBar