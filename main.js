// DEFINIMOS LAS VARIABLES DE LAS OPERACIONES 

var operandoa;
var operandob;
var operacion;


// LE DAMOS A CADA CONSTANTE LOS VALORES DENTRO DEL DOCUMENTO HTML


    var resultado = document.getElementById('resultado');
    var punto = document.getElementById("punto")
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var reset = document.getElementById('reset')

// LE OTORGAMOS A CADA ELEMENTO NUMERICO UN ONCLICK

reset.onclick = function(){
    resultado.value = "0";
    limpiar();
}
cero.onclick = function (e){
    resultado.value = resultado.value + "0";
}
uno.onclick = function (e){
    resultado.value = resultado.value + "1";
}
dos.onclick = function (e){
    resultado.value = resultado.value + "2";
}
tres.onclick = function (e){
    resultado.value = resultado.value + "3";
}
cuatro.onclick = function (e){
    resultado.value = resultado.value + "4";
}
cinco.onclick = function (e){
    resultado.value = resultado.value + "5";
}
seis.onclick = function (e){
    resultado.value = resultado.value + "6";
}
siete.onclick = function (e){
    resultado.value = resultado.value + "7";
}
ocho.onclick = function (e){
    resultado.value = resultado.value + "8";
}
nueve.onclick = function (e){
    resultado.value = resultado.value + "9";
}
punto.onclick = function (e){
    resultado.value = resultado.value + "." ;
}

// DEFINIMOS LAS OPERACIONES

suma.onclick = function(e){
    operandoa = resultado.value;
    operacion = "+";
    
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.value;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.value;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.value;
    operacion = "/";
    limpiar(); 
}

igual.onclick = function(e){
    operandob = resultado.value;
    resolver();
}

function limpiar(){
    resultado.value = "";
  }

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        if (operandob != 0){
        res = parseFloat(operandoa) / parseFloat(operandob);
        } else {
            alert("¡Error! No se puede dividir por 0")
        }break;
    }

    resetear();
    resultado.value = res;
    }