let montoSolicitar 
let motivo 
let cuotas 

let botonCalcular = document.querySelector("#botonCalcular");
let resultadoPrestamo = document.querySelector("#resultado");

botonCalcular.addEventListener("click", function (e) {
  e.preventDefault()

  montoSolicitar = Number(document.querySelector("#importe").value);

  motivo = document.querySelector("#motivo").value;

  cuotas = Number(document.querySelector("#cuotas").value);

  prestamo();
});

function calcularInteres(
  motivo__prestamo__personal,
  motivo__compra__coche,
  motivo__reformas__hogar,
  cuotas
) {
  if (cuotas <= 6) {
    return motivo__prestamo__personal;
  } else if (cuotas >= 7 && cuotas <= 24) {
    return motivo__compra__coche;
  } else if (cuotas >= 24 && cuotas <= 48) {
    return motivo__reformas__hogar;
  }
}

function interesPrestamo(motivo, cuotas) {
  switch (motivo) {
    case "motivo__prestamo__personal":
      return calcularInteres(1.1, 1.15, 1.2, cuotas);
    case "motivo__compra__coche":
      return calcularInteres(1.3, 1.35, 1.35, cuotas);
    case "motivo__reformas__hogar":
      return calcularInteres(1.2, 1.25, 1.3, cuotas);
  }
}

function prestamo() {
  let interes = interesPrestamo(motivo, cuotas)
let resultado =
    
`<h1>Los resultados para tu prestamo son:</h1>
   <ul>
    <li class="montoSolicitado">Monto a solicitar:<strong>€${montoSolicitar}</strong></li>
    <li class="numeroCuotas">Número de cuotas:<strong>${cuotas}</strong></li>
    <li class="totalConInteres">Total del interés a pagar:<strong>€${(
        montoSolicitar * interes -
        montoSolicitar
      ).toFixed(2)}</strong></li>
    <li class="valorFinalCuota">Valor final de la cuota:<strong>€${(montoSolicitar * interes) / cuotas}</strong></li>
</ul>`

resultadoPrestamo.innerHTML =resultado

}









/* 
let calcularPrestamo(montoSolicitar,motivo,cuotas)=>{
    return(prestamoFinal)
}
 */



/* `Perfecto ${saludoNombre}, tu préstamo queda de la siguiente manera:\n` +
    `Monto a solicitar: €${montoSolicitar}\n` +
    `Número de cuotas: ${cuotas}\n` +
    `Total del interés a pagar: €${(
      montoSolicitar * interes -
      montoSolicitar
    ).toFixed(2)}\n` +
    `Valor final de la cuota: €${(montoSolicitar * interes) / cuotas}`
  ); */



















/* let saludoNombre='' 

/* while(saludoNombre===''){
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


function calcularInteres (interesA,interesB,interesC,cuotas){
    if(cuotas<=6){
            return interesA
        }else if(cuotas>=7&&cuotas<=24){
            return interesB
        }else if (cuotas>=24&&cuotas<=48){
            return interesC
        }
}

function interesPrestamo(motivo,cuotas){
    switch(motivo){
        case 'a':
            return calcularInteres(1.10,1.15,1.20,cuotas);
        case 'b':
            return calcularInteres(1.30,1.35,1.35,cuotas);  
        case 'c':
            return calcularInteres(1.20,1.25,1.30,cuotas);  
    }
    
}

function prestamo(interesPrestamo,cuotas,montoSolicitar){
    let interes=interesPrestamo(motivo,cuotas)
        return(
            `Perfecto ${saludoNombre}, tu préstamo queda de la siguiente manera:\n` +
            `Monto a solicitar: €${montoSolicitar}\n` +
             `Número de cuotas: ${cuotas}\n` +
            `Total del interés a pagar: €${((montoSolicitar * interes) - montoSolicitar).toFixed(2)}\n` +
            `Valor final de la cuota: €${((montoSolicitar * interes) / cuotas)}`
        )
}


    



 */

/* 
   interesPrestamo (motivo){
        return()=>{
            if(motivo=='a'){
                interesA
            }else if(motivo=='b'){
                interesB
            }else if(motivo=='c'){
                interesC
            }
            }
    }

    function interesA (cuotas) {
    return()=> {
        if(cuotas<=6){
            1.10
        }else if(cuotas>=7&&cuotas<=24){
            1.15
        }else if (cuotas>=24&&cuotas<=48){
            1.20
        }
    }
    }
    function interesB (cuotas) {
    return()=> {
        if(cuotas<=6){
            1.20
        }else if(cuotas>=7&&cuotas<=24){
            1.25
        }else if (cuotas>=24&&cuotas<=48){
            1.30
        }
    }
    }
    function interesC (cuotas) {
    return()=> {
        if(cuotas<=6){
            1.25
        }else if(cuotas>=7&&cuotas<=24){
            1.30
        }else if (cuotas>=24&&cuotas<=48){
            1.35
        }
    }
    }
    



 */

/*     
    function intereses (motivo) {
        if(motivo=='a'){
            return()=> 
        }
        
        
    
        
        
        
        return()=> {
            if(cuotas<=6){
                1.1
            }else if(cuotas>=7&&cuotas<=24){
                1.15
            }else if (cuotas>=24&&cuotas<=48){
                1.2
            }
        }
    }

    
    
}





 */

/* function prestamo(){
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
 */
