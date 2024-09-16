let saludoNombre=''
let montoSolicitar=''
let salario=''


while(saludoNombre===''){
    saludoNombre=prompt(`Por favor ingresa su nombre`)
    if(saludoNombre===''){
        alert('Por favor ingrese un nombre para comenzar')
    }
}

while(montoSolicitar===''){

    montoSolicitar=prompt(`Bienvenido ${saludoNombre} entraste a tu gestor de prestamos, por favor ingrese el monto del credito a solicitar:`)

    montoSolicitar = Number(montoSolicitar)
   

    if(montoSolicitar===''){
        alert('El campo esta vacio. Por favor ingrese el monto del credito a solicitar')

    }else{
        
        let continuar = true;
    
        switch(true){
            case (montoSolicitar>15000):
                alert(`El maximo importe para solicitar es €15.000,00`) 
                continuar = false;
                break;

            case(montoSolicitar<=(599)):
                alert(`El minimo para solicitar un prestamo es de €600,00`)
                continuar = false;
                break;    
            
            case(isNaN(montoSolicitar)):
                alert(`El ingreso debe ser un numero valido`)
                continuar = false;
                break;
    }
    if(!continuar){
        montoSolicitar='';
    }
    } 
}

let motivo=''

while(motivo===''){


    motivo=prompt('Escriba la opcion por la que solicita su prestamo'+'\n'+
        'A)Prestamo personal'+'\n'+
        'B)Prestamo para la compra de un coche'+'\n'+
        'C)Prestmo para reformas en el hogar'+'\n').toLowerCase()
        
    
        switch(motivo){
            case 'a':
            case 'b':
            case 'c':
                break;

            case (motivo===''):
                alert('El campo esta vacio.')
                break;

            case (motivo.length===(1)):
                alert('El campo debe tener solo una opcion')
                break;
        
            default:
                alert(`El ingreso debe ser una opcion valida`)
        }


}

let cuotas=''

while(cuotas ===''||cuotas<3||cuotas>48|| isNaN(cuotas)){

    cuotas=prompt(`Por favor ingrese la cantidad de cuotas en la que desea cancelar el prestamo:`)

    cuotas=Number(cuotas)

    switch(true){

     case(cuotas===''||isNaN(cuotas)):
        alert(`El ingreso debe ser un numero valido`)
        cuotas=''
        break;

     case(cuotas>48):
        alert(`El maximo de cuotas para cancelar su prestamos 48 cuotas`)
        cuotas=''
        break;

     case(cuotas<3):
        alert(`El minimo de cuotas para cancelar su prestamos 3 cuotas`)
        cuotas=''
        break;
    default:
        break;
    } 
}


function prestamo(){
    let montoConInteres=''
    
    switch(motivo){
        
        case 'a' : 
            if(cuotas<=6){
                montoConInteres=montoSolicitar * 1.050
            }else if (cuotas>=7&&cuotas<=24){
                montoConInteres=montoSolicitar * 1.060
            }else{
                montoConInteres=montoSolicitar * 1.090
            }
            break;    
        case 'b' : 
            if(cuotas<=6){
                montoConInteres=montoSolicitar * 1.065
            }else if (cuotas>=7&&cuotas<=24){
                montoConInteres=montoSolicitar * 1.075
            }else{
                montoConInteres=montoSolicitar * 1.105
            }
            break;
        case 'c' : 
            if(cuotas<=6){
                montoConInteres=montoSolicitar * 1.050
            }else if (cuotas>=7&&cuotas<=24){
                montoConInteres=montoSolicitar * 1.060
            }else{
                montoConInteres=montoSolicitar * 1.1
            }
            break;
    
    
    }

    let pagoEnCuotas= montoConInteres / cuotas
    

    alert(`Perfecto ${saludoNombre} tu prestamo segun los datos ingresados es el siguiente:

         Monto Solicitado: €${montoSolicitar} 
         Nº Cuotas: ${cuotas} 
         Total con intereses: €${montoConInteres.toFixed(2)}
         Cuota final a pagar: €${pagoEnCuotas.toFixed(2)} `)


}

prestamo()
















