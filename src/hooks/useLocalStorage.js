import { useState } from 'react';

const getLocalStorageValue = (key, initialValue) => {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // Check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    // Set to state
    setLocalStorageValue(valueToStore, initialValue);
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
};

export default useLocalStorage;
