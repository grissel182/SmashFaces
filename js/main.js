
var numeroAlAzar;

var imagenes = [
 "Ana.JPG", "Analy.JPG", 
 "Areli.JPG", "Beatriz.JPG", 
 "Cecilia.JPG", "Claudia.JPG", 
 "Daniela.JPG", "Elisa.JPG", 
 "Evelyn.JPG", "Gabriela.JPG", 
 "Grissel.JPG", "Guadalupe.JPG", 
 "Johana.JPG", "Joyce.JPG", 
 "Ofelia.JPG", "Patricia.JPG", 
 "Sharon.JPG", "Heredia.JPG", 
 "Karen.JPG", "Monica.JPG",  
 "Karla.JPG", "Leslie.JPG", 
 "Mishel.JPG", "Milca.JPG", 
 "Tayde.JPG", "Naibit.JPG", 
 "Nayeli.JPG", "Nelly.JPG", 
 "Reyna.JPG", "Adriana.JPG", 
 "Ruth-Lopez.JPG","Ruth-Vega.JPG",
 "Sandra-Bollo.JPG","Sandra-Diaz.JPG", 
 "Vianey.JPG", "Zazil.JPG"];

 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];

var puntos = 0;
var intentos = 4;
var i=0;

function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};

function desplegarNuevaJugada(){
  // para que se reestablezca intentos a 5
  intentos = 4;

  var tamanoArreglo = nombres.length

  if (tamanoArreglo > 0) {
    numeroAlAzar=enteroRandomEnRango (0, tamanoArreglo);
    var imagen = "fotos/" + imagenes[numeroAlAzar];
    $('#imagenPersona').attr('src', imagen)  
    //si el arreglo tiene elementos hará la funcion  
  } else {
    alert ("Felicidades! Eres una buena compañerita :) ")
    var ganar = "fotos/ganaste.png"
    $('#imagenPersona').attr('src', ganar) 
    //Al ir cortando elementos SPLICE disminuye el largo, al acabarse muestra esto
  }
  
}


$("#paises").change(function(){
  var sede = $(this).val();
  if (sede=="mexico"){
    desplegarNuevaJugada();
  }
  else {
    alert ("Esta no es tu sede, vuelve a intentar")
  }
})

$(document).ready(function(){
  $("#puntos").text(puntos);
    $("#boton").click(function(){
      var nombre =$("#inputNombre").val().toLowerCase();
      console.log("usuario ingresó: " + nombre);

      var nombreAdivinar = nombres[numeroAlAzar].toLowerCase();
      console.log("nombre correcto es: " + nombreAdivinar);

      if (nombre===nombreAdivinar){

        nombres.splice(numeroAlAzar, 1);
        imagenes.splice(numeroAlAzar, 1); 
        puntos+=5;
        $("#puntos").text(puntos);
        //Splice quita el elemento numero de ese array , el 1 es el numero 
        //de elementos que se va a quitar
          //codigo para limpiar el input
          $(":text").each(function(){ 
              $($(this)).val('');
          });
          //cierre de código
        desplegarNuevaJugada();

      } else {
        alert ("Oops! Ese no es su nombre!  \n Tienes " + intentos + " más")
        intentos--;
        //codigo para limpiar el input
          $(":text").each(function(){ 
              $($(this)).val('');
          });
          //cierre de código
        if(intentos <= 0 ) {
          alert ("Continua con otra compañerita")
          nombres.splice(numeroAlAzar, 1);
          imagenes.splice(numeroAlAzar, 1);
          puntos-=1;
          $("#puntos").text(puntos);
          //codigo para limpiar el input
          $(":text").each(function(){ 
              $($(this)).val('');
          });
          //cierre de código
          desplegarNuevaJugada();
        }
      }      
    });

  var win = "fotos/smash.JPG"
    $('#imagenPersona').attr('src', win) //jugada que empieza por default

});



