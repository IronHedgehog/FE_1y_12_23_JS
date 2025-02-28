export const save = (localStorageKey, data) => {
  try {
    if (!localStorageKey || !data) return;
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const loadFromLocalStorage = key => {
  if (!key) return;
  try {
    const stringifyData = localStorage.getItem(key);
    const parseData = JSON.parse(stringifyData);
    return parseData;
  } catch (error) {
    console.log(error);
  }
};
