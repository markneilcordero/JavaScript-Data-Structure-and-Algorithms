class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = new Node("head");
	}

	find(item) {
		let currNode = this.head;
		while (currNode.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	}

	insert(newElement, item) {
		let newNode = new Node(newElement);
		let current = this.find(item);
		newNode.next = current.next;
		current.next = newNode;
	}

	findPrevious(item) {
		let currNode = this.head;
		while (!(currNode.next == null) && (currNode.next.element != item)) {
			currNode = currNode.next;
		}
		return currNode;
	}

	remove(item) {
		let prevNode = this.findPrevious(item);
		if (!(prevNode.next == null)) {
			prevNode.next = prevNode.next.next;
		}
	}

	display() {
		let currNode = this.head;
		while (!(currNode.next == null)) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
}

let cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log("\n");
cities.remove("Carlisle");
cities.display();