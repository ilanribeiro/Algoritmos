const sentenceOne = 'abde';
const sentenceTwo = 'caba';

const first = sentenceOne.split('');
const second = sentenceTwo.split('');

let count = 0;

// version 2
first.map(letter => {
	for (let iy = 0; iy < second.length; iy++) {
		if (letter === second[iy]) {
			count++
			second.splice(iy, 1, 0);
			break
		}
	}
})

// version 1
// for (let ix = 0; ix < first.length; ix++) {
// 	for (let iy = 0; iy < second.length; iy++) {
// 		console.log('ix', ix);
// 		console.log('iy', iy);
// 		if (first[ix] === second[iy]) {
// 			count++
// 			second.splice(iy, 1, 0);
// 			break
// 		}
// 		console.log('count', count);
// 		console.log(second);
// 	}
// }

const changes = first.length - count;
console.log('changes', changes)