import { MutableRefObject, RefObject } from "react";
import { Stack } from "../lib/Stack";

export type KeyCode = KeyboardEvent["key"];

export type KeyboardCallbackType = (event: KeyboardEvent) => void;

export type KeyboardCallback = { callback: KeyboardCallbackType } | null;
export type KeyboardCallbackRef = MutableRefObject<KeyboardCallback>;

export interface UseKeyboardProps<Key extends KeyCode> {
  key: Key;
  callback: KeyboardCallbackType;
  disable?: boolean;
}

export interface KeyboardAddParams<Key extends KeyCode> {
  key: KeyCode;
  callback: KeyboardCallbackRef;
}

export interface KeyboardRemoveParams {
  stack: Stack<KeyboardCallbackRef>;
  callback: KeyboardCallbackRef;
}

export type KeyboardAddParamsType = <Key extends KeyCode>(
  params: KeyboardAddParams<Key>
) => () => void;

export type StackStorage = { [K in KeyCode]?: Stack<KeyboardCallbackRef> };
