import { SinglyLinkedList } from '@j.u.p.iter/singly-linked-list';

export class Queue {
  constructor(private singlyLinkedList: SinglyLinkedList = new SinglyLinkedList) {}

  /**
   * Returns the number of elements 
   *   in the stack
   *
   */
  public getSize() {
    return this.singlyLinkedList.getLength();
  }

  /**
   * Checks if the queue is empty.
   *
   */
  public isEmpty() {
    return this.singlyLinkedList.isEmpty();
  }

  /**
   * Adds element to the 
   *   back of the queue
   *
   */
  public enqueue(element) {
    this.singlyLinkedList.push(element);

    return this;
  }

  /**
   * Removes the front element from the queue.
   *
   */
  public dequeue() {
    return this.singlyLinkedList.shift();
  }

  /**
   * Returns the front element of the queue.
   *
   */
  public getFront() {
    if (this.isEmpty()) { return null; }

    return this.singlyLinkedList.getHead().getValue();
  }

  /**
   * Returns the back element of the queue.
   *
   */
  public getBack() {
    if (this.isEmpty()) { return null; }

    return this.singlyLinkedList.getTail().getValue();
  }

  /**
   * Creates stack from an existing array.
   *
   */
  static fromArray(elements) {
    const singlyLinkedList = SinglyLinkedList.fromArray(elements);

    return new Queue(singlyLinkedList);
  }
}
