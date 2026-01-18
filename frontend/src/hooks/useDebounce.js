import { useEffect, useState } from "react";

// Custom hook to debounce a value by a given delay
export function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const timer = setTimeout(() => setDebounced(value), delay);
    // Cleanup timer if value or delay changes
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
