import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';

const app = express();
app.use(cors());

const ADAPTER_NAME = 'Ethernet'; // Cambia esto por el nombre exacto de tu adaptador

app.get('/escanear-red', (req, res) => {
  exec('ipconfig', (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      res.status(500).send(`stderr: ${stderr}`);
      return;
    }

    console.log(stdout); // Imprimir la salida completa en la consola para depuración

    const adapters = stdout.split(/\r?\n\r?\n/); // Dividir la salida por adaptador
    console.log(`Found ${adapters.length} adapters`);

    let ipAddress = 'No encontrado';
    let subnetMask = 'No encontrado';
    let gateway = 'No encontrado';

    adapters.forEach((adapter, index) => {
      console.log(`Adapter ${index}`);
      console.log(adapter);
      if (adapter.includes(ADAPTER_NAME)) {
        console.log(`Procesando adaptador ${ADAPTER_NAME}`);

        const ipMatch = adapter.match(/IPv4 Address[ .]*: (\d+\.\d+\.\d+\.\d+)/);
        const subnetMatch = adapter.match(/Subnet Mask[ .]*: (\d+\.\d+\.\d+\.\d+)/);
        const gatewayMatch = adapter.match(/Default Gateway[ .]*: (\d+\.\d+\.\d+\.\d+)/);

        if (ipMatch) {
          ipAddress = ipMatch[1];
          console.log(`Dirección IP encontrada: ${ipAddress}`);
        } else {
          console.log(`La dirección IP no fue encontrada en el adaptador: ${ADAPTER_NAME}`);
        }
        if (subnetMatch) {
          subnetMask = subnetMatch[1];
          console.log(`Máscara de red encontrada: ${subnetMask}`);
        } else {
          console.log(`La máscara de red no fue encontrada en el adaptador: ${ADAPTER_NAME}`);
        }
        if (gatewayMatch) {
          gateway = gatewayMatch[1];
          console.log(`Puerta de enlace predeterminada encontrada: ${gateway}`);
        } else {
          console.log(`Puerta de enlace predeterminada no fue encontrada en el adaptador: ${ADAPTER_NAME}`);
        }
      }
    });

    const networkInfo = {
      ip: ipAddress,
      subnet: subnetMask,
      gateway: gateway
    };

    res.json(networkInfo);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
