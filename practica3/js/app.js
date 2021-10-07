var numero = prompt("De cual numero desea la tabla?: ")

document.write('<h1 align = "center">Tabla de multiplicar del '+numero+'</h1>');

document.write('<table border="1" align = "center">');
for(let i = 1; i<=10; i++) {
    document.write('<tr>');
    document.write('<th>'+ numero +'</th>');
    document.write('<th>X</th>');
    document.write('<th>'+ i +'</th>');
    document.write('<th>=</th>');
    document.write('<th>'+ (numero*i) +'</th>');
    document.write('</tr>');
}
document.write('</table>');