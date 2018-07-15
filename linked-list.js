class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

let newNode = new Node(22, null);

class LinkedList {
	constructor() {
		this.head = null;
	}
}

console.log(new LinkedList());
