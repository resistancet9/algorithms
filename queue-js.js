class Queue {
  constructor() {
    this.data = [];
  }

  enq(num) {
    this.data.unshift(num);
  }

  deq() {
    return this.data.pop();
  }

  get() {
    return this.data;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

let queue1 = new Queue();
let queue2 = new Queue();

queue1.enq(20);
queue1.enq(30);
queue1.enq(40);

queue2.enq(60);
queue2.enq(70);

function weave(queue1, queue2) {
  let queue3 = new Queue();

  while (queue1.peek() || queue2.peek()) {
    if (queue1.peek()) {
      queue3.enq(queue1.deq());
    }

    if (queue2.peek()) {
      queue3.enq(queue2.deq());
    }
  }

  console.log(queue3);
  // queue3.get();
}

weave(queue1, queue2);
