export const setLocalStorage = (data, key) => {
  if (typeof data === 'string') {
    localStorage.setItem(key, data);
  }
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const getLocalStorage = key => JSON.parse(localStorage.getItem(key));
