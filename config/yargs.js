// const opts = {
//     descripcion: {
//         alias: 'd',
//         desc: 'Descripcion de la tarea por hacer',
//         demand: true
//     },
//     completado: {
//         alias: 'c',
//         default: true,
//         desc: 'Marca como completado la tarea'
//     }
// }


const descripcion = {
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer',
    demand: true
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea de la lista', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}