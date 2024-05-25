import { MutableRefObject, useEffect, useMemo, useRef } from "react";
import {
  KeyCode,
  KeyboardCallback,
  KeyboardCallbackRef,
  UseKeyboardProps,
} from "../types/KeyboardManager.types";
import { useKeyboardContext } from "../ui/KeyboardProvider.ui";

export function useKeyboard<Key extends KeyCode>({
  key,
  callback,
  disable = false,
}: UseKeyboardProps<Key>) {
  const callbackRef: KeyboardCallbackRef = useRef(null);
  const addCallback = useKeyboardContext();

  callbackRef.current = { callback };

  const removeCallback = useMemo(() => {
    if (disable || !addCallback) return null;
    return addCallback({ key, callback: callbackRef });
  }, [disable, key, addCallback]);

  useEffect(() => {
    if (!removeCallback) return;

    return removeCallback;
  }, [removeCallback]);
}
