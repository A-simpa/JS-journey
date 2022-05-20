// declare variable use to loop

let hashCount = 0;
let hash = ""

for (; hashCount < 7; hashCount++){
	// yes concatenation works in Javascript
	// another concept used here is called Shadowing
	hash = hash + "#"
	console.log(hash);
}

// learnt that JavaScrpt does not support multiplication of string
// # *  2 = NAN not "##"
