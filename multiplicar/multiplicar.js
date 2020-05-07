//const fs = require('fs');
//const fs = require('express');no existe en node es un paquete que se instala
//const fs = require('./fs'); archivos que nosotros escribimos

const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite = 10) => {

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`)
        }

    }
    //let base = 5;
let data = '';

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }



        fs.writeFile(`archivos/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);


        });

    });


}
module.exports = {
    crearArchivo,
    listarTabla
}