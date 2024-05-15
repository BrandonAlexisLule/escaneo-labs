'use client'
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [abrirMenu, setAbrirMenu] = useState(true)

  const handleMenu = ()=> {
    setAbrirMenu(!abrirMenu)
  }

  const [ip, setIp] = useState('')
  const [resultado, setResultado] = useState(null)

  const handleEnviar = async (e) => {
    e.preventDefault()
    try {
      //Realiza una solicitud http al servidor para escanear la dirección IP
      const respuesta = await axios.get(`/scan?ip=${ip}`)
      setResultado(respuesta.data)
    } catch (error) {
      console.log('Error', error)
    }

  }


  return (
    <main className={`grid ${abrirMenu ? 'grid-cols-5 bg-[#fff6c0] ' : 'grid-cols-1 h-screen bg-[#fff6c0]'}`}>  
        <div className="col-span-5">
          <Header handleMenu={handleMenu}/>
        </div>

        {/**Contenedor que envuelve al NavBar el cual aplica a toda la altura de la pantalla hasta topar con el header*/}
        {abrirMenu &&
          <div className={`mt-[130px] col-span-1 h-screen overflow-y-auto bg-[#c9184a]`}>
            <NavBar abrirMenu={abrirMenu}/>
          </div>
        }

        {/**Este es el contenido que se muestra en la pestaña Inicio. */}
        <div className={`${abrirMenu ? 'col-span-4' : 'col-span-1 mt-[-150px]'} mt-[120px]`}>
          <div className="text-[25px] p-10">
            <h1>Prueba de escaneo de IPS</h1>
            <form action="" onSubmit={handleEnviar}>
              <input 
                type="text" 
                placeholder="Ingrese la dirección IP" 
                value={ip}
                onChange={(e) => setIp(e.target.value)}/>
                <button className="" type="submit">Escanear IPS</button>
            </form>
            {
              resultado && (
                <div>
                  <p>Dirección IP: {resultado.ip}</p>
                  <p>Conectado: {resultado.estaConectada ? 'Si' : 'No'}</p>
                  <p>Máscara de red: {resultado.mascaraRed}</p>

                </div>

              )     
            }
          </div>
        </div>

    </main>
  );
}

export default Home