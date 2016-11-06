let ls = null;
const detectLS = () => {
  if (ls !== null) return ls;
  const test = 'test';
  try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return ls = true;
  } catch(e) {
      return ls = false;
  }
}

const loadState = k => {
  if (detectLS()) {
    return JSON.parse(localStorage.getItem(k));
  }
}

const saveState = (k, state) => {
  if (detectLS()) {
    return localStorage.setItem(k, JSON.stringify(state));
  }
}

export {
  loadState,
  saveState,
};
