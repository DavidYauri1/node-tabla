const fs = require('fs');




const crearArchivo = async ( base = 5 , listar=false) =>{
    try {

        let salida ='';
       
        
       
    
    for( let i =1 ; i <=10 ; i++ ) {
        salida += `${base }x ${i}= ${base * i}\n`;
    } 
    if (listar) {
        console.log('================');
        console.log(' Tabla  del :',base );
        console.log('==========');
        console.log(salida);
    }      
   
    fs.writeFileSync(`./salida/tabla${base}.txt`,salida);
    //
    //fs.writeFile(`tabla${base}.txt`,salida , (err) => {
    //    if(err) throw err;
    //    console.log(`tabla${base}.txt`);
    //})
    
    return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports ={
    crearArchivo    
}