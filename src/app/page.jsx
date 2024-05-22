'use client'
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import axios from "axios";
import { useState, useEffect } from 'react'


const Home = () => {
    const [horaFecha, setHoraFecha] = useState(new Date())
    const [abrirMenu, setAbrirMenu] = useState(true)

    {/**Lógica para mostrar data de las computadoras escaneadas desde la consola. */}
    const [informacionRed, setInformacionRed] = useState({
        ip: '', subnet: '', gateway: ''
    })
    const [error, setError] = useState(null)

    useEffect(() => {
      axios.get('http://localhost:3001/escanear-red')
        .then(response => {
          console.log(response.data)
          setInformacionRed(response.data)
        })
        .catch(error => {
          setError('No has ejecutado el servidor local. ', error)
        })
 
    }, [])
    
    const handleMenu = () => {
        setAbrirMenu(!abrirMenu)
    }

    useEffect(() => {
      const intervalo = setInterval(() => {
        setHoraFecha(new Date())

      }, 1000)
    
      return () => clearInterval(intervalo)
    }, [])

    const saludando = (fecha) => {
      const horas = fecha.getHours()
      if(horas < 12){
        return 'Bienvenido, buenos días.'
      } else if (horas < 20){
        return 'Bienvenido, buenas tardes.'
      } else {
        return 'Bienvenido, buenas noches'
      }
    }
    
    const formatoHora = (fecha) => {
        const opciones = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
        return `Ensenada Blanca, Baja California a ${fecha.toLocaleDateString('es-ES', opciones)}`
    }
  
    const formatoFecha = (hora) => {
        return `La hora es: ${hora.toLocaleTimeString()}`
    }

  return (
    <main className={`grid ${abrirMenu ? 'grid-cols-5 bg-[#b5e2fa] ' : 'grid-cols-1 h-screen bg-[#b5e2fa]'}`}>  
        <div className="col-span-5">
          <Header handleMenu={handleMenu}/>
        </div>

        {/**Contenedor que envuelve al NavBar el cual aplica a toda la altura de la pantalla hasta topar con el header*/}
        {abrirMenu &&
          <div className={`mt-[130px] col-span-1 h-screen overflow-y-auto bg-[#3c6e71]`}>
            <NavBar abrirMenu={abrirMenu}/>
          </div>
        }

        {/**Este es el contenido que se muestra en la pestaña Inicio. 
          El margin-bottom configura la alineación del texto cuando el navbar está cerrado.
        */}
        
        <div className={`${abrirMenu ? 'col-span-4' : 'col-span-1 mb-[457px]'} mt-[120px]`}>
          <div className="text-[25px] m-10">
            <p>{saludando(horaFecha)}</p>
            <div className="my-2 text-center p-8 text-[40px] bg-[#0077b6] rounded-md text-white font-bold">
              <p>{formatoFecha(horaFecha)}</p>
              <p>{formatoHora(horaFecha)}</p>
            </div>
            <div>
              <h1 className="py-3">Datos de mi computadora:</h1>
              {
                error ? (
                  <p>{error}</p>
                ) : (
                  <div>
                    <p>Dirección IPv4: {informacionRed.ip}</p>
                    <p>Máscara de red: {informacionRed.subnet}</p>
                    <p>Puerta de enlace predeterminada: {informacionRed.gateway}</p>

                  </div>
                )

              }
            </div>
          </div>
        </div>

    </main>
  );
}

export default Home