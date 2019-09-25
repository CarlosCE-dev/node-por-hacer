const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,

    }

    listadoPorHacer.push(porHacer);

    guardaDB();

    return porHacer;
}

const getListado = (estado = undefined) => {
    cargarDB();

    if (estado === undefined) {
        return listadoPorHacer;
    } else {
        var estadoLista = Boolean.parseBoolean(estado);
        console.log(estadoLista);
        let filterListado = listadoPorHacer.filter(list => {
            return list.descripcion === estadoLista
        });
        console.log(filterListado);
        return filterListado;
    }

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(list => {
        return list.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(list => {
        return list.descripcion !== descripcion
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}