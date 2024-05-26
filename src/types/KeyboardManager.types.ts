import { MutableRefObject, RefObject } from "react";
import { Stack } from "../lib/Stack";

export type KeyCode = KeyboardEvent["key"];

export enum EventType {
  KEYDOWN = "keydown",
  KEYUP = "keyup",
}

export type KeyboardCallbackType = (event: KeyboardEvent) => void;

export type KeyboardCallback = { callback: KeyboardCallbackType } | null;
export type KeyboardCallbackRef = MutableRefObject<KeyboardCallback>;

export interface KeyboardAddParams<Key extends KeyCode> {
  key: KeyCode;
  callback: KeyboardCallbackRef;
  type?: EventType;
}

export interface UseKeyboardProps<Key extends KeyCode> {
  key: KeyCode;
  callback: KeyboardCallbackType;
  disable?: boolean;
  type?: EventType;
}

export interface KeyboardRemoveParams {
  stack: Stack<KeyboardCallbackRef>;
  callback: KeyboardCallbackRef;
  type: EventType;
}

export type KeyboardAddParamsType = <Key extends KeyCode>(
  params: KeyboardAddParams<Key>
) => () => void;

export type StackStorage = { [K in KeyCode]?: Stack<KeyboardCallbackRef> };
export type StackStorageByEventType = Record<EventType, StackStorage>;
