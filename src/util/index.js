const createReducer = (reactions, defState = {}) => (state = {...defState},{type, payload}) => {
  if (reactions[type]) return reactions[type](state, payload);
  return state;
}

export {
  createReducer
};
