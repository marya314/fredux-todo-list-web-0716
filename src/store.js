export const createStore = (todosReducer) => {
  let state;
  let listeners = [];
  const getState = () => state;

  const dispatch = (action) => {
    state = todosReducer(state, action);
    listeners.forEach(listener => listener())
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  dispatch({});
  return {
    getState: getState,
    dispatch: dispatch,
    listeners: listeners,
    subscribe: subscribe
  };
}
