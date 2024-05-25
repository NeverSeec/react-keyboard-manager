import { ReactNode } from "react";
import { KeyboardAddParamsType } from "../lib/KeyboardManager.types";
export declare function KeyboardProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
export declare function useKeyboardContext(): KeyboardAddParamsType | null;
