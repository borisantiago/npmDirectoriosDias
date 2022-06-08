const fs = require('fs');

//año
const fechaHora = new Date();
var anio_calculado = fechaHora.getFullYear();

console.log("Anio actual: "+anio_calculado);

if(fs.existsSync("TAREA")){
    console.log("El directorio ya fue creado");
}else{
    fs.mkdir("TAREA", (err)=>{
        if(err){
            console.log(err.message);
        }
        console.log("Directorio creado");
    }); 
    
        for(var i= 2017; i<=anio_calculado; i++){
            console.log(i);
            fs.mkdir('TAREA\\'+i, (err)=>{
                
            })

        const meses= ['Enero', 'Febrero', ' Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
            for(var j=0; j<meses.length; j++){
                fs.mkdir('TAREA\\'+i+'\\'+meses[j],(error)=>{
                    
                })

                numberMonth = calcularDia(i, j);
                for(var k=1; k<=numberMonth; k++){
                    fs.writeFile('TAREA\\'+i+'\\'+meses[j]+'\\'+k.toString()+'.txt', ' ',(error)=>{

                    });
                }
            }
        
        }
}

function calcularDia(year, month){
    var isLeap = ((year%4)==0 && ((year%100) != 0 || (year%400) == 0));
    return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}