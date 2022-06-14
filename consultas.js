// Paso 1
const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "1234",
    database: "cursos",
    port: 5432,
});

const mostrarErrores = (error) => {
    console.log("Error código: " + error.code)
    console.log("Detalle del error: " + error.detail)
    console.log("Tabla originaria del error: " + error.table)
    console.log("Restricción violada en el campo: " + error.constraint)
}

// Funciona
const nuevoCurso = async (curso) => {
    const consulta = {
        text: "INSERT INTO cursos(nombre, nivel, fecha, duracion) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [curso.nombre, curso.nivelTecnico, curso.fechaInicio, curso.duracion]
    }
    try {
        const result = await pool.query(consulta)
        return result.rows
    } catch (e) {
        mostrarErrores(e)
        return e;
    }
}

// Funciona
const getCursos = async () => {
    try {
        const result = await pool.query(`SELECT id, nombre, nivel, TO_CHAR(fecha, 'dd-mm-yyyy') AS fecha, duracion FROM cursos`);
        console.log(result.rows)
        return result.rows;
    } catch (e) {
        mostrarErrores(e)
        return e;
    }
}

// Funciona
const editarCurso = async (curso, id) => {
    const consulta = {
        text: "UPDATE cursos SET nombre = $1, nivel = $2, fecha = $3, duracion = $4 WHERE id = $5 RETURNING *",
        values: [curso.nombre, curso.nivelTecnico, curso.fechaInicio, curso.duracion, id]
    }
    try {
        const res = await pool.query(consulta)
        return res.rows;
    } catch (e) {
        mostrarErrores(e)
        return e;
    }
}

// Paso 1
const deleteCanal = async (id) => {
    try {
        const result = await pool.query(`DELETE FROM canales WHERE id =
    '${id}'`);
        return result.rowCount;
    } catch (e) {
        return e;
    }
}

// Paso 2
module.exports = {
    nuevoCurso,
    getCursos,
    editarCurso,
    deleteCanal
};