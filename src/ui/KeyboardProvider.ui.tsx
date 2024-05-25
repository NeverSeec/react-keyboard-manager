import { Children, createContext, ReactNode, useContext, useMemo } from "react";
import { KeyboardAddParamsType } from "../types/KeyboardManager.types";
import { KeyboardManager } from "../lib/KeyboardManager";

const KeyboardContext = createContext<KeyboardAddParamsType | null>(null);

export function KeyboardProvider({ children }: { children: ReactNode }) {
  const manager = useMemo(() => new KeyboardManager(), []);

  return (
    <KeyboardContext.Provider value={manager.addCallback.bind(manager)}>
      {children}
    </KeyboardContext.Provider>
  );
}

export function useKeyboardContext() {
  return useContext(KeyboardContext);
}
