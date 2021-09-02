//función que trabaja como manejador de eventos

function init() {
    //Ingresar datos a convertir
    var operacion1 = prompt("Ingrese la cantidad de metros", "");
    var operaciones = document.getElementById("operaciones");
    var resultado = document.getElementById("resultado");
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

    operaciones.innerHTML = contenido;

    var opciones = document.getElementsByTagName("a");

    for (let i = 0; i < opciones.length; i++) {
        switch (i) {
            case 0:
                opciones[i].onclick = function () {
                    resultado.innerHTML = "";
                }
                break;
        
            default:
                break;
        }
    }
}

window.onload = init();