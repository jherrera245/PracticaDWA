//función que trabaja como manejador de eventos

function init() {
    //Ingresar datos a convertir
    var operacion = leerNumeroPositivo("Ingrese la cantidad de metros");
    var operaciones = document.getElementById("operaciones");
    var resultado = document.getElementById("resultado");

    operaciones.innerHTML = generandoMenuOpciones();

    var opciones = document.getElementsByTagName("a");

    //Seleccionamos una operacion dada una opcion
    for (let i = 0; i < opciones.length; i++) {
        switch (i) {
            case 0:
                opciones[i].onclick = function () {
                    resultado.innerHTML = operacion + " metros equivale a " + parseFloat(operacion * 3.28084).toFixed(2) + " pies";
                }
                break;
            case 1:
                opciones[i].onclick = function () {
                    resultado.innerHTML = operacion + " metros equivale a " + parseFloat(operacion * 39.37008).toFixed(2) + " pulgadas";
                }
                break;
            case 2:
                opciones[i].onclick = function () {
                    resultado.innerHTML = operacion + " metros equivale a " + parseFloat(operacion * 1.09361).toFixed(2) + " yardas";
                }
                break;
            default:
                resultado.innerHTML = "Ha ocurrido un error inesperado";
                break;
        }
    }
}

window.onload = init();

function generandoMenuOpciones() {
    var contenido = "";
    contenido += "<header>\n";
    contenido += "\t<h1> Calcular </h1>\n";
    contenido += "</header>\n";

    contenido += "<nav>\n";
    contenido += "\t<ul>\n";
    contenido += "\t\t<li>\n";
    contenido += "\t\t\t<a href = \"javascript:void(0)\"><button type=\"button\">Pies</button></a>\n";
    contenido += "\t\t</li>\n";
    contenido += "\t\t<li>\n";
    contenido += "\t\t\t<a href = \"javascript:void(1)\"><button type=\"button\">Pulgadas</button></a>\n";
    contenido += "\t\t</li>\n";
    contenido += "\t\t<li>\n";
    contenido += "\t\t\t<a href = \"javascript:void(2)\"><button type=\"button\">Yardas</button></a>\n";
    contenido += "\t\t</li>\n";
    contenido += "\t</ul>\n";
    contenido += "</nav>\n";

    return contenido;
}

//solo positivos
//esta funcion dara lectura a un valor desde un prompont
function leerNumeroPositivo(mensaje) {
    var read  = 0;
    //repetir esta instrucción hasta ingresar un numero positivo
    do{
        read = parseFloat(prompt(mensaje, ""));
    }while (read<0 || isNaN(read));
    return read;
}