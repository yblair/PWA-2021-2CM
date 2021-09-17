const personajes = [
    {
        nombre: 'Homero',
        apellido: 'Simpson',
        trabajos: ['planta nuclear', 'don barredora']
    },
    {
        nombre: 'Marge',
        apellido: 'Simpson',
        trabajos: ['ama de casa', 'vende drogas']
    },
    {
        nombre: 'Bob',
        apellido: 'Esponja',
        trabajos: ['chef']
    },
    {
        nombre: 'Leo',
        apellido: 'Messi',
        trabajos: ['PSG']
    }
]

const getAll = (arrayDeObjetos) => {
    arrayDeObjetos.forEach(item => {
        let mas1Trabajos = false;
        if (item.trabajos.length > 1) {
            mas1Trabajos = true;
        }
        console.log(`Nombre: ${item.nombre}. Apellido: ${item.apellido}. Tiene mas de un trabajo? ${mas1Trabajos ? 'SI': 'NO'}`)

    });
}

getAll(personajes)


const axios = require('axios');
async function get(url) {
    const personajes = await axios.get(url);
    console.log();
}
get('https://breakingbadapi.com/api/characters')