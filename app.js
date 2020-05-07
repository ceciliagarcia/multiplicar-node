//Hay tres tipos de requireds
//nativo de node
//const fs = require('fs');
//const fs = require('express');no existe en node es un paquete que se instala
//const fs = require('./fs'); archivos que nosotros escribimos
const argv = require('./config/yargs').argv;
const color = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => console.log(e));

        break;
    default:
        console.log('comando no reconocido');
}
//let data = '';

/*for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}



fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {

    if (err) throw err;

    console.log(`El archivo tabla-${base}.txt ha sido creado!`);
});*/


//console.log(process.argv);
// mandamos parametros desde la terminal
//let argv2 = process.argv;


//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log('limite', argv.limite);