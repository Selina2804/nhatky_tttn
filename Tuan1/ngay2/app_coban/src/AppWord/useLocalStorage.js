import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Lấy giá trị từ localStorage hoặc giá trị mặc định
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Lỗi khi đọc localStorage key:', key, error);
      return initialValue;
    }
  });
  // Cập nhật localStorage khi storedValue thay đổi
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn('Lỗi khi ghi localStorage key:', key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
