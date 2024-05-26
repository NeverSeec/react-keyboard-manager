import { EventType } from "../types/KeyboardManager.types";

export class KeyPressedListener {
  private isKeyPressed: boolean = false;

  public listener = (event: KeyboardEvent, callback: () => void) => {
    if (!this.isKeyPressed) {
      this.isKeyPressed = true;
      callback();
    }

    if (event.type === EventType.KEYUP) {
      this.isKeyPressed = false;
      callback();
    }
  };
}
