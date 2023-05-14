import { SinglyLinkedList } from '@j.u.p.iter/singly-linked-list';

/**
 * The Queue implementation is based on SinglyLinkedList.
 *   Adding to the top of the queue, we are actually adding the 
 *     element to the end of the list.
 *
 *   Removing from the queue, we are removing the first added element
 *     to the list - the first element in the list.
 *
 *   We don't remove element from the end of the list instead
 *     since it's more performant operation for the SinglyLinkedList. Removing from the end
 *     we have to iterate through the whole list, starting from the head.
 *
 *   We don't need to do this iteration, removing or adding element from/to the beginning of the list.
 *
 */

export class Queue {
  constructor(private singlyLinkedList: SinglyLinkedList = new SinglyLinkedList) {}

  /**
   * Clears the stack
   *
   */
  public clear() {
    this.singlyLinkedList.clear(); 
  }

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
