# react-keyboard-manager

[![npm version](https://badge.fury.io/js/react-keyboard-manager.svg)](https://badge.fury.io/js/react-keyboard-manager)
[![](https://data.jsdelivr.com/v1/package/npm/react-keyboard-manager/badge)]([https://www.jsdelivr.com/package/npm/queryzz](https://www.jsdelivr.com/package/npm/react-keyboard-manager))

## KeyboardProvider

Wrap the application in **KeyboardProvider**

**Exapmle:**

```
function App() {
  return (
    <KeyboardProvider>
      <AppContent />
    </KeyboardProvider>
  );
}

```

## useKeyboard

| prop     | meaning                                       |
| -------- | --------------------------------------------- |
| key      | keyboard key value                            |
| callback | function that is called when a key is pressed |
| disable  | disable a callback call                       |

**Exapmle:**

```
useKeyboard({
  key: "Escape",
  callback: onCloseModal,
});
```
