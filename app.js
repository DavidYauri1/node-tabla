
const { option } = require('yargs');
const { crearArchivo} = require('./helpers/multiplicar');
const  argv = require('./config/yargs');




console.clear();

console.log(process.argv);
console.log(argv);

console.log('base:yargs',argv.base);



//const base = 8;

crearArchivo(argv.b,argv.l)  
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err =>  console.log(err));
