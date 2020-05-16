const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {

    // El JSON.stringify lo que hace es pasarlo a un formato json valido
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json')

    } catch (error) {
        listadoPorHacer = [];
    }
}


const getListado = () => {

    cargarDb();
    return listadoPorHacer

}

const crear = (descripcion) => {

    cargarDb()

    let porHacer = {
        descripcion,
        completado: false

    };

    listadoPorHacer.push(porHacer);

    guardarDb();

    return porHacer;
}

const actualizar = (descripcion, completatdo = true) => {
    cargarDb();

    let index = listadoPorHacer.findIndex(tarea =>
        tarea.descripcion === descripcion
    )

    if (index >= 0) {
        listadoPorHacer[index].completado = completatdo;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDb();
    let index = listadoPorHacer.findIndex(tarea =>
        tarea.descripcion === descripcion
    )
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        //delete listadoPorHacer[index]
        guardarDb()
        return true;
    } else {
        return false;
    }

}
module.exports = {

    crear,
    getListado,
    actualizar,
    borrar
}