const express = require('express')
const path = require('path')
const app = express()

const { nuevoCurso, getCanales, editCanal, deleteCanal } = require('./consultas')

app.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000')
})

app.use(express.json()) // Ya no es necesario utilizar el body-parse, con esta linea de codigo basta

app.get('/', (req, res) => {
    const ruta = path.join(__dirname, 'index.html')
    res.sendFile(ruta)
})

// Funciona
app.post('/curso', async (req, res) => {
    const datosCurso = req.body
    const respuesta = await nuevoCurso(datosCurso)
    res.send(respuesta)
})

// Paso 1
app.get('/canales', async (req, res) => {
    // Paso 2
    const respuesta = await getCanales()
    // Paso 3
    res.send(respuesta)
})

// Paso 1
app.put('/canal/:id', async (req, res) => {
    // Paso 2
    const { id } = req.params
    // Paso 3
    const { nombre } = req.body
    // Paso 4
    const respuesta = await editCanal(id, nombre)
    // Paso 5
    res.send(respuesta)
})

// Paso 1
app.delete('/canal/:id', async (req, res) => {
    // Paso 2
    const { id } = req.params
    // Paso 3
    const respuesta = await deleteCanal(id)
    // Paso 4
    respuesta > 0
        ? res.send({ message: `El canal de id ${id} fue eliminado con éxito`})
        : res.send({ message: 'No existe un canal registrado con ese id'})
})

app.get('*', (req, res) => {
    // Paso 2
    res.send('<center><h1>Esta ruta no existe...</h1> </center>')
})

