const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const ruta = path.join(__dirname, 'formulario.html')
    res.sendFile(ruta)
})

app.post('/canal', async (req, res) => {
    // Paso 4
    const { nombre } = req.body
    // Paso 5
    const respuesta = await nuevoCanal(nombre)
    // Paso 6
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

app.listen(3000, () => {
    console.log('Servidor activo en el puerto 300')
})

app.post('/curso', async (req, res) => {
    // Paso 4
    const { nombre } = req.body
    // Paso 5
    const respuesta = await nuevoCanal(nombre)
    // Paso 6
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

app.listen(3000, () => {
    console.log('Servidor activo en el puerto 300')
})