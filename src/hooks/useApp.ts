'use client';

import { useState } from 'react';

export function useApp() {
  const [localStorage, setLocalStorage] = useState({});
  const [filter, setFilter] = useState({});
  const [modal, setModal] = useState(false);
  const [demoToast, setDemoToast] = useState(false);

  const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
  };

  const useFilter = (data, query) => {
    const filteredData = data.filter((item) => {
      const itemString = JSON.stringify(item);
      return itemString.includes(query);
    });

    return filteredData;
  };

  const useModal = (isOpen, onClose) => {
    const [modalOpen, setModalOpen] = useState(isOpen);

    const handleModalClose = () => {
      setModalOpen(false);
      onClose();
    };

    return [modalOpen, handleModalClose];
  };

  const useDemoToast = (isOpen, onClose) => {
    const [toastOpen, setToastOpen] = useState(isOpen);

    const handleToastClose = () => {
      setToastOpen(false);
      onClose();
    };

    return [toastOpen, handleToastClose];
  };

  return {
    useLocalStorage,
    useFilter,
    useModal,
    useDemoToast,
  };
}