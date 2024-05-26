export class Stack<T> {
  private stack: T[] = [];

  public get isEmpty() {
    return this.stack.length === 0;
  }

  public get last() {
    if (this.isEmpty) return null;

    return this.stack[this.stack.length - 1];
  }

  public delete(item: T) {
    const index = this.stack.findIndex((curItem) => curItem === item);

    if (index !== -1) {
      this.stack.splice(index, 1);
    }
  }

  public push(item: T) {
    this.stack.push(item);
  }
}
