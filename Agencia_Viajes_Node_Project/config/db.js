// Sequelize es como llamamos a nuestra base de datos de MySQL de tal manera podamos exportar datos del backend 
/*Sequelize es una biblioteca llamada [Mapeo relacional de objetos] (https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) (ORM) que le permite almacenar objetos de JavaScript en una base de datos relacional sin usar el Lenguaje SQL en sí mismo, similar a Mongoose que usamos con MongoDB.
*/ 
/*Sequelize es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.
*/ 
import  Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config()



const db = new Sequelize(process.env.DATABASE_URL,{

    define:{
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle: 10000
    },
    // operatorsAliases: false
    
})

export default db;