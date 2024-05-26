import { KeyboardProvider } from "./ui/KeyboardProvider.ui";
import { useKeyboard } from "./lib/useKeyboard";
import {
  KeyCode,
  UseKeyboardProps,
  KeyboardCallbackType,
  EventType,
} from "./types/KeyboardManager.types";

export { KeyboardProvider, useKeyboard, EventType };
export type { KeyCode, UseKeyboardProps, KeyboardCallbackType };

export default { KeyboardProvider, useKeyboard, EventType };
