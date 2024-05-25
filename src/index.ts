import { KeyboardProvider } from "./ui/KeyboardProvider.ui";
import { useKeyboard } from "./lib/useKeyboard";
import {
  KeyCode,
  UseKeyboardProps,
  KeyboardCallbackType,
} from "./types/KeyboardManager.types";

export { KeyboardProvider, useKeyboard };
export type { KeyCode, UseKeyboardProps, KeyboardCallbackType };

export default { KeyboardProvider, useKeyboard };
