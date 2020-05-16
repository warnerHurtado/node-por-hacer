const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer!'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualiza la tarea por hacer!'

        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completada la tarea!'
        }
    }).command('borrar', 'Elimina la tarea que le específiqumos', {
        descripcion: {
            demand: true,
            alias: 'd',
            descj: 'Eliminar una tarea!'
        }
    })
    .help()
    .argv;




/**
 * Estoy exportando
 */
module.exports = {

    argv
}