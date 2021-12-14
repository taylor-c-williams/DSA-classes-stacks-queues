class Stack {
	#list = [];
	push(item) {
		this.#list.push(item);
	}
	pop() {
		return this.#list.pop();
	}
	peek() {
		return this.#list[this.#list.length - 1];
		// return this.#list.at(-1)
	}
	get size() {
		return this.#list.length;
	}
}

lizard;
goose;
fox;

class Queue {
	#list = [];
	enqueue(item) {
		this.#list.unshift(item);
	}

	dequeue() {
		return this.#list.pop();
	}

	hasNext() {
		if (this.#list.length >= 1) {
			return true;
		}
	}
}
