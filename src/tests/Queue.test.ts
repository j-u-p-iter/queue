import { Queue } from '../.';

describe('Queue', () => {
  it('creates empty queue', () => {
    const queue = new Queue();

    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBeNull();
    expect(queue.getBack()).toBeNull();
  });

  describe('getFront', () => {
    describe('when the queue is empty', () => {
      it('returns null', () => {
        const queue = new Queue();

        expect(queue.getFront()).toBeNull();
      });
    });

    describe('when the queue is not empty', () => {
      it('returns the front element of the queue', () => {
        const queue = Queue.fromArray([
          'Some element',
          'One more element',
        ]);

        expect(queue.getFront()).toBe('Some element');
        expect(queue.getSize()).toBe(2);
      });
    });
  });

  describe('getBack', () => {
    describe('when the queue is empty', () => {
      it('returns null', () => {
        const queue = new Queue();

        expect(queue.getBack()).toBeNull();
      });
    });

    describe('when the queue is not empty', () => {
      it('returns the back element of the queue', () => {
        const queue = Queue.fromArray([
          'Some element',
          'One more element',
        ]);

        expect(queue.getBack()).toBe('One more element');
        expect(queue.getSize()).toBe(2);
      });
    });
  });

  describe('enqueue method', () => {
    it('adds element to the back of the queue', () => {
      const queue = new Queue();

      expect(queue.getFront()).toBe(null);
      expect(queue.getBack()).toBe(null);

      queue.enqueue('Some element');

      expect(queue.getFront()).toBe('Some element');
      expect(queue.getBack()).toBe('Some element');

      queue.enqueue('One more element');

      expect(queue.getFront()).toBe('Some element');
      expect(queue.getBack()).toBe('One more element');
    });
  });

  describe('dequeue method', () => {
    it('removes the front element of the queue', () => {
      const queue = Queue.fromArray([
        'Some element',
        'One more element',
      ]);

      expect(queue.getFront()).toBe('Some element');
      expect(queue.getBack()).toBe('One more element');

      queue.dequeue();

      expect(queue.getFront()).toBe('One more element');
      expect(queue.getBack()).toBe('One more element');
    });
  });

  describe('clear method', () => {
    it('clears the queue', () => {
      const queue = Queue.fromArray(['Some element', 'One more element']);

      expect(queue.getSize()).toBe(2);

      queue.clear();

      expect(queue.getSize()).toBe(0);
    });
  });
});
