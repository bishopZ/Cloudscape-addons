
export const saveLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  try {
    return value && JSON.parse(value);
  } catch (error) {
    console.warn(
      `⚠️ The ${key} value that is stored in localStorage is incorrect.
      Try to remove the value ${key} from localStorage and reload the page`
    );
    return undefined;
  }
};
