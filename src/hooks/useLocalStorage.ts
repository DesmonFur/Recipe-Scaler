import { useState } from "react";
type Updater<T> = (prev: T) => T;

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    const updater = value as Updater<T>;

    if (typeof value === "function") {
      setStoredValue((prev: T) => {
        const nextValue = updater(prev);

        localStorage.setItem(key, JSON.stringify(nextValue));
        return nextValue;
      });
      return;
    }
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
}
