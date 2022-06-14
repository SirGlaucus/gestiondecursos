# Desafío - Mi gestión de cursos

En este desafío deberás crear una API REST con Express y el paquete pg para servir el backend de una aplicación tipo CRUD en el lado del cliente.

## Instrucciones

- Descargar el proyecto
- Entrar en la terminal y ubicarse en la carpeta del proyecto
- En la terminal utilizar el comando `npm i`
- Crear la base de datos de postgresql con los comandos en el archivo script.sql
- Preferiblemente tener instalado nodemon
- Con nodemon: `npm run startmon` para iniciar el proyecto. Sin nodemon: `npm start`.
- Entrar en el enlace [http://localhost:3000/](http://localhost:3000/)

### El desafío está basado en lo siguiente

 - API REST
 - POST (CREATE) & GET(READ)
 - PUT (UPDATE) & DELETE (DELETE)
 - PG
 - Postgresql

### Requerimientos

- Crear una ruta POST /curso que reciba un payload desde el cliente con los datos de un nuevo curso y los ingrese a la tabla cursos.
- Crear una ruta GET /cursos que consulte y devuelva los registros almacenados en la tabla cursos.
- Crear una ruta PUT /curso que reciba un payload desde el cliente con los datos de un curso ya existente y actualice su registro en la tabla cursos.
- Crear una ruta DELETE /cursos que reciba el id de un curso como parámetro de la ruta y elimine el registro relacionado en la tabla cursos.
