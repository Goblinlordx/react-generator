import T from 'action/type';
const {FLUSH} = T;

const createReducer = (addReactions, defState = {}) => {
  const reactions = {
    [FLUSH]: () => ({...defState}),
    ...addReactions,
  };
  return (state = {...defState},{type, payload}) => {
    if (reactions[type]) return reactions[type](state, payload);
    return state;
  };
};

export {
  createReducer,
};
