let firstWord = "bola";
let secondWord = "casa";

function changesOperations(w1, w2) {
    let count = 0;
 
    // Store the count of characters in your respective position within alphabet
    let charCount = new Array(26);
    for(let i = 0; i < charCount.length; i++) {
        charCount[i] = 0;
    }
     
    // Iterate and compare position in reference to the first letter of alphabet
    for(let i = 0; i < w1.length; i++) {
			const firstLetter = 'a';
			const currentLetter = w1[i];

      charCount[currentLetter.charCodeAt(0) - firstLetter.charCodeAt(0)]++;
		// console.log('i', i);
		// console.log('w1[i]', w1[i]);
		// console.log('w1[i].charCodeAt(0)', w1[i].charCodeAt(0));
		// console.log('a.charCodeAt(0)', 'a'.charCodeAt(0));
		// console.log('charCount', charCount);
		}

		// second string
    // Iterate and compare position in reference to the first letter of alphabet
    // Decrease counting, only existing characters
    for(let i = 0; i < w2.length; i++) {
			const firstLetter = 'a';
			const currentLetter = w2[i];

			let position =  charCount[currentLetter.charCodeAt(0) -
                     firstLetter.charCodeAt(0)]

			if (position > 0)
        charCount[currentLetter.charCodeAt(0) - firstLetter.charCodeAt(0)]--;
			// console.log('i', i);
			// console.log('w2[i]', w2[i]);
			// console.log('w2[i].charCodeAt(0)', w2[i].charCodeAt(0));
			// console.log('a.charCodeAt(0)', 'a'.charCodeAt(0));
			// console.log('charCount', charCount);
    }
    
		// final countdown of all characters occurrences
    for(let i = 0; i < 26; ++i) {
        if (charCount[i] !== 0) {
            count += Math.abs(charCount[i]);
        }
    }
    return count;
}

console.log(changesOperations(firstWord, secondWord));