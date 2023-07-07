/* cSpell:disable */
/* ROT13 is a simple letter substitution cipher that replaces a letter with the 
letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar 
cipher.

Create a function that takes a string and returns the string ciphered with 
Rot13. If there are numbers or special characters included in the string, they 
should be returned as they are. Only letters from the latin/english alphabet 
should be shifted, like in the original Rot13 "implementation". */

function rot13(message) {
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	const rot13Alphabet = [
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
	];

	return message
		.split('')
		.map((item) => rot13Alphabet[alphabet.indexOf(item)] || item)
		.join('');
}

console.log(rot13('test')); // "grfg"
console.log(rot13('Test')); // "Grfg"
console.log(
	rot13(
		`¿Como se puede distinguir a un extrovertido de un introvertido en la 
		NSA ? Ra ybf nfprafberf, ry rkgebiregvqb zven ybf mncngbf qr ybf BGEBF 
		gvcbf.`
	)
);
/* 
"¿Pbzb fr chrqr qvfgvathve n ha rkgebiregvqb qr ha vagebiregvqb ra yn AFN? 
En los ascensores, el extrovertido mira los zapatos de los OTROS tipos." */
