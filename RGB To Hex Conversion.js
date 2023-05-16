/* cSpell:disable */
/* The rgb function is incomplete.Complete it so that passing in RGB decimal 
values will result in a hexadecimal representation being returned.Valid 
decimal values for RGB are 0 - 255. Any values that fall out of that range 
must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 
will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */

// decimal = primera cifra hexadecimal × 16 + segunda cifra hexadecimal
// a=10, b=11, c=12, d=13, e=14 y f=15.

function rgb(r, g, b) {
  const HEX_DIGITS = "0123456789ABCDEF";
  const channels = [r, g, b];
  let convertedHex = [];

  for (let i = 0; i < channels.length; i++) {
    let value = Math.max(0, Math.min(255, channels[i]));
    let aux1 = Math.floor(value / 16);
    let aux2 = value % 16;
    convertedHex.push(aux1, aux2);
  }
  return convertedHex.map((item) => HEX_DIGITS[item]).join("");
}

console.log(rgb(0, 0, 0)); // 000000
console.log(rgb(0, 0, -20)); // 000000
console.log(rgb(300, 255, 255)); // FFFFFF
console.log(rgb(173, 255, 47)); // ADFF2F
