import { useEffect, useState } from "react";
export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return storedValue.length === 0 ? storedValue : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value]
  );
  return [value, setValue];
}
