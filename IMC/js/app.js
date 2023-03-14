/* datos de los inputs */
const datos ={
    nombre: '',
    estatura: '',
    peso: ''
}
/* seleccionamos los inputs */
const nombre = document.querySelector('#nombre');
const estatura = document.querySelector('#estatura');
const peso = document.querySelector('#peso');
const formulario = document.querySelector('#formulario');
/* leemos los inputs */
nombre.addEventListener('input',leerInput);
estatura.addEventListener('input',leerInput);
peso.addEventListener('input',leerInput);

/* detectar el evento de submit */
formulario.addEventListener('submit', function(evento){


    
    evento.preventDefault();

   
/*     console.log('enviando formulario'); */

   //validar formulario

   const {nombre,estatura,peso} = datos;

  if(nombre == '' || estatura == '' || peso == ''){

        mostrarError('Todos los campos son obligatorios');


       

       return;
       

  }
   //alerta de envio exitos
   envioExitoso('Exitos al enviar el formulario');

   imprimirResultado()






   //Enviar Formulario

  /*  console.log('Enviado Formulario'); */
})

function leerInput(e){
    datos[e.target.id] = e.target.value;
    

}


function imprimirResultado() {
    const nombre = datos.nombre;
    const estatura = datos.estatura;
    const peso = datos.peso;

    document.getElementById("resultadonombre").innerText = `Tu nombre es: ${nombre}`;
    document.getElementById("resultadoestatura").innerText = `Tu estatura es: ${estatura} m`;
    document.getElementById("resultadopeso").innerText = `Tu peso es: ${peso} k`;

    const resultado = peso / (estatura * estatura);




    if(resultado < 18.5){
        document.getElementById("resultado").innerText = `Tu IMC es: ${resultado}  `;
        document.getElementById("resultadomensaje").innerText = 'Eres un persona de un imc bajo';



    }
    if(resultado > 18.5 && resultado < 24.9 ){
        document.getElementById("resultado").innerText = `Tu IMC es: ${resultado}  `;
        document.getElementById("resultadomensaje").innerText = 'Tu IMC es Normal';



    }
    if(resultado > 25 && resultado < 29.9 ){
        document.getElementById("resultado").innerText = `Tu IMC es: ${resultado}  `;
        document.getElementById("resultadomensaje").innerText = 'Tu IMC es superior al normal (tienes Sobrepeso)';



    }
    if(resultado > 30  ){
        document.getElementById("resultado").innerText = `Tu IMC es: ${resultado}  `;
        document.getElementById("resultadomensaje").innerText = 'Tu IMC es muy superior al normal (Tienes Obesidad)';



    }
}

//Funcion de mostrar error

function mostrarError(mensaje){
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');


    formulario.appendChild(error);//agregando el mensaje en nuestro html
/*     console.log(error); */


//desaparezca la alerta despues de cierto tiempo


   setTimeout(() =>{
    error.remove();


    }, 1000);

}


function envioExitoso(mensaje){
    const exito = document.createElement('p');
    exito.textContent = mensaje;

    
    exito.classList.add('exito');


    formulario.appendChild(exito);//agregando el mensaje en nuestro html
/*     console.log(error); */


//desaparezca la alerta despues de cierto tiempo


   setTimeout(() =>{
     exito.remove();


    }, 1000);

}
