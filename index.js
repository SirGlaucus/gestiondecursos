const express = require('express')
const path = require('path')
const app = express()

// Exportar funciones
const { nuevoCurso, getCursos, editarCurso, deleteCurso } = require('./consultas')

app.use(express.json()) // Ya no es necesario utilizar el body-parse, con esta linea de codigo basta

// Leer pagina principal
app.get('/', (req, res) => {
    const ruta = path.join(__dirname, 'index.html')
    res.sendFile(ruta)
})

// Agregar curso
app.post('/curso', async (req, res) => {
    const datosCurso = req.body
    const respuesta = await nuevoCurso(datosCurso)
    res.send(respuesta)
})

// Leer cursos
app.get('/cursos', async (req, res) => {
    const respuesta = await getCursos()
    res.send(respuesta)
})

// Editar curso
app.put('/curso/:id', async (req, res) => {
    const datos = req.body
    const { id } = req.params
    const respuesta = await editarCurso(datos, id)
    res.send(respuesta)
})

// Eliminar curso
app.delete('/curso/:id', async (req, res) => {
    const { id } = req.params
    const respuesta = await deleteCurso(id)
    if (respuesta > 0) {
        res.send({ message: `El canal de id ${id} fue eliminado con éxito` })
    } else {
        res.send({ message: 'No existe un canal registrado con ese id' })
    }
})

// Cualquier otra ruta dara error
app.get('*', (req, res) => {
    res.send('<center><h1>Esta ruta no existe...</h1></center>')
})

// Activar servidor
app.listen(3000, () => {
    console.log('Servidor activo en el puerto 3000')
})