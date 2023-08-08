 const pgp = require('pg-promise')();
 const cn = "postgresql://postgres:Hola12$@localhost:5432/postgres123";
 const db = pgp(cn);

 db.connect()
 .then( ()=>{

    console.log("Conexion Exitosa Postgres");

 })
 .catch( (error)=>{

    console.log(error);

 });

 module.exports = db;