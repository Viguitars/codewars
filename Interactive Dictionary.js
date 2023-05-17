/* cSpell:disable */
/* In this kata, your job is to create a class Dictionary which you can add 
words to and their entries. Example:

const d = new Dictionary();

d.newEntry('Apple', 'A fruit that grows on trees');

console.log(d.look('Apple'));
A fruit that grows on trees

console.log(d.look('Banana'));

Can't find entry for Banana
Good luck and happy coding! */

class Dictionary {
	constructor() {
		this.entries = {};
	}

	newEntry(key, value) {
		this.entries[key] = value;
	}

	look(key) {
		if (key in this.entries) {
			return this.entries[key];
		}

		return `Can't find entry for ${key}`;
	}
}

const d = new Dictionary();

d.newEntry('Apple', 'A fruit that grows on trees');

console.log(d.look('Apple'));
// A fruit that grows on trees

console.log(d.look('Banana'));
