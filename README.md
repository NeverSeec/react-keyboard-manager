# react-keyboard-manager

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
