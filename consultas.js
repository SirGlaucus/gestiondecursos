// Paso 1
const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "1234",
    database: "cursos",
    port: 5432,
});

// Funciona
const nuevoCurso = async (curso) => {
    console.log('Consulta prueba')
    const consulta = {
        text: "INSERT INTO cursos(nombre, nivel, fecha, duracion) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [curso.nombre, curso.nivelTecnico, curso.fechaInicio, curso.duracion]
    }
    try {
        const result = await pool.query(consulta)
        return result.rows
    } catch (e) {
        return e
    }
}

// Paso 1
const getCanales = async () => {
    try {
        const result = await pool.query(`SELECT * FROM canales`);
        return result.rows;
    } catch (e) {
        return e;
    }
}

// Paso 1
const editCanal = async (id, nuevoNombre) => {
    try {
        const res = await pool.query(
            `UPDATE canales SET nombre = '${nuevoNombre}' WHERE id = '${id}'
    RETURNING *`
        );
        return res.rows;
    } catch (e) {
        console.log(e);
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
    getCanales,
    editCanal,
    deleteCanal
};