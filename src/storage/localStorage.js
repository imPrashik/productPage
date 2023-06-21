export const defaultSize = {
    size: ""
};

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return defaultSize;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return defaultSize;
    }
  }; 

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
    }
  };