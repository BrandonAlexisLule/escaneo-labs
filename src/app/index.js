import express from 'express'
import ping from 'ping'


const app = express()
const port = 3001

app.get('/scan', async (requerido, respuesta) => {
    const { ip } = requerido.query
    try {
        //Realizar un ping a la dirección IP para verificar si está activa
        const resultado = await ping.promise.probe(ip)

        respuesta.json({
            ip,
            estaConectada: resultado.alive,
            mascaraRed: '',
        })      
    } catch (error) {
        console.log('Error al hacer el ping. ', + error)
        respuesta.status(500).json({
            error: 'Error al hacer el ping.'
        })
    }
})

app.listen(port, () => {
    console.log(`El servidor está ejecutándose en el puerto ${port}`)
})