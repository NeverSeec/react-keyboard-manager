import { EVENT_TYPE } from "../config/KeyboardManager.config";

import {
  KeyCode,
  KeyboardCallbackRef,
  StackStorage,
  KeyboardRemoveParams,
  KeyboardAddParams,
} from "../types/KeyboardManager.types";

import { Stack } from "./Stack";

export class KeyboardManager {
  private stackStorage: StackStorage = {};

  private getStack = <Key extends KeyCode>(key: Key) => {
    const stack = this.stackStorage[key];

    if (stack) return stack;

    const newStack = new Stack<KeyboardCallbackRef>();

    this.stackStorage[key] = newStack;

    return newStack;
  };

  private get isAllStackEmpty() {
    return Object.values(this.stackStorage).every((stack) => stack?.isEmpty);
  }

  private onKeyDown = (event: KeyboardEvent) => {
    const stack = this.stackStorage[event.key];

    if (!stack) return;

    const callback = stack.last?.current?.callback;

    if (!callback) return;

    callback(event);
  };

  private removeCallback({ stack, callback }: KeyboardRemoveParams) {
    stack.delete(callback);

    if (this.isAllStackEmpty) {
      window.removeEventListener(EVENT_TYPE, this.onKeyDown);
    }
  }

  public addCallback<Key extends KeyCode>({
    key,
    callback,
  }: KeyboardAddParams<Key>) {
    if (this.isAllStackEmpty) {
      window.addEventListener(EVENT_TYPE, this.onKeyDown);
    }

    const stack = this.getStack(key);

    stack.push(callback);

    return () => this.removeCallback({ stack, callback });
  }
}
