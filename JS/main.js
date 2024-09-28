let saludoNombre=''
let montoSolicitar=''
let prestamos=[]


function calcularIntereses(montoSolicitar,motivo,cuotas){
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
    
    
    }return montoConInteres
} 



function crearNuevoPrestamo(){

    while(saludoNombre===''){
        saludoNombre=prompt(`Por favor ingresa su nombre`)
    
        if(saludoNombre===''){
        alert('Por favor ingrese un nombre para comenzar')
        }
    }   

    while(montoSolicitar===''){

        montoSolicitar=prompt(`Bienvenido ${saludoNombre} entraste a tu simulador de prestamos, por favor ingrese el monto del credito a solicitar:`)

        montoSolicitar = Number(montoSolicitar)
   

        if(montoSolicitar===''){
        alert('El campo esta vacio. Por favor ingrese el monto del credito a solicitar')

        }else{
        
        let continuar = true
    
        switch(true){
            case (montoSolicitar>15000):
                alert(`El maximo importe para solicitar es €15.000,00`) 
                continuar = false
                break;

            case(montoSolicitar<=(599)):
                alert(`El minimo para solicitar un prestamo es de €600,00`)
                continuar = false
                break;    
            
            case(isNaN(montoSolicitar)):
                alert(`El ingreso debe ser un numero valido`)
                continuar = false
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
        
        if(motivo===''){
            alert('El campo está vacío. Por favor, ingrese una opción.')
        }else if(motivo!=='a'&&motivo!=='b'&&motivo!=='c'){
            alert(`El ingreso debe ser una opcion valida`)
            motivo=''
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
            break} 
    }
     
    let montoConInteres= calcularIntereses(montoSolicitar,motivo,cuotas)
    let pagoEnCuotas= montoConInteres / cuotas
    

    alert(`Perfecto ${saludoNombre} tu prestamo segun los datos ingresados es el siguiente:

         Monto Solicitado: €${montoSolicitar} 
         Nº Cuotas: ${cuotas} 
         Total con intereses: €${montoConInteres.toFixed(2)}
         Cuota final a pagar: €${pagoEnCuotas.toFixed(2)} `
    )
    return{
        saludoNombre,montoSolicitar,motivo,cuotas,montoConInteres,pagoEnCuotas}
}  
 





function persona(saludoNombre,montoSolicitar,motivo,cuotas,montoConInteres,pagoEnCuotas){
        this.nombre=saludoNombre
        this.montoPrestamo=montoSolicitar
        
        this.cuotas=cuotas
        this.totalConIntereses=montoConInteres
        this.pagoMensual=pagoEnCuotas

        if(motivo==='a'){
            this.motivo='Prestamo Personal'
        }else if(motivo==='b'){
            this.motivo='Prestamo para la compra de coche'
        }else{
            this.motivo='Préstamo para reformas en el hogar'
        }
}
function guardarPersonaEnArray(persona) {
        prestamos.push(persona)

}    

function mostrarHistorialPrestamos(){
    let historial = 'Historial de Préstamos:\n\n';
        prestamos.forEach((prestamo, index) => {
            historial += `Préstamo ${index + 1}:\n` +
                `Nombre: ${prestamo.nombre}\n` +
                `Monto Solicitado: €${prestamo.montoPrestamo}\n` +
                `Motivo: ${prestamo.motivo}\n` +
                `Cuotas: ${prestamo.cuotas}\n` +
                `Total con Intereses: €${Math.floor(prestamo.totalConIntereses)}\n` +
                `Pago Mensual: €${Math.round(prestamo.pagoMensual)}\n\n`
        });
        alert(historial)
}    

function opcionMenu(){
    let continuar= true

    while(continuar){
        
        if(prestamos.length===0||saludoNombre===''){

        saludoNombre = ''
        
        let datosPrestamo=crearNuevoPrestamo()
        
        let nuevaPersona = new persona(
            datosPrestamo.saludoNombre,
            datosPrestamo.montoSolicitar,
            datosPrestamo.motivo,
            datosPrestamo.cuotas,
            datosPrestamo.montoConInteres,
            datosPrestamo.pagoEnCuotas
        )
        guardarPersonaEnArray(nuevaPersona)
    }
        
        let nuevoCalculo = prompt(
            '¿Deseas calcular un nuevo prestamo?' + '\n' + 
            'A) Calcular nuevo prestamo' + '\n' + 
            'B) Ver historial de prestamos'+ '\n' +
            'C) Salir'
        ).toLowerCase()


        switch(nuevoCalculo){

            case 'a':{
                saludoNombre = ''
                break
            }    
            case  'b':  
                mostrarHistorialPrestamos();
                break
            case 'c':
                alert('Gracias por usar el simulador de prestamos')
                continuar= false
                break
            default:
                alert('Por favor ingresa una opcion valida')



            }
    }

}


opcionMenu()





