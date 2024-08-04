    // Importamos Sequelize para llamar nuestra base de Datos 
    import Sequelize from "sequelize";
    import db from "../config/db.js";

    export const Viaje= db.define('viajes',{
    titulo: {
        type: Sequelize.STRING
    },
    Precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
    })
