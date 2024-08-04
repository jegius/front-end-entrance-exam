import { isNotVoid } from "./is-void";

export function readStorage() {
  if (isEmptyStorage()) return null;

  const data = {
    personal: {},
    experience: [],
    education: [],
    interests: [],
    languages: [],
    contacts: {},
  };

  try {
    Object.keys(data).forEach((key) => {
      const item = getItem(key);
      if (isNotVoid(item)) {
        data[key] = item;
      }
    });
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function saveStorage(data) {
  Object.keys(data).forEach((key) => {
    setItem(key, data[key]);
  });
}

function getItem(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}

export function updateItem(path, newValue) {
  const keys = path.split(".");
  const rootItem = getItem(keys[0]);
  let index = 1;
  let item = rootItem[keys[index]];

  while (index < keys.length - 1) {
    if (!item) {
      throw new Error("Invalid path");
    } else if (index === keys.length - 2) {
      item[keys[index + 1]] = newValue;
      setItem(keys[0], rootItem);
    }
    index++;
    item = item[keys[index]];
  }
}

export function removeItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
}

export function clearStorage() {
  try {
    localStorage.clear();
  } catch (e) {
    console.error(e);
  }
}

export function isEmptyStorage() {
  return localStorage.length === 0;
}
