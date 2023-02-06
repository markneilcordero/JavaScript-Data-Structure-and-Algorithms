function generateArr() {
	let num = Math.pow(10, 6);
	let myArr = [];
	for (let x = 1; x < num; x++) {
		myArr.push(x);
	}
	return myArr;
}

function shuffleArr(arr) {
	for (let x = arr.length-1; x > 0; x--) {
		let y = Math.floor(Math.random() * (x + 1));
		let z = arr[x];
		arr[x] = arr[y];
		arr[y] = z;
	}
	return arr;
}

function generateRandomNumber() {
	let min = 1;
	let max = Math.pow(10, 6);
	let rand = Math.floor(Math.random() * (max - min + 1)) + min;
	return rand;
}

let position = 0;

function seqSearch(arr, data) {
	for (let x = 0; x < arr.length; x++) {
		if (arr[x] == data) {
			position = x;
			return true;
		}
	}
	return false;
}

let arr = generateArr();
let newArr = shuffleArr(arr);
let randNum = generateRandomNumber();
console.log("Number to search for: " + randNum);
let linearSearch = seqSearch(newArr, randNum);
if (linearSearch == true) {
	console.log(randNum + " is in the array at position " + position);
} else {
	console.log(randNum + " is not in the array");
}