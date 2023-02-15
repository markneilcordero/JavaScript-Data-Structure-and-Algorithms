function Array_DSA() {
	this.dataStore = [1, 3, 5, 7, 8];
	this.traverseOperation = traverseOperation;
	this.insertOperation = insertOperation;
	this.deleteOperation = deleteOperation;
	this.searchOperation = searchOperation;
	this.updateOperation = updateOperation;
}

function traverseOperation() {
	let arrayLength = this.dataStore.length;
	for (let x = 0; x < arrayLength; x++) {
		console.log(this.dataStore[x]);
	}
}

function insertOperation(element, position) {
	let arrayLength = this.dataStore.length;
	for (let x = arrayLength; x > position; x--) {
		this.dataStore[x] = this.dataStore[x - 1];
	}
	this.dataStore[position] = element;
}

function deleteOperation(element) {
	let newArray = [];
	for (let x = 0; x < this.dataStore.length; x++) {
		if (this.dataStore[x] !== element) {
			newArray.push(this.dataStore[x]);
		}
	}
	this.dataStore = [];
	for (let y = 0; y < newArray.length; y++) {
		this.dataStore[y] = newArray[y];
	}
}

function searchOperation(element) {
	for (let x = 0; x < this.dataStore.length; x++) {
		if (element == this.dataStore[x]) {
			x += 1;
			console.log("Found element at position: " + x);
		}
	}
}

function updateOperation(element, position) {
	for (let x = 0; x < this.dataStore.length; x++) {
		if (x == position-1) {
			this.dataStore[x] = element;
		}
	}
}

let myObj = new Array_DSA();
myObj.traverseOperation();
myObj.insertOperation(10, 3);
myObj.deleteOperation(5);
myObj.traverseOperation();
myObj.searchOperation(5);
myObj.updateOperation(10, 3);
myObj.traverseOperation();