/* Tome la siguiente dirección IPv4: 128.32.10.1

Esta dirección tiene 4 octetos donde cada octeto es un solo byte (u 8 bits).

    * El primer octeto (128) tiene la representación binaria: 10000000
    * El segundo octeto (32) tiene la representación binaria: 00100000
    * El tercer octeto (10) tiene la representación binaria: 00001010
    * El cuarto octeto (1) tiene la representación binaria: 00000001
    
Entonces 128.32.10.1 == 10000000.00100000.00001010.00000001

Debido a que la dirección IP anterior tiene 32 bits, podemos representarla 
como el número de 32 bits sin signo: 2149583361

Complete la función que toma un número de 32 bits sin signo y devuelve una 
representación de cadena de su dirección IPv4.

Ejemplos
    2149583361 ==> "128.32.10.1"
    32         ==> "0.0.0.32"
    0          ==> "0.0.0.0"
*/

function int32ToIp(int32) {
  //...
}

console.log(int32ToIp(2154959208)); // "128.114.17.104" 
console.log(int32ToIp(0)); // "0.0.0.0"
console.log(int32ToIp(2149583361)); // "128.32.10.1"
console.log(int32ToIp(2 ** 32 - 1)); // "255.255.255.255"