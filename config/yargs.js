descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


filter = {
    default: undefined,
    alias: 'd',
    desc: 'Filtrar las tareas por true y false'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar un elemento por hacer', {
        descripcion
    })
    .command('listar', 'Filtrar las tareas por hacer', {
        filter
    })
    .help()
    .argv;

module.exports = { argv }