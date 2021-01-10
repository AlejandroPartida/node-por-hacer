const { rejects } = require('assert');
const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err)
            throw new Error('No se pudo grabar', err);

    });
}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }

}

const getListado = () => {

    cargarDB();

    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {

    cargarDB();

    let newListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (newListado.length === listadoPorHacer.length) {
        console.log('Elemento no encontrado');
        return false
    } else {

        listadoPorHacer = newListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}