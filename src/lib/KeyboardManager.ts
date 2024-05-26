import {
  KeyCode,
  KeyboardCallbackRef,
  StackStorage,
  KeyboardRemoveParams,
  KeyboardAddParams,
  EventType,
  StackStorageByEventType,
} from "../types/KeyboardManager.types";
import { KeyPressedListener } from "./KeyPressedListener";

import { Stack } from "./Stack";

export class KeyboardManager {
  private keyPressed = new KeyPressedListener();
  private stackStorage: StackStorageByEventType = {
    [EventType.KEYDOWN]: {},
    [EventType.KEYUP]: {},
  };

  private getStack = <Key extends KeyCode>(key: Key, eventType: EventType) => {
    const stack = this.stackStorage[eventType][key];

    if (stack) return stack;

    const newStack = new Stack<KeyboardCallbackRef>();

    this.stackStorage[eventType][key] = newStack;

    return newStack;
  };

  private isAllStackEmpty(type: EventType) {
    return Object.values(this.stackStorage[type]).every(
      (stack) => stack?.isEmpty
    );
  }

  private getCallbackByEventType = (type: EventType) => {
    const stackStorageByEventType = this.stackStorage[type];

    return (event: KeyboardEvent) => {
      const stack = stackStorageByEventType[event.key];

      const listener = () => {
        const callback = stack?.last?.current?.callback;

        if (!callback) return;

        callback(event);
      };

      if (type === EventType.KEYUP) {
        listener();
        return;
      }
      this.keyPressed.listener(event, listener);
    };
  };

  private removeCallback = ({
    stack,
    callback,
    type,
  }: KeyboardRemoveParams) => {
    stack.delete(callback);

    if (this.isAllStackEmpty(type)) {
      window.removeEventListener(type, this.getCallbackByEventType(type));
    }
  };

  public addCallback = <Key extends KeyCode>({
    key,
    callback,
    type = EventType.KEYDOWN,
  }: KeyboardAddParams<Key>) => {
    if (this.isAllStackEmpty(type)) {
      window.addEventListener(type, this.getCallbackByEventType(type));
    }

    const stack = this.getStack(key, type);

    stack.push(callback);

    return () => this.removeCallback({ stack, callback, type });
  };
}
